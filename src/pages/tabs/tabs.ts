import { Component } from '@angular/core';

import { MyStatsPage } from '../pages';
import { AddStatPage } from '../pages';
import { AccountPage } from '../pages';
import { ToolsPage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyStatsPage;
  tab2Root: any = AddStatPage;
  tab3Root: any = AccountPage;
  tab4Root: any = ToolsPage;

  constructor() {

  }
}
