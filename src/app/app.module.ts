import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// providers
import { Stats } from '../providers/providers';

// pipes
import { OrderByPipe } from '../pipes/pipes';

// pages
import { AccountPage } from '../pages/pages';
import { AddStatPage } from '../pages/pages';
import { MyStatsPage } from '../pages/pages';
import { ToolsPage } from '../pages/pages';
import { TabsPage } from '../pages/pages';

// @NgModule explained: https://angular.io/docs/ts/latest/guide/ngmodule.html
@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddStatPage,
    MyStatsPage,
    ToolsPage,
    TabsPage,
    OrderByPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddStatPage,
    MyStatsPage,
    ToolsPage,
    TabsPage
  ],
  providers: [
    Stats, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
