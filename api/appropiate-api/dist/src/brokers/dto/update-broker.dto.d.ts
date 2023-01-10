import { CreateBrokerDto } from './create-broker.dto';
declare const UpdateBrokerDto_base: import("@nestjs/common").Type<Partial<CreateBrokerDto>>;
export declare class UpdateBrokerDto extends UpdateBrokerDto_base {
    readonly name?: string;
    readonly password?: string;
    readonly email?: string;
    readonly type?: string;
    readonly tel?: number;
}
export {};