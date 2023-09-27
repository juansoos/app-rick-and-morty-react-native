import {HttpClientService} from '../../http_client';
import {Episode} from '../../model/episode.model';
import {CustomResponse} from '../../model/response.model';

export class EpisodeRepository {
  private service: HttpClientService;

  constructor(service: HttpClientService) {
    this.service = service;
  }

  async getEpisodes(page: number = 1): Promise<CustomResponse<Episode>> {
    try {
      const url = `/episode/?page=${page}`;
      const data: CustomResponse<Episode> = await this.service.get(url);

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
