import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteColorService {

  constructor() { }

  getFavoriteColor(){
    return [
      {
        "Color": "Pink",
        "Number of Likes": 6,
        "Number of Dislikes": 4
      },
      
      {
        "Color": "Blue",
        "Number of Likes": 8,
        "Number of Dislikes": 2
      },
      
      {
        "Color": "Purple",
        "Number of Likes": 4,
        "Number of Dislikes": 6     
      },
      
      {
        "Color": "Red",
        "Number of Likes": 5,
        "Number of Dislikes": 5
      },
      
      {
        "Color": "Yellow",
        "Number of Likes": 2,
        "Number of Dislikes": 8
      },
    ]
  }
}
