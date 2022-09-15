import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat-comp',
  templateUrl: './repeat-comp.component.html',
  styleUrls: ['./repeat-comp.component.css']
})
export class RepeatCompComponent implements OnInit {

  title:string = "Hello";


  studentDetails = {
    name: "Umang",
    id: 1254,
    address: "1234 street road",
    balance: 22
  }

  currentDate = new Date();

  weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
