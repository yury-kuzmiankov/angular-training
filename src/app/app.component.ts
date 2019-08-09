import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-training';
  ngOnInit() {
    firebase.initializeApp({
      // invalid apiKey
      apiKey: 'AIzaSyAZfxm90HDO_Ej_J0_Uz48Jl4rgc8vlUb*',
      authDomain: 'recipe-itiv422.firebaseio.com'
    });
  }
}
