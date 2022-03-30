import { Error as ErrorType } from '../types/error';
import request from 'axios';
import { HttpCode } from '../const';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }
  }
};
