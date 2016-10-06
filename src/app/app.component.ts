/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.scss'],
  templateUrl: './app.template.pug'
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Tutorial JS';
  url = 'https://twitter.com/lekhmanrus';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    setTimeout(function() {
      jQuery.material.init();
    }, 300);
  }

}

