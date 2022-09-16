import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { FavoriteColorService } from '../favorite-color.service';

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

  favoriteColors: any[];

  constructor(private color:FavoriteColorService) {
    this.favoriteColors = this.color.getFavoriteColor();
   }

  ngOnInit(): void {
  }

}
