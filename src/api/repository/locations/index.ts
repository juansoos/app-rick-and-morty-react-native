import {HttpClientService} from '../../http_client';
import {Location} from '../../model/location.model';
import {CustomResponse} from '../../model/response.model';

export class LocationRepository {
  private service: HttpClientService;

  constructor(service: HttpClientService) {
    this.service = service;
  }

  async getLocations(page: number = 1): Promise<CustomResponse<Location>> {
    try {
      const url = `/location/?page=${page}`;
      const data: CustomResponse<Location> = await this.service.get(url);

      return {
        info: data.info,
        results: data.results,
        error: null,
      };
    } catch (e) {
      return {
        info: null,
        results: [],
        error: (e as Error).message,
      };
    }
  }
}
