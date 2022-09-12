import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  myName = "Umang";

  public color = [
    {
      "Color": "Pink",
      "Number of People": 6
    },
    
    {
      "Color": "Blue",
      "Number of People": 8
    },
    
    {
      "Color": "Purple",
      "Number of People": 4
    },
    
    {
      "Color": "Red",
      "Number of People": 5
    },
    
    {
      "Color": "Yellow",
      "Number of People": 2
    },
  ]

  
  first:boolean = false;
  
  changeFirst() {
    this.first= true;
  }
  
  ngOnInit(): void {
  }

}
