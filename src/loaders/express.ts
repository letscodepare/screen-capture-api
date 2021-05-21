import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import StatusCodes from 'http-status-codes'

import global from '@config/global'
import routes from '@api/index'
import morganMiddleware from '@api/middlewares/morgan'
import logger from '@shared/logger'
import {CustomError} from '@shared/error.interface'


export default ({ app }: { app: express.Application }) => {

  /**
   * Health Check endpoints
   */
  app.get('/status', (req, res) => {
    res.status(StatusCodes.OK).end()
  });
  app.head('/status', (req, res) => {
    res.status(StatusCodes.OK).end()
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy')

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // Morgan middlwares connected to logger winston
  app.use(morganMiddleware)

  // Security
  app.use(helmet());

  // Load API routes
  app.use(global.api.prefix, routes())


  // Print API errors
  app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
 
    logger.error(err);
    return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
    });
  });

};