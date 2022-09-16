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
        "NumberofLikes": 6,
        "NumberofDislikes": 4
      },
      
      {
        "Color": "Blue",
        "NumberofLikes": 8,
        "NumberofDislikes": 2
      },
      
      {
        "Color": "Purple",
        "NumberofLikes": 4,
        "NumberofDislikes": 6     
      },
      
      {
        "Color": "Red",
        "NumberofLikes": 5,
        "NumberofDislikes": 5
      },
      
      {
        "Color": "Yellow",
        "NumberofLikes": 2,
        "NumberofDislikes": 8
      },
    ]
  }
}
