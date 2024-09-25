import uuid from 'react-native-uuid';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskState} from '../../../types/types';
import {getRealm} from '../../../databases/realm';
import {MOCK_SERVER_BASE_URL, TASK_SCHEMA} from '../../../config/constants';
import axios from 'axios';

interface GetTaskArgs {
  taskId: string;
}
// Initial state
const initialState: TaskState = {
  tasks: [],
  currentTask: null,
  isLoading: true,
  error: undefined,
};

// Sync tasks with the server
export const syncTasksWithServer = createAsyncThunk(
  'task/syncTasksWithServer',
  async email => {
    const realm = await getRealm();
    const unsyncedTasks = realm
      .objects(TASK_SCHEMA)
      .filtered('synced == false AND owner_id == $0', email);

    const unsyncedArray = Array.from(unsyncedTasks);

    try {
      for (const task of unsyncedArray) {
        // Prepare the task data by modifying the synced property
         const {_id, ...taskData} = task;      
        try {
          // Push the task to the server
          const response = await axios.post(MOCK_SERVER_BASE_URL, taskData);
          if (response.status === 201) {
            console.warn('Successfully synced task with the server!');
          }
        } catch (e) {
          console.error('Error syncing task:', e);   
        }
      }
      return unsyncedArray;
    } catch (e) {
      console.error('Error syncing tasks:', e);
    }
  },
);

// Thunk to add task to Realm (offline)
export const addTaskToRealm = createAsyncThunk(
  'task/addTaskToRealm',
  async (payload: {initialTask: Task; email: string}, {dispatch}) => {
    const realm = await getRealm();
    const {initialTask, email} = payload;
    initialTask._id = uuid.v4();
    initialTask.completed = false;
    initialTask.created_at = new Date();
    initialTask.owner_id = email;
    initialTask.synced = false; 

    realm.write(() => {
      realm.create(TASK_SCHEMA, initialTask);
    });

    return initialTask;
  },
);

export const getTasks = createAsyncThunk('task/getTasks', async email => {
  const realm = await getRealm();

  try {
    const response = realm
      .objects(TASK_SCHEMA)
      .filtered(`completed = false && owner_id ==$0`, email)
      .sorted('created_at', true);
    return Array.from(response);
  } catch (e) {
    console.error(e);
    throw new Error('Error getting tasks');
  }
});

export const getOneTask = createAsyncThunk<Task | null, GetTaskArgs>(
  'task/getOneTask',
  async ({taskId}) => {
    const realm = await getRealm();
    try {
      const fetchedTask = realm.objectForPrimaryKey(TASK_SCHEMA, taskId);
      return fetchedTask;
    } catch (e) {
      console.error(e);
      throw new Error('Error getting task');
    }
  },
);

export const deleteTask = createAsyncThunk<string, string>(
  'tasks/deleteTask',
  async taskId => {
    const realm = await getRealm();
    try {
      const taskSelected = realm.objectForPrimaryKey(TASK_SCHEMA, taskId);
      realm.write(() => {
        if (taskSelected) {
          realm.delete(taskSelected);
        }
      });
      return taskId;
    } catch (e) {
      console.error(e);
      throw new Error('Falha ao deletar a tarefa');
    }
  },
);

export const updateTaskData = createAsyncThunk(
  'tasks/updateTask',
  async ({updatedTaskData}: {updatedTaskData: Task}) => {
    const realm = await getRealm();
    try {
      const taskSelected = realm.objectForPrimaryKey(
        TASK_SCHEMA,
        updatedTaskData._id,
      );

      if (taskSelected) {
        realm.write(() => {
          taskSelected.title = updatedTaskData.title;
          taskSelected.description = updatedTaskData.description;
          taskSelected.dueDate = updatedTaskData.dueDate;
          taskSelected.priority = updatedTaskData.priority;
        });
      }
      return taskSelected;
    } catch (e) {
      console.error(e);
      throw new Error('Error updating task');
    }
  },
);
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetTask: state => {
      state.currentTask = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(getTasks.rejected, (state, action) => {
        console.error('Error fetching tasks:', action.error.message);
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addTaskToRealm.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addTaskToRealm.rejected, (state, action) => {
        console.error('Error adding task:', action.error.message);
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        console.error('Error deleting task:', action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateTaskData.fulfilled, (state, action) => {
        const updatedTask = action.payload;

        state.tasks = state.tasks.map(task => {
          if (task._id === updatedTask._id) {
            return {...task, ...updatedTask}; 
          }
          return task; 
        });
      })
      .addCase(updateTaskData.rejected, (state, action) => {
        console.error('Error updating task:', action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getOneTask.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentTask = action.payload;
        } else {
          state.currentTask = null;
        }
        state.isLoading = false;
      })
      .addCase(getOneTask.rejected, (state, action) => {
        console.error('Error fetching task:', action.error.message);
        state.error = action.error.message;
      })
      .addCase(syncTasksWithServer.fulfilled, (state, action) => {
        action.payload.forEach((syncedTask) => {
          const taskIndex = state.tasks.findIndex(
            (task) => task._id === syncedTask._id
          );
          if (taskIndex !== -1) {
            state.tasks[taskIndex].synced = true; 
          }
        });
      })
      .addCase(syncTasksWithServer.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {setIsLoading, resetTask} = taskSlice.actions;
export default taskSlice.reducer;
