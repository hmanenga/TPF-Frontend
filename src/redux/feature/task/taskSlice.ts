import uuid from 'react-native-uuid';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskState} from '../../../types/types';
import {getRealm} from '../../../databases/realm';
import {TASK_SCHEMA} from '../../../constants/schemas';
import axios from 'axios';

export const getTasks = createAsyncThunk('task/getTasks', async () => {
  const realm = await getRealm(); // Use await here

  try {
    const response = realm
      .objects(TASK_SCHEMA)
      .filtered(`completed = false`)
      .sorted('created_at', true);
    return Array.from(response);
  } catch (e) {
    console.error(e);
    throw new Error('Falha ao atualizar a tarefa');
  }

  //To fetch data from remote API
  /* try{
    const response = await axios.get(TASKS_URL);
    return response.data;

  }catch(e){
    return e.message
  }*/
});

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
  async (taskId) => {
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
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({
    taskId,
    updatedTaskData,
  }: {
    taskId: string;
    updatedTaskData: Task;
  }) => {
    const realm = await getRealm();
    const taskSelected = realm.objectForPrimaryKey(TASK_SCHEMA, taskId);
    try {
      realm.write(() => {
        if (taskSelected) {
          taskSelected.title = updatedTaskData.title;
          taskSelected.description = updatedTaskData.description;
          taskSelected.dueDate = updatedTaskData.dueDate;
          taskSelected.priority = updatedTaskData.priority;
        }
      });
      return taskSelected;
    } catch (e) {
      console.error(e);
      throw new Error('Falha ao atualizar a tarefa');
    }
  },
);

// Initial state
const initialState: TaskState = {
  tasks: [],
  currentTask: null,
  isLoading: true,
  error: undefined,
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
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
      .addCase(updateTask.fulfilled, (state, action) => {});
  },
});

// Export actions and reducer
export const {setIsLoading} = taskSlice.actions;
export default taskSlice.reducer;
