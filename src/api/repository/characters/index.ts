import {HttpClientService} from '../../http_client';
import {Character} from '../../model/character.model';
import {CustomResponse} from '../../model/response.model';

export class CharacterRepository {
  private service: HttpClientService;

  constructor(service: HttpClientService) {
    this.service = service;
  }

  async getCharacters(page: number = 1): Promise<CustomResponse<Character>> {
    try {
      const url = `/character/?page=${page}`;
      const data: CustomResponse<Character> = await this.service.get(url);

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
