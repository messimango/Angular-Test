import { Component, OnInit } from '@angular/core';
import { FavoriteColorService } from '../favorite-color.service';
import { Student } from '../student';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  myName = "Umang";

  educationLevel = [
    'Highschool Diploma',
    'GED or equivalent',
    'College Diploma',
    "Bachelor's degree",
    "Master's Degree",
    "Doctoral degree"
  ];

  studentModel = new Student('', '', 18, "", "", 123456789);


  public color = [];

  
  first:boolean = false;

  constructor(private _favoriteColor: FavoriteColorService) {

  }
  
  changeFirst() {
    this.first= true;
  }
  
  ngOnInit(): void {
  }

}
