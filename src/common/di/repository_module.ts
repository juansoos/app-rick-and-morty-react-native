import {CharacterRepository} from '../../api/repository/characters';
import {httpClientService} from './http_module';

export const characterRepository = new CharacterRepository(httpClientService);
