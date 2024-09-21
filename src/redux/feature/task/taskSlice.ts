import uuid from 'react-native-uuid';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskState} from '../../../types/types';
import {getRealm} from '../../../databases/realm';
import {TASK_SCHEMA} from '../../../constants/schemas';
import axios from 'axios';

export const getTasks = createAsyncThunk('task/getTasks', async () => {
  const realm = await getRealm(); // Use await here

  try {
    const response = realm.objects(TASK_SCHEMA).filtered(`completed = false`)
      .sorted('created_at',true);
    console.log('RESPONSE FROM REALM==>', response);
    return Array.from(response);
  } catch (e) {
    throw new Error('Error fetching tasks'); // Throw an error for rejected case
  } finally {
    //realm.close();
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
    } finally {
      //realm.close();
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

export const removeTask = createAsyncThunk('tasks/removeTask', async () => {




 /* try {
    const response = await axios.delete(`${TASKS_URL}/${initialTask._id}`);
    return response.data;
  } catch (e) {
    return e.message;
  }*/
});

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
        console.log(action.payload);
        state.tasks.push(action.payload);
        state.isLoading = false;
      });
  },
});

// Export actions and reducer
export const {setIsLoading} = taskSlice.actions;
export default taskSlice.reducer;
