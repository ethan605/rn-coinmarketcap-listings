import { Action } from 'redux-actions';

export type PromiseResolver<T> = (value?: T | PromiseLike<T>) => void;
export type PromiseRejector = (reason?: Error | undefined) => void;

export interface PromiseRequestPayload<T> {
  errorMessage?: string;
  data?: T;
  meta?: {
    resolve: PromiseResolver<T>;
    reject: PromiseRejector;
  };
}

export interface FetchListingsPayload extends PromiseRequestPayload<object[]> {
  page?: number;
}

export type ReduxActions = Action<FetchListingsPayload>;
