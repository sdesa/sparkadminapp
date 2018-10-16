import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import aws_exports from '../.././aws-exports';
import Amplify, { API } from 'aws-amplify';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public amplifyService: AmplifyService) { 
    this.amplifyService = amplifyService;
  }

  ngOnInit() {
    Amplify.configure(aws_exports);
    const headers1 = new Headers();

    API.get('sparkapi', '/items', {}).then(data => {
      console.log(data);
    });

    var headers = {"Access-Control-Allow-Origin":"*"};

    this.amplifyService.api().get('sparkapi', '/items', headers)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    })
  }

}
