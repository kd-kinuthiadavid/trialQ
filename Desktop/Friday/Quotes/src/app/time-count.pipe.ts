import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  transform(value: number): any{
    let today:Date = new Date (); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())
    var dateDifference= todayWithNoTime-value //returns value in milliseconds
    const secondsInADay=86400; //60 sec*60 min in an hr * 24 hrs
    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds
    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >=1){
      return Math.round(dateCounter);
    }else{
      return 0;
    }

    // let t_secs = new Date();
    // let today: number = t_secs.getTime() / 1000;
    // var seconds = today - value;
    // console.log(typeof(t_secs))

    // var hours: number = Math.floor(seconds / 86400);
    // seconds %= 3600;
    // var minutes: number = Math.floor(seconds / 60);
    // // console.log(seconds)
    // seconds = seconds % 60;
    // var t_hours: any;
    // var t_mins: any;
    // var t_sec: any;

    // if (hours == 0) {
    //   t_hours = '';
    // } else {
    //   t_hours = hours.toPrecision() + ' hrs';
    // }
    // if (minutes == 0) {
    //   t_mins = '';
    // } else {
    //   t_mins = minutes + ' mins';
    // }
    // if (seconds < 1) {
    //   t_sec = seconds.toFixed(1) + ' secs';
    // } else {
    //   t_sec = seconds.toPrecision + ' secs';
    // }
    // return t_hours + t_mins + t_sec;

  }
  }
