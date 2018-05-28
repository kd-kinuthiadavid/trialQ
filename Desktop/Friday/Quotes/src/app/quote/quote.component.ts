import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],

})
export class QuoteComponent implements OnInit {

  theQuotes=[new Quote("I Am The Greatest.","Muhammad Ali","Kinuthia David",new Date(2018,5,26))]

  deleteQuote(isComplete,index) {
    this.theQuotes.splice(index,1);
  }
  receiveQuote(get){
    get.timeCreated = new Date (get.timeCreated);
    this.theQuotes.push(get);
    console.log(this.theQuotes);
  }
  public count = 0;

  adding(index){
    this.theQuotes[index].votes = this.theQuotes[index].votes + 1;
    if (this.theQuotes[index].votes>this.count) {
      this.count=this.theQuotes[index].votes;
    }
    console.log(this.theQuotes[index].votes);
  }
  removing(index){
    if(this.theQuotes[index].votes > 0){
      this.theQuotes[index].votes = this.theQuotes[index].votes - 1;
    } else this.theQuotes[index].votes = 0;
    console.log(this.theQuotes[index].votes);
  }

  constructor() { }

  ngOnInit() { }

}
