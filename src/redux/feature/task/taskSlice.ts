import uuid from 'react-native-uuid';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskState} from '../../../types/types';
import {getRealm} from '../../../databases/realm';
import {TASK_SCHEMA} from '../../../config/constants';
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

export const getTasks = createAsyncThunk('task/getTasks', async () => {
  const realm = await getRealm();

  try {
    const response = realm
      .objects(TASK_SCHEMA)
      .filtered(`completed = false`)
      .sorted('created_at', true);
    return Array.from(response);
  } catch (e) {
    console.error(e);
    throw new Error('Error getting tasks');
  }

  //To fetch data from remote API
  /* try{
    const response = await axios.get(TASKS_URL);
    return response.data;

  }catch(e){
    return e.message
  }*/
});

export const getTask = createAsyncThunk<Task | null, GetTaskArgs>(
  'task/getTask',
  async ({taskId}) => {
    const realm = await getRealm();
    try {
      const fetchedTask = realm.objectForPrimaryKey(TASK_SCHEMA, taskId);
      return fetchedTask;
    } catch (e) {
      console.error(e);
      throw new Error('Error getting task');
    }

    //To fetch data from remote API
    /* try{
    const response = await axios.get(TASKS_URL);
    return response.data;

  }catch(e){
    return e.message
  }*/
  },
);

export const addNewTask = createAsyncThunk(
  'tasks/addNewTask',
  async (initialTask: Task) => {
    const realm = await getRealm();
    try {
      initialTask._id = uuid.v4();
      initialTask.completed = false;
      initialTask.created_at = new Date();

      realm.write(() => {
        realm.create(TASK_SCHEMA, initialTask);
      });
    } catch (e) {
      console.error(e);
      throw new Error('Falha ao atualizar a tarefa');
    }

    //To add data to remote API
    /* try{
    const response = await axios.post(TASKS_URL,initialTask);
    return response.data;

  }catch(e){
    return e.message
  }*/
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

    console.log('ID OF TASK====>', updatedTaskData._id);
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
      throw new Error('Falha ao atualizar a tarefa');
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
      // Reducers for addNewTask, updateTask, etc.
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
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
            return {...task, ...updatedTask}; // Return updated task
          }
          return task; // Return unchanged task
        });
      })
      .addCase(updateTaskData.rejected, (state, action) => {
        console.error('Error updating task:', action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        if (action.payload) {
          // Transform Realm object to a plain JavaScript object
          /*const task = {
            _id: action.payload._id,
            title: action.payload.title,
            description: action.payload.description,
            dueDate: action.payload.dueDate,
            priority: action.payload.priority,
            completed: action.payload.completed || false, // Set default if needed
            created_at: action.payload.created_at || new Date(), // Set default if needed
          };*/
          state.currentTask = action.payload;
        } else {
          state.currentTask = null; // Handle null case
        }
        state.isLoading = false;
      })
      .addCase(getTask.rejected, (state, action) => {
        console.error('Error fetching task:', action.error.message);
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {setIsLoading, resetTask} = taskSlice.actions;
export default taskSlice.reducer;
