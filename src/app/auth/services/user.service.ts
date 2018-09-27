
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
            this[key] = option[key] || '';
        }
    }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from './../../../environments/environment';
import { BaseService } from "../../shared/services/base.service";

@Injectable()
export class AuthService extends BaseService {

    constructor(public http: HttpClient) {
        super();
    }


    login(data: User) {
        // return new Observable((observer) => {

        //     this.http.post(this.url, data, {
        //         headers: new HttpHeaders({
        //             'Content-Type': 'application/json',
        //         })http://localhost:4040/
        //     })
        //         .subscribe(
        //             (data: any) => {
        //                 observer.next(data);
        //             },
        //             (err) => {
        //                 observer.error(err);
        //             },
        //             () => {
        //             })
        // })
        return this.http.post(this.url + 'login', data, this.headersOnly())
    }

    register(data: User) {
        return this.http.post(this.url + 'register', data, this.headersOnly())
    }

}