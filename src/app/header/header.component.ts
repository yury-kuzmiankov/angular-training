import { ActiveTab } from '../shared/model/active-tab.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Output() menuChangeEvt = new EventEmitter<ActiveTab>();
  activeTab = ActiveTab;
  setActiveMenu(activeTab: ActiveTab) {
    this.menuChangeEvt.emit(activeTab);
  }
}
