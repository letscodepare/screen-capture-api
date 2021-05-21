import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const hasEnvConfigure = dotenv.config();

if (hasEnvConfigure.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT , 10),

  /**
   * Setup your database url here
   */
  databaseURL: process.env.DATABASE_URI,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};