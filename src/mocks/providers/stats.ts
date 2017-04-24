// core
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// models
import { Stat } from '../../models/models';

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
    "date": "",
    "info": "info default",
    "comment": "comment default"
  };

// QUERY to pull data and turn it into json
// SELECT CONCAT('{"id": ', us.id, ', "stat_id": 1, "name": "', s.name, '", "description": "', s.description, '", "formElementId": ', s.form_element_id, ', "options": "', IFNULL(s.options, ''), '", "requiredYn": "N", "exampleValue": "', s.example_value, '", "value": "', us.stat_value, '", "date": "', us.stat_date, '", "info": "', IFNULL(us.stat_info, ''), '", "comment": "', us.stat_comment, '"},') AS json
// FROM user_stat us
// JOIN stat s ON us.stat_id = s.id
// WHERE us.user_id = 1;

  constructor(public http: Http) {
    let stats = [
      {"id": 1728, "stat_id": 1, "name": "Push Ups", "description": "Number of push ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "23", "value": "44", "date": "2015-09-26", "info": "", "comment": "(IMPORTED) Felt good today", "isPr": false},
      {"id": 1868, "stat_id": 1, "name": "Push Ups", "description": "Number of push ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "23", "value": "43", "date": "2015-11-07", "info": "", "comment": "(IMPORTED) ", "isPr": false},
      {"id": 1151, "stat_id": 1, "name": "Push Ups", "description": "Number of push ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "23", "value": "46", "date": "2016-07-30", "info": "", "comment": "", "isPr": false},
      {"id": 2009, "stat_id": 1, "name": "Push Ups", "description": "Number of push ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "23", "value": "47", "date": "2016-09-17", "info": "", "comment": "", "isPr": true},
      {"id": 1649, "stat_id": 2, "name": "Sit Ups", "description": "Number of sit ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "32", "value": "48", "date": "2015-09-26", "info": "", "comment": "(IMPORTED) Felt good today", "isPr": false},
      {"id": 1799, "stat_id": 2, "name": "Sit Ups", "description": "Number of sit ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "32", "value": "48", "date": "2015-11-07", "info": "", "comment": "(IMPORTED) ", "isPr": false},
      {"id": 1152, "stat_id": 2, "name": "Sit Ups", "description": "Number of sit ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "32", "value": "58", "date": "2016-07-30", "info": "", "comment": "", "isPr": true},
      {"id": 2010, "stat_id": 2, "name": "Sit Ups", "description": "Number of sit ups per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "32", "value": "54", "date": "2016-09-17", "info": "", "comment": "", "isPr": false},
      {"id": 8, "stat_id": 3, "name": "Dynamax", "description": "Number of Dynamax throws per minutes", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "16", "value": "33", "date": "2015-07-11", "info": "15 lbs", "comment": "", "isPr": true},
      {"id": 1384, "stat_id": 5, "name": "Obstacle Course (30 mins)", "description": "The number of times completed the obstacle course (40 push ups, squats, squat thrusts, flies; walking lunges; 20 ball punches; 20 dips; 20 step ups; 20 tube squats; 20 front loaded lunges; 20 2-ball sit ups; 20 tree pull ups; 20 kettle bell swings; 5 rope slams and 15 jumping jacks; 20 dead lifts).", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "3.6", "value": "2.5", "date": "2015-09-15", "info": "", "comment": "(IMPORTED) Could get my second wind so I was huffin and puffin today. :(", "isPr": false},
      {"id": 1387, "stat_id": 5, "name": "Obstacle Course (30 mins)", "description": "The number of times completed the obstacle course (40 push ups, squats, squat thrusts, flies; walking lunges; 20 ball punches; 20 dips; 20 step ups; 20 tube squats; 20 front loaded lunges; 20 2-ball sit ups; 20 tree pull ups; 20 kettle bell swings; 5 rope slams and 15 jumping jacks; 20 dead lifts).", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "3.6", "value": "3.1", "date": "2015-11-28", "info": "", "comment": "(IMPORTED) ", "isPr": true},
      {"id": 363, "stat_id": 5, "name": "Obstacle Course (30 mins)", "description": "The number of times completed the obstacle course (40 push ups, squats, squat thrusts, flies; walking lunges; 20 ball punches; 20 dips; 20 step ups; 20 tube squats; 20 front loaded lunges; 20 2-ball sit ups; 20 tree pull ups; 20 kettle bell swings; 5 rope slams and 15 jumping jacks; 20 dead lifts).", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "3.6", "value": "3", "date": "2016-02-09", "info": "", "comment": "was sick", "isPr": false},
      {"id": 13, "stat_id": 7, "name": "Lunges", "description": "Number of lunges per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "51", "value": "55", "date": "2015-10-31", "info": "", "comment": "", "isPr": true},
      {"id": 364, "stat_id": 7, "name": "Lunges", "description": "Number of lunges per minute", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "51", "value": "22", "date": "2016-03-08", "info": "", "comment": "Awesome", "isPr": false},
      {"id": 17, "stat_id": 10, "name": "Weight", "description": "Your current weight", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "149", "value": "178", "date": "2015-09-16", "info": "", "comment": "", "isPr": false},
      {"id": 814, "stat_id": 10, "name": "Weight", "description": "Your current weight", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "149", "value": "175", "date": "2016-06-06", "info": "", "comment": "", "isPr": true},
      {"id": 14, "stat_id": 12, "name": "Waist", "description": "Your current waist size in inches", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "31", "value": "34", "date": "2015-11-01", "info": "Inches", "comment": "", "isPr": false},
      {"id": 813, "stat_id": 12, "name": "Waist", "description": "Your current waist size in inches", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "31", "value": "33", "date": "2016-06-06", "info": "", "comment": "", "isPr": true},
      {"id": 158, "stat_id": 13, "name": "Body Fat", "description": "Your current body fat percentage", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "21", "value": "15.5", "date": "2016-02-24", "info": "", "comment": "Good", "isPr": true},
      {"id": 2499, "stat_id": 15, "name": "Timed Mile", "description": "Time it takes to run a mile", "formElementId": 1, "options": "", "requiredYn": "N", "exampleValue": "8:54", "value": "7:25", "date": "2015-09-12", "info": "", "comment": "(IMPORTED)", "isPr": false},
      {"id": 811, "stat_id": 15, "name": "Timed Mile", "description": "Time it takes to run a mile", "formElementId": 1, "options": "", "requiredYn": "N", "exampleValue": "8:54", "value": "7:10", "date": "2016-06-04", "info": "", "comment": "", "isPr": true},
      {"id": 2881, "stat_id": 15, "name": "Timed Mile", "description": "Time it takes to run a mile", "formElementId": 1, "options": "", "requiredYn": "N", "exampleValue": "8:54", "value": "8:35", "date": "2016-09-24", "info": "", "comment": "Was taking it easy on my sore leg.", "isPr": false},
      {"id": 188, "stat_id": 17, "name": "FitRanX Level", "description": "The FitRanX level number you've finished", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "3", "value": "1", "date": "2016-03-12", "info": "", "comment": "", "isPr": false},
      {"id": 812, "stat_id": 17, "name": "FitRanX Level", "description": "The FitRanX level number you've finished", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "3", "value": "2", "date": "2016-06-04", "info": "", "comment": "", "isPr": true},
      {"id": 399, "stat_id": 18, "name": "Four Corners 15", "description": "Obstacle course", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "3.3", "value": "6.1", "date": "2016-04-02", "info": "", "comment": "Felt good", "isPr": true},
      {"id": 474, "stat_id": 19, "name": "100 Challenge", "description": "Number of times through in 3 minutes. 20 reps each of: calf raises, squats, push-ups, side laterals, sit ups. One time through everything plus one set of calf raises and 2 squats would be counted as 122.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "145", "value": "160", "date": "2016-04-16", "info": "", "comment": "Felt great", "isPr": false},
      {"id": 975, "stat_id": 19, "name": "100 Challenge", "description": "Number of times through in 3 minutes. 20 reps each of: calf raises, squats, push-ups, side laterals, sit ups. One time through everything plus one set of calf raises and 2 squats would be counted as 122.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "145", "value": "184", "date": "2016-06-25", "info": "", "comment": "", "isPr": true},
      {"id": 3171, "stat_id": 19, "name": "100 Challenge", "description": "Number of times through in 3 minutes. 20 reps each of: calf raises, squats, push-ups, side laterals, sit ups. One time through everything plus one set of calf raises and 2 squats would be counted as 122.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "145", "value": "175", "date": "2016-12-03", "info": "", "comment": "", "isPr": false},
      {"id": 2337, "stat_id": 20, "name": "Minute Cowboy Squats", "description": "Number of squats in one minute while holding Dynamax ball over head.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "25", "value": "18", "date": "2015-11-14", "info": "16lbs", "comment": "(IMPORTED) ", "isPr": true},
      {"id": 2668, "stat_id": 21, "name": "Impact Challenge", "description": "Total reps by adding number of reps per minute for: Ropes (knee to shoulder); Lateral Ski (cone to cone); Squat to Row at top; Palm to Forearm Plank; Bicep Curl with Tube; Lateral Shuffle with Tubes; Alternate One Arm Swing; Overhead Ball Slams. (Enter values for each exercise in the comments)", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "310", "value": "318", "date": "2015-10-17", "info": "", "comment": "(IMPORTED) Ropes (knee to shoulder): 46; Lateral Ski (cone to cone): 50; Squat to Row at top: 54; Palm to Forearm Plank: 26; Bicep Curl with Tube: 47; Lateral Shuffle with Tubes: 27; Alternate One Arm Swing: 44; Overhead Ball Slams: 24. feel pooped but good", "isPr": false},
      {"id": 2775, "stat_id": 21, "name": "Impact Challenge", "description": "Total reps by adding number of reps per minute for: Ropes (knee to shoulder); Lateral Ski (cone to cone); Squat to Row at top; Palm to Forearm Plank; Bicep Curl with Tube; Lateral Shuffle with Tubes; Alternate One Arm Swing; Overhead Ball Slams. (Enter values for each exercise in the comments)", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "310", "value": "359", "date": "2015-12-12", "info": "", "comment": "(IMPORTED) Ropes (knee to shoulder): 61; Lateral Ski (cone to cone): 68; Squat to Row at top: 46; Palm to Forearm Plank: 20; Bicep Curl with Tube: 57; Lateral Shuffle with Tubes: 29; Alternate One Arm Swing: 39; Overhead Ball Slams: 39. ", "isPr": false},
      {"id": 3038, "stat_id": 21, "name": "Impact Challenge", "description": "Total reps by adding number of reps per minute for: Ropes (knee to shoulder); Lateral Ski (cone to cone); Squat to Row at top; Palm to Forearm Plank; Bicep Curl with Tube; Lateral Shuffle with Tubes; Alternate One Arm Swing; Overhead Ball Slams. (Enter values for each exercise in the comments)", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "310", "value": "379", "date": "2016-10-29", "info": "", "comment": "", "isPr": false},
      {"id": 3709, "stat_id": 21, "name": "Impact Challenge", "description": "Total reps by adding number of reps per minute for: Ropes (knee to shoulder); Lateral Ski (cone to cone); Squat to Row at top; Palm to Forearm Plank; Bicep Curl with Tube; Lateral Shuffle with Tubes; Alternate One Arm Swing; Overhead Ball Slams. (Enter values for each exercise in the comments)", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "310", "value": "415", "date": "2017-02-25", "info": "", "comment": "", "isPr": true},
      {"id": 3124, "stat_id": 22, "name": "Four Corners 20", "description": "One station at each corner, four sets of exercises at each station, 20 reps each. Count how many times you got through in 20 minutes.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "4.2", "value": "5.2", "date": "2016-11-19", "info": "", "comment": "", "isPr": false},
      {"id": 3926, "stat_id": 22, "name": "Four Corners 20", "description": "One station at each corner, four sets of exercises at each station, 20 reps each. Count how many times you got through in 20 minutes.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "4.2", "value": "6", "date": "2017-03-18", "info": "", "comment": "", "isPr": true},
      {"id": 1150, "stat_id": 23, "name": "10 Minute Burpees", "description": "Number of Burpees in 10 minutes", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "100", "value": "60", "date": "2016-07-30", "info": "", "comment": "", "isPr": true},
      {"id": 2106, "stat_id": 25, "name": "Dynamic Single-Single-Double", "description": "Number of left knee right knee double knee throws in one minute.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "12", "value": "17", "date": "2015-10-10", "info": "10lb", "comment": "(IMPORTED) ", "isPr": true},
      {"id": 2195, "stat_id": 25, "name": "Dynamic Single-Single-Double", "description": "Number of left knee right knee double knee throws in one minute.", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "12", "value": "15", "date": "2015-12-05", "info": "16lb", "comment": "(IMPORTED) ", "isPr": false},
      {"id": 3239, "stat_id": 28, "name": "InBody Total Body Water", "description": "Total amount of water in body", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "103.2", "value": "107.6", "date": "2016-12-30", "info": "", "comment": "", "isPr": true},
      {"id": 3892, "stat_id": 28, "name": "InBody Total Body Water", "description": "Total amount of water in body", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "103.2", "value": "105.4", "date": "2017-02-19", "info": "", "comment": "", "isPr": false},
      {"id": 3236, "stat_id": 29, "name": "InBody Dry Lean Mass", "description": "For building muscles and strengthening bones", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "39.4", "value": "39.5", "date": "2016-12-30", "info": "", "comment": "", "isPr": false},
      {"id": 3889, "stat_id": 29, "name": "InBody Dry Lean Mass", "description": "For building muscles and strengthening bones", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "39.4", "value": "39.0", "date": "2017-02-19", "info": "", "comment": "", "isPr": true},
      {"id": 3234, "stat_id": 30, "name": "InBody Body Fat Mass", "description": "For storing excess energy", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "37.1", "value": "37.0", "date": "2016-12-30", "info": "", "comment": "", "isPr": false},
      {"id": 3887, "stat_id": 30, "name": "InBody Body Fat Mass", "description": "For storing excess energy", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "37.1", "value": "30.3", "date": "2017-02-19", "info": "", "comment": "", "isPr": true},
      {"id": 3238, "stat_id": 31, "name": "InBody Skeletal Muscle Mass", "description": "Amount of muscel around bones", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "112.3", "value": "83.8", "date": "2016-12-30", "info": "", "comment": "", "isPr": false},
      {"id": 3891, "stat_id": 31, "name": "InBody Skeletal Muscle Mass", "description": "Amount of muscel around bones", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "112.3", "value": "82.5", "date": "2017-02-19", "info": "", "comment": "", "isPr": true},
      {"id": 3235, "stat_id": 32, "name": "InBody Body Mass Index", "description": "BMI", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "23.5", "value": "23.6", "date": "2016-12-30", "info": "", "comment": "", "isPr": false},
      {"id": 3888, "stat_id": 32, "name": "InBody Body Mass Index", "description": "BMI", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "23.5", "value": "22.4", "date": "2017-02-19", "info": "", "comment": "", "isPr": true},
      {"id": 3237, "stat_id": 33, "name": "InBody Percent Body Fat", "description": "PBF", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "21.2", "value": "20.0", "date": "2016-12-30", "info": "", "comment": "", "isPr": false},
      {"id": 3890, "stat_id": 33, "name": "InBody Percent Body Fat", "description": "PBF", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "21.2", "value": "17.4", "date": "2017-02-19", "info": "", "comment": "", "isPr": true},
      {"id": 3279, "stat_id": 35, "name": "Fitty Four Circuit 1", "description": "Circuit 1 - 20 Kettle Bell Swings, 20 High Steps, 20 Equalizer Pushups, 20 Situps", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "1.25", "value": "1.5", "date": "2017-01-21", "info": "", "comment": "", "isPr": true},
      {"id": 3280, "stat_id": 36, "name": "Fitty Four Circuit 2", "description": "Circuit 2 - 10 Squat Thrusts, 10 20 Paces Shuffle, 10 Overhead Press w/ Weights, 10 Palm To Forearm Plank", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "1.25", "value": "2", "date": "2017-01-21", "info": "", "comment": "", "isPr": true},
      {"id": 3281, "stat_id": 37, "name": "Fitty Four Circuit 3", "description": "Circuit 3 - 20 Reverse Lunges, 20 Handled Band Bicep Curls, 1 Assessment Lap, 10 Sandbag Slams", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "1.25", "value": "1", "date": "2017-01-21", "info": "", "comment": "", "isPr": true},
      {"id": 3282, "stat_id": 38, "name": "Fitty Four Circuit 4", "description": "Circuit 4 - 20 Buddy System Rows, 20 Dynamax Ball Squats, 20 Situps w/ball, 20 Figure 8's With Green Ball", "formElementId": 2, "options": "", "requiredYn": "N", "exampleValue": "1.25", "value": "1.25", "date": "2017-01-21", "info": "", "comment": "", "isPr": true}
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
