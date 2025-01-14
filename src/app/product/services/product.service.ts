
export class Product {
    _id: string | number;
    name?: string;
    category?: string;
    brand?: string;
    price?: number;
    quantity?: number;
    tags?: Array<string>;
    description?: string;
    color?: string;
    size?: string;
    manuDate?: string;
    createdAt?: string;
    updateAt?: string;
    status?: string;
    quality?: string;

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
export class ProductService extends BaseService {

    constructor(public http: HttpClient) {
        super();
    }

    add(data: Product) {
        return this.http.post(this.url + 'product', data, this.headersWithToken());
    }

    get() {
        return this.http.get(this.url + 'product', this.headersWithToken());
    }
    getById(id) {
        return this.http.get(this.url + 'product/' + id, this.headersWithToken());

    }
    update(data: Product) {
        return this.http.put(this.url + 'product/' + data._id, data, this.headersWithToken());

    }
    remove(id) {
        return this.http.delete(this.url + 'product/' + id, this.headersWithToken());

    }
    search(data) {
        return this.http.post(this.url + 'product/search', data, this.headersWithToken());

    }

    upload(method: any, files: any, data: any) {
        return new Observable((observer) => {
            const xhttp = new XMLHttpRequest();
            const formData = new FormData();
            if (files.length) {
                formData.append('image', files[0], files[0].name);
            }
            if (data !== undefined) {
                for (let key in data) {
                    formData.append(key, data[key]);
                }
            }

            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        observer.next(xhttp.response)
                    } else {
                        observer.error(xhttp.response);
                    }
                }
            }
            let token = localStorage.getItem('token');
            if (method == 'PUT') {
                xhttp.open(method, this.url + `product/${data._id}?token=${token}`, true);

            } else {
                xhttp.open(method, this.url + 'product?token=' + localStorage.getItem('token'), true);
            }
            xhttp.send(formData);
        })
    }

}