import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../shared/services/socket.service';
import { MsgService } from '../../shared/services/msg.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public msgBody: any;
  public user;
  public users;
  constructor(public socketService: SocketService,
    public msgService: MsgService) { }
  public messages = [];
  public userSelected: boolean = false;
  public isTyping: boolean = false;
  public nameaaa;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.runSocket();
    this.socketService.socket.emit('user', { name: this.user.username });
    this.msgBody = {
      msg: '',
      sender: '',
      receiver: '',
      receiverName: ''
    }
  }

  runSocket() {
    console.log('i ma here at run socket');
    this.socketService.socket.on('replyMsg', (data) => {
      this.messages.push(data);
      this.userSelected = true;
      this.msgBody.receiver = data.senderId;
      console.log('data in client at hello event ', data);
    });
    this.socketService.socket.on('users', (data) => {
      this.users = data;
    });
    this.socketService.socket.on('is-typing', (data) => {
      console.log('data.sender', data.sender);
      this.nameaaa = data.sender
      this.isTyping = true;
    });
    this.socketService.socket.on('typing-stopped', (data) => {
      console.log('data.sender', data.sender);
      this.nameaaa = data.sender;

      this.isTyping = false;
    })
  }

  send() {
    if (!this.userSelected) {
      this.msgService.showInfo("Please select user to send msg");
      return;
    }
    this.msgBody.sender = this.user.username;
    this.socketService.socket.emit('newMsg', this.msgBody);
    this.msgBody.msg = '';
  }

  selectUser(user) {
    this.userSelected = true;
    this.msgBody.receiver = user.id
    this.msgBody.receiverName = user.name;
  }

  typing(val) {
    if (val) {
      this.socketService.socket.emit('typing', this.msgBody);
    } else {
      this.socketService.socket.emit('typing-stop', this.msgBody);
    }
  }



}
