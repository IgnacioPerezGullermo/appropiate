import { CLIENT_REPOSITORY } from '../../core/constants';
import { Client } from './entities/client.entity';

export const clientsProviders = [
  {
    provide: CLIENT_REPOSITORY,
    useValue: Client,
  },
];
