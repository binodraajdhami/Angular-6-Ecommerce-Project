import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../shared/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public msg;
  public user;
  public users;
  constructor(public socketService: SocketService) { }
  public messages = [];
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.runSocket();
    this.socketService.socket.emit('user', { name: this.user.username });
  }

  runSocket() {
    console.log('i ma here at run socket');
    this.socketService.socket.on('replyMsg', (data) => {
      this.messages.push(data);
      console.log('data in client at hello event ', data);
    });
    this.socketService.socket.on('users', (data) => {
      console.log('data', data);
      this.users = data;
    });
  }

  send() {
    this.socketService.socket.emit('newMsg', { msg: this.msg });
    this.msg = '';
  }


}
