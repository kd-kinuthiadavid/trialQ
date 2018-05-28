import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() sendQuote = new EventEmitter<any>();
  
  newQuote = new Quote("","","",new Date());

  getQuotes(get){
    var QuoteToBeSent
    // console.log(get.value);
    QuoteToBeSent = new Quote(get.value.theQuote,get.value.author,get.value.person,get.value.timeCreated)
    this.sendQuote.emit(QuoteToBeSent);
    get.reset();//Clears the form after submitting
  }
  constructor() { }

  ngOnInit() {
  }

}
