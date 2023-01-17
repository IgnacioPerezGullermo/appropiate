import { Strategy } from 'passport-jwt';
import { UserService } from 'src/clients/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<any>;
}
export {};
