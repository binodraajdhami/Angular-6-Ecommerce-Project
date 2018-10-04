import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { environment } from "../../../environments/environment";

@Injectable()
export class SocketService {
    public socket;
    constructor() {
        this.socket = io(environment.socketUrl);
    }

}