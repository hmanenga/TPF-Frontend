import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './feature/task/taskSlice.ts';


const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

export const store = configureStore({
  reducer: {
    task: taskReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
