import { CreateBrokerDto } from './create-broker.dto';
declare const UpdateBrokerDto_base: import("@nestjs/common").Type<Partial<CreateBrokerDto>>;
export declare class UpdateBrokerDto extends UpdateBrokerDto_base {
    readonly lastName: string;
    readonly firstName: string;
    readonly profilePicture: string;
}
export {};
