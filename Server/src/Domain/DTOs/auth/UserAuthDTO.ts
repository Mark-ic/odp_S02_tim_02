export class UserAuthDTO{
    public constructor(
        public id:number = 0,
        public username:string = '',
        public role:string = '',
        public status?: "OK" | "NO_USER" | "BAD_PASSWORD" | "OTHER"
    ){}
}