import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Stat } from '../../models/models';

// id: number;
// type: number;
// value: any;
// date: Date;
// info: string;
// comment: string;

@Injectable()
export class Stats {
  stats: Stat[] = [];

  defaultStat: any = {
    "id": 0,
    "name": "",
    "description": "",
    "formElementId": 1,
    "options": "",
    "requiredYn": "N",
    "exampleValue": "",
    "value": "value default",
    "date": new Date(),
    "info": "info default",
    "comment": "comment default"
  };

  constructor(public http: Http) {
    let stats = [
      {
        "id": 4,
        "name": "Dynamax",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "33",
        "date": new Date('2015-01-11T10:20:30Z'),
        "info": "15 lbs",
        "comment": "comment 4"
      },
      {
        "id": 5,
        "name": "Fitranx Level",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "2",
        "date": new Date('2014-08-11T10:20:30Z'),
        "info": "",
        "comment": "comment 5"
      },
      {
        "id": 2,
        "name": "100 Challenge",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "184",
        "date": new Date('2017-02-11T10:20:30Z'),
        "info": "",
        "comment": "comment 2"
      },
      {
        "id": 3,
        "name": "Body Fat",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "15.5",
        "date": new Date('2016-09-11T10:20:30Z'),
        "info": "",
        "comment": "comment 3"
      },
      {
        "id": 6,
        "name": "Fitty Four Circuit 1",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "1.5",
        "date": new Date('2015-02-11T10:20:30Z'),
        "info": "",
        "comment": "comment 6"
      },
      {
        "id": 1,
        "name": "10 Minute Burpees",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "60",
        "date": new Date('2016-11-11T10:20:30Z'),
        "info": "",
        "comment": "comment 1"
      },
      {
        "id": 7,
        "name": "Push Ups",
        "description": "",
        "formElementId": 1,
        "options": "",
        "requiredYn": "N",
        "exampleValue": "",
        "value": "42",
        "date": new Date('2013-07-11T10:20:30Z'),
        "info": "",
        "comment": "comment 7"
      }
     ];

     for(let stat of stats) {
       this.stats.push(stat);
       console.log(stat);
     }
  }

  query(params?: any) {
    if(!params) {
      return this.stats;
    }

    return this.stats.filter((stat) => {
      for(let key in params) {
        let field = stat[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return stat;
        } else if(field == params[key]) {
          return stat;
        }
      }
      return null;
    });
  }

  add(stat: Stat) {
    this.stats.push(stat);
  }

  delete(stat: Stat) {
    this.stats.splice(this.stats.indexOf(stat), 1);
  }
}
