import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, catchError, of } from 'rxjs';

export interface Movie {
  _id?:string
  image: string;
  title: string;
  score: number;
  year?: number;
  synopsis?: string;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      "_id": '1',
      "image": "https://m.media-amazon.com/images/I/71qzTzxzoCL._SL1000_.jpg",
      "title": "Interestelar",
      "year": 2016,
      "score": 10,
      synopsis: "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta."
    },
    {
      "_id": '2',
      "image": 'https://upload.wikimedia.org/wikipedia/pt/c/c4/A_Ghost_Story.jpeg',
      "title": 'A Ghost Story',
      "year": 2017,
      "score": 9.5,
      "synopsis": "Um homem recém-falecido (Casey Affleck) retorna como fantasma para sua casa no subúrbio com a intenção de consolar sua esposa (Rooney Mara). Em sua nova forma espectral, invisível para os mortais, ele percebe que não é afetado pelo tempo, sendo condenado a ser um mero espectador da vida que antes lhe pertencia, ao lado da mulher que amava. O fantasma inicia uma jornada pelas memórias e histórias, enfrentando perguntas eternas sobre a vida e a existência."
    },
    {
      "_id": '3',
      "image": 'https://upload.wikimedia.org/wikipedia/pt/1/10/Dogville_poster.jpg',
      "title": 'Dogville',
      "year": 2003,
      "score": 8.5,
      "synopsis": "Anos 30, Dogville, um lugarejo nas Montanhas Rochosas. Grace (Nicole Kidman), uma bela desconhecida, aparece no lugar ao tentar fugir de gângsters. Com o apoio de Tom Edison (Paul Bettany), o auto-designado porta-voz da pequena comunidade, Grace é escondida pela pequena cidade e, em troca, trabalhará para eles. Fica acertado que após duas ...",
    },
  ];

  private api =
  'https://crudcrud.com/api/f92dc29572694b46bcd64396b2718482/movie';

  constructor(private httpClient: HttpClient) {
  }

    getMovies(): Observable<Movie[]> {
      return this.httpClient.get<Movie[]>(this.api).pipe(
        tap((movies) => console.log('Filmes recebidos da API:', movies)),
        map((movies) => (movies && movies.length > 0 ? movies : this.movies)),
        catchError((error) => {
          return of (this.movies)
        })
      )
    }

    deleteMovie(id: string): Observable<any> {
      const url = `${this.api}/${id}`;
      return this.httpClient.delete(url);
    }

  save(movie: Movie): Observable<any> {
    return this.httpClient.post(this.api, movie);
  }
}
