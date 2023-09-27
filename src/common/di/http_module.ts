import {HttpClientService} from '../../api/http_client';

export const httpClientService = new HttpClientService(
  'https://rickandmortyapi.com/api',
);
