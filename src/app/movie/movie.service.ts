import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovie() {
    return [
      {
        image:
          'https://m.media-amazon.com/images/I/71qzTzxzoCL._SL1000_.jpg',
        title: 'Interestelar',
        year: 2016,
        score: 10,
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/pt/c/c4/A_Ghost_Story.jpeg',
        title: 'A Ghost Story',
        year: 2017,
        score: 9.5,
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/pt/1/10/Dogville_poster.jpg',
        title: 'Dogville',
        year: 2003,
        score: 8.5,
      },
    ];
  }
}
