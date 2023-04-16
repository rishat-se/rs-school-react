import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { isFetchBaseQueryError } from './isFetchBaseQueryError';

export const getErrMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
  if (error) {
    if (isFetchBaseQueryError(error)) {
      return 'error' in error ? error.error : JSON.stringify(error.data);
    } else {
      return error.message;
    }
  } else {
    return undefined;
  }
};
