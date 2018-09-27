import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpHeaders } from "@angular/common/http";


@Injectable()
export class BaseService {
    public url;
    constructor() {
        this.url = environment.baseUrl;
        console.log('this.url', this.url);
    }

    protected headersOnly() {
        let option = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return option;
    }

    protected headersWithToken() {
        let option = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': 'sdfjkkfjsdlkfsdjkfkld'

            })
        }
        return option;
    }
}