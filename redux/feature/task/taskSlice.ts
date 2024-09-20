import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskState} from '../../../src/types/types';
import {getRealm} from '../../../src/databases/realm';
import {TASK_SCHEMA} from '../../../src/constants/schemas';

const url = '';

export const getTasks = createAsyncThunk('task/getTasks', async () => {
  const realm = await getRealm(); // Use await here

  try {
    const response = realm.objects(TASK_SCHEMA).filtered(`completed = false`);
    return Array.from(response); 
  } catch (e) {
    throw new Error('Error fetching tasks'); // Throw an error for rejected case
  } finally {
    //realm.close();
  }
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
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task._id !== taskId);
    },
    addTask: (state, {payload}) => {
      const task = payload.task;
      state.tasks = [...state.tasks, task];
      state.isLoading = false;
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
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
      });
  },
});

// Export actions and reducer
export const {addTask, removeTask, setCurrentTask, setIsLoading} =
  taskSlice.actions;
export default taskSlice.reducer;
