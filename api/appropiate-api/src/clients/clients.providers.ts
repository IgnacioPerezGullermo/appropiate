import { Client } from './entities/client.entity';
import { CLIENTS_REPOSITORY } from '../../core/constants';

export const clientProviders = [
  {
    provide: CLIENTS_REPOSITORY,
    useValue: Client,
  },
];
