import { Client } from './entities/client.entity';
export declare const clientsProviders: {
    provide: string;
    useValue: typeof Client;
}[];
