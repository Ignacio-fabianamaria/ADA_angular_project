import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      "image": "https://m.media-amazon.com/images/I/71qzTzxzoCL._SL1000_.jpg",
      "title": "Interestelar",
      "year": 2016,
      "score": 10,
      "sinopse": "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta."
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/c/c4/A_Ghost_Story.jpeg',
      title: 'A Ghost Story',
      year: 2017,
      score: 9.5,
      "sinopse": "Um homem recém-falecido (Casey Affleck) retorna como fantasma para sua casa no subúrbio com a intenção de consolar sua esposa (Rooney Mara). Em sua nova forma espectral, invisível para os mortais, ele percebe que não é afetado pelo tempo, sendo condenado a ser um mero espectador da vida que antes lhe pertencia, ao lado da mulher que amava. O fantasma inicia uma jornada pelas memórias e histórias, enfrentando perguntas eternas sobre a vida e a existência."
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/1/10/Dogville_poster.jpg',
      title: 'Dogville',
      year: 2003,
      score: 8.5,
      "sinopse": "Anos 30, Dogville, um lugarejo nas Montanhas Rochosas. Grace (Nicole Kidman), uma bela desconhecida, aparece no lugar ao tentar fugir de gângsters. Com o apoio de Tom Edison (Paul Bettany), o auto-designado porta-voz da pequena comunidade, Grace é escondida pela pequena cidade e, em troca, trabalhará para eles. Fica acertado que após duas ...",
    },
  ];

  constructor() { }

  getMovie() {
    return [
      {
        "image": "https://m.media-amazon.com/images/I/71qzTzxzoCL._SL1000_.jpg",
        "title": "Interestelar",
        "year": 2016,
        "score": 10,
        "sinopse": "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta."
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/pt/c/c4/A_Ghost_Story.jpeg',
        title: 'A Ghost Story',
        year: 2017,
        score: 9.5,
        "sinopse": "Um homem recém-falecido (Casey Affleck) retorna como fantasma para sua casa no subúrbio com a intenção de consolar sua esposa (Rooney Mara). Em sua nova forma espectral, invisível para os mortais, ele percebe que não é afetado pelo tempo, sendo condenado a ser um mero espectador da vida que antes lhe pertencia, ao lado da mulher que amava. O fantasma inicia uma jornada pelas memórias e histórias, enfrentando perguntas eternas sobre a vida e a existência."
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/pt/1/10/Dogville_poster.jpg',
        title: 'Dogville',
        year: 2003,
        score: 8.5,
        "sinopse": "Anos 30, Dogville, um lugarejo nas Montanhas Rochosas. Grace (Nicole Kidman), uma bela desconhecida, aparece no lugar ao tentar fugir de gângsters. Com o apoio de Tom Edison (Paul Bettany), o auto-designado porta-voz da pequena comunidade, Grace é escondida pela pequena cidade e, em troca, trabalhará para eles. Fica acertado que após duas ...",
      },
    ];
  }
}
