// core
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// providers
import { Api } from './api';

// models
import { Stat } from '../models/models';

@Injectable()
export class Stats {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/stats', params)
      .map(resp => resp.json());
  }

  add(stat: Stat) {
  }

  delete(stat: Stat) {
  }

}
