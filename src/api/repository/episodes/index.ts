import {Episode} from '../../model/episode.model';
import {InfoResult} from '../../model/info_result.model';

type GetAllEpisodesResponse = {
  info: InfoResult | null;
  results: Array<Episode>;
  error: null | string;
};

export const GetAllEpisodes = async (): Promise<GetAllEpisodesResponse> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
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
