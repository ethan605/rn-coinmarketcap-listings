import { Action } from 'redux-actions';
import { ListingRecord } from 'src/models/ListingRecord';

export type PromiseResolver<T> = (value?: T | PromiseLike<T>) => void;
export type PromiseRejector = (reason?: Error | undefined) => void;

export interface PromiseRequestPayload<T> {
  data?: T;
  errorMessage?: string;
  promise?: {
    resolve: PromiseResolver<T>;
    reject: PromiseRejector;
  };
}

export interface FetchListingsPayload extends PromiseRequestPayload<ListingRecord[]> {
  page?: number;
}

export type ReduxActions = Action<FetchListingsPayload>;
