import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  favoriteBook = new FormGroup({
    bookName: new FormControl(''),
    authorName: new FormGroup({
      authorFirstName: new FormGroup(''),
      authorLastname: new FormGroup('')
    }),
    timesRead: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
