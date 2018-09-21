export class User {

    username?: string;
    password?: string;
    email?: string;
    phone?: number;
    address?: string;
    name?: string;
    age?: string;
    gender?: string;

    constructor(option: any) {
        console.log('here ', option);
        // this.username = option.username || '';
        // this.password = option.password || '';
        // this.email = option.email || '';
        // this.address = option.address || '';
        // this.phone = option.phone;
        // this.age = option.age || '';
        // this.gender = option.gender || '';

        for (let key in option) {
            console.log('key ', key)
            this[key] = option[key] || '';
        }
    }
}