import { Sequelize } from 'sequelize-typescript';
export declare function extractStringEnvVar(key: keyof NodeJS.ProcessEnv): string;
export declare function extractNumberEnvVar(key: keyof NodeJS.ProcessEnv): number;
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
}[];
