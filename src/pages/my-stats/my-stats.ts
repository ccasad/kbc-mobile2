// core
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

// providers
import { Stats } from '../../providers/providers';

// models
import { Stat } from '../../models/models';

// pages
import { StatDetailPage } from '../pages';

@Component({
  selector: 'page-my-stats',
  templateUrl: 'my-stats.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyStatsPage {

  allStats: Stat[];
  prStats: Stat[];
  listType: string = 'myprs';
  pageTitle: string = 'My Personal Records';

  constructor(public navCtrl: NavController, public stats: Stats) {
    this.allStats = this.stats.query();
    this.prStats = this.stats.query({'isPr':true});
  }

  ionViewDidLoad() {
    
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
