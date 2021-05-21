import logger from '@shared/logger';
import express from 'express';
import expressLoader from './express';

export default async ({ expressApp }: { expressApp: express.Application }) => {

  // preload your database here.

  await expressLoader({ app:expressApp });
  logger.info('Express Initialized');
};