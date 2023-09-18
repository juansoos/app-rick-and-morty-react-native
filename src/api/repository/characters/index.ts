import {Character} from '../../model/character.model';
import {InfoResult} from '../../model/info_result.model';

type GetAllCharactersResponse = {
  info: InfoResult | null;
  results: Array<Character>;
  error: null | string;
};

export const GetAllCharacters = async (): Promise<GetAllCharactersResponse> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
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
