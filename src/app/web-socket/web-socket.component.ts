import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {
  title = 'socket-io-example';

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(){
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data);
    })
  }

}
