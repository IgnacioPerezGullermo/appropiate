import { CreateClientDto } from './create-client.dto';
declare const UpdateClientDto_base: import("@nestjs/common").Type<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
    readonly name?: string;
    readonly password?: string;
    readonly email?: string;
}
export {};
