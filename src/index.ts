import express from 'express';
import global from '@config/global';
import logger from '@shared/logger';

async function startServer() {

  const app = express();

  await require('./loaders').default({ expressApp:app });

  app.listen(global.port, () => {
    logger.info(`
    Server listening on port: ${global.port}
    `);
  }).on('error', err => {
    logger.error(err);
    process.exit(1);
  });

}

startServer();