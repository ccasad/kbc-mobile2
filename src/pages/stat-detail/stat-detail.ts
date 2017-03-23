import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Stats } from '../../providers/providers';

@Component({
  selector: 'page-stat-detail',
  templateUrl: 'stat-detail.html'
})
export class StatDetailPage {
  stat: any;

  constructor(public navCtrl: NavController, navParams: NavParams, stats: Stats) {
    this.stat = navParams.get('stat') || stats.defaultStat;
  }

}
