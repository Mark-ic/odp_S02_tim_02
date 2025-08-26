export class User {
    public constructor(
        public idUser: number = 0,
        public username: string = '',
        public phone: string = '',
        public role: string = 'user',
        public password: string = ''
    ) { }
}