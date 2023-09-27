import {InfoResult} from './info_result.model';

export interface CustomResponse<T> {
  info: InfoResult | null;
  results: Array<T>;
  error: null | string;
}
