
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
        for (let key in option) {
            console.log('key ', key)
            this[key] = option[key] || '';
        }
    }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

    url: string;
    constructor(public http: HttpClient) {
        this.url = 'http://localhost:4040/login'
    }

    login(data: User) {
        return new Promise((resolve, reject) => {

            this.http.post(this.url, data, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            }).subscribe((data: any) => {
                resolve(data);
            }, (err) => {
                reject(err);
            })
        })
    }

    // toUpperCase(str: string) {
    //     return str.toUpperCase();
    // }
}