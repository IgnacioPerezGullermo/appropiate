import { Client } from './entities/client.entity';

export const clientProviders = [
  {
    provide: 'CLIENTS_REPOSITORY',
    useValue: Client,
  },
];
