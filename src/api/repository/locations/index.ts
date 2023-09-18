import {InfoResult} from '../../model/info_result.model';
import {Location} from '../../model/location.model';

type GetAllLocationsResponse = {
  info: InfoResult | null;
  results: Array<Location>;
  error: null | string;
};

export const GetAllLocations = async (): Promise<GetAllLocationsResponse> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const data: GetAllLocationsResponse = await response.json();

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
