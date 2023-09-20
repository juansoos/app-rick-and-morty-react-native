import {Episode} from '../../model/episode.model';
import {InfoResult} from '../../model/info_result.model';

type GetAllEpisodesResponse = {
  info: InfoResult | null;
  results: Array<Episode>;
  error: null | string;
};

export const GetAllEpisodes = async (
  page: number = 1,
): Promise<GetAllEpisodesResponse> => {
  try {
    const url = `https://rickandmortyapi.com/api/episode/?page=${page}`;
    const response = await fetch(url);
    const data: GetAllEpisodesResponse = await response.json();

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
};
