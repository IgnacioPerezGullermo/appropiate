import { PROPIERTY_REPOSITORY } from '../../core/constants';
import { Propierty } from './entities/propierty.entity';

export const propiertiesProviders = [
  {
    provide: PROPIERTY_REPOSITORY,
    useValue: Propierty,
  },
];
