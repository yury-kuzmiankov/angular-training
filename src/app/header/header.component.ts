import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() menuChangeEvt = new EventEmitter<string>();

  chooseMenu(selector: string) {
    this.menuChangeEvt.emit(selector);
  }
}
