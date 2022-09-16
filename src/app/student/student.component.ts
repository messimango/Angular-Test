import { Component, OnInit } from '@angular/core';
import { FavoriteColorService } from '../favorite-color.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [FavoriteColorService]
})
export class StudentComponent implements OnInit {

  favoriteColor: any[];

  constructor(private color:FavoriteColorService) {
    this.favoriteColor = this.color.getFavoriteColor();
   }

  ngOnInit(): void {
  }

}
