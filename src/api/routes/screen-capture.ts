import { Router } from 'express';
import logger from '@shared/logger';
const route = Router();

export default (app: Router) => {
  app.use('/screen-capture', route);

  route.post('/', (req, res) => {
    return res.status(200).json({ message: 'Process asdasdData'});
  });
  
};
