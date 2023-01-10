import { Broker } from './entities/broker.entity';
import { BROKER_REPOSITORY } from '../../core/constants';

export const BrokerProviders = [
  {
    provide: BROKER_REPOSITORY,
    useValue: Broker,
  },
];
