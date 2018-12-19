export class UserModel {
    id: number;
    name: string;
    email: string;
    adress: string;
    dateOfBirth: string;
    gender: string;

    constructor(param?: UserModel) {
        if (param) {
            // noinspection TypeScriptValidateTypes
            Object.assign(this, param);
        }
    }

    static get exampleUser(): UserModel {
        return {
            id: 0,
            name: 'Legyek Réka',
            email: 'legyekreka@gmail.com',
            adress: 'villő utca',
            dateOfBirth: ' 1989.12.15',
            gender: 'female'
        };
    }
}
