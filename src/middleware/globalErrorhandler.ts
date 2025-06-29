/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {  NextFunction, Request, Response } from 'express';
import config from '../config';


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {



     res.status(500).json({
          success: false,
          message: err.message || "something went wrong",
          error: err,
          stack: config.node_env === 'development' ? err?.stack : null,
     });
};



export default globalErrorHandler

