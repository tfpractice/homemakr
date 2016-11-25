const dbConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/homemakr',
  port:     process.env.PORT || 3000,
};
import Task from './task';
import User from './user';
export { dbConfig, Task, User, };
