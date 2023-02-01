import { CreateClientDto } from './create-client.dto';
declare const UpdateClientDto_base: import("@nestjs/common").Type<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
    readonly lastName: string;
    readonly firstName: string;
    readonly ageRange: string;
    readonly basicIncome?: number;
    readonly profilePicture?: string;
}
export {};
