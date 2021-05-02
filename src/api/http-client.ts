import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import R from 'ramda';

const DEFAULT_TIMEOUT = 30000;

const interceptorResponseHandler = <T>(res: AxiosResponse<T>) => res.data;

const interceptorResponseErrorHandler = (err: Error) => {
  const httpStatus = R.path(['response', 'status'], err);
  const responseError = R.pathOr(
    {
      errorCode: 'UNKNOWN_API_ERROR',
      name: 'UNKNOWN_API_ERROR',
      message: 'UNKNOWN_API_ERROR',
    },
    ['response', 'data', 'errors', 0],
    err
  );
  const { name, message, stack } = new Error(responseError.message);

  return Promise.reject({
    errorCode: responseError.errorCode,
    httpStatus,
    message,
    stack,
    name,
  });
};

interface CustomAxiosInstance extends AxiosInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

export const create = (options?: AxiosRequestConfig): CustomAxiosInstance => {
  const instance = axios.create({
    timeout: DEFAULT_TIMEOUT,
    ...options,
  });

  instance.interceptors.response.use(
    interceptorResponseHandler,
    interceptorResponseErrorHandler
  );
  return instance;
};

export default {
  create,
};
