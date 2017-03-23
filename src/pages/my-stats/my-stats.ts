import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StatDetailPage } from '../pages';

import { Stats } from '../../providers/providers';
import { Stat } from '../../models/models';

@Component({
  selector: 'page-my-stats',
  templateUrl: 'my-stats.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyStatsPage {

  currentStats: Stat[];
  prsOnly: boolean = false;

  constructor(public navCtrl: NavController, public stats: Stats) {
    this.currentStats = this.stats.query();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openStat(stat: Stat) {
    this.navCtrl.push(StatDetailPage, {
      stat: stat
    });
  }
}
