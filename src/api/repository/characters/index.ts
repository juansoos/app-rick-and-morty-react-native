import {Character} from '../../model/character.model';
import {InfoResult} from '../../model/info_result.model';

type GetAllCharactersResponse = {
  info: InfoResult | null;
  results: Array<Character>;
  error: null | string;
};

export const GetAllCharacters = async (
  page: number = 1,
): Promise<GetAllCharactersResponse> => {
  try {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(url);
    const data: GetAllCharactersResponse = await response.json();

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
