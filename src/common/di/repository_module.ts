import {CharacterRepository} from '../../api/repository/characters';
import {EpisodeRepository} from '../../api/repository/episodes';
import {LocationRepository} from '../../api/repository/locations';
import {httpClientService} from './http_module';

export const characterRepository = new CharacterRepository(httpClientService);
export const locationRepository = new LocationRepository(httpClientService);
export const episodeRepository = new EpisodeRepository(httpClientService);
