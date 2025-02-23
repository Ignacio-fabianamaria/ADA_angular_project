# 📌 Personal Organizer

Este projeto é um organizador pessoal desenvolvido com Angular, como parte do curso **Frontend (Angular)** oferecido pela **ADA**.

## 🚀 Primeiro Passo

Para iniciar o projeto, execute os seguintes comandos:

```sh
# Criar um novo projeto Angular
ng new organizador_pessoal

# Acessar a pasta do projeto
cd organizador_pessoal

# Iniciar o servidor de desenvolvimento
npm start
```

## ✨ Estruturando Componentes

Gerando os componentes necessários do projeto com os comandos abaixo:

```sh
# Criar o componente 'header' e 'footer' dentro da pasta 'common'
ng g c common/header
ng g c common/footer

# Criar os componentes 'movie-container' e 'movie' dentro da pasta 'movie'
ng g c movie/movie-container
ng g c movie/movie
```

__💡 Observação: Ao passar o caminho antes do nome do componente (common/header, movie/movie-container), o Angular cria automaticamente a estrutura de pastas caso elas ainda não existam. Isso ajuda a manter o projeto mais organizado.__


## 🎥 Estrutura do Componente de Filmes

* __movie-container__
O componente movie-container é responsável por exibir a lista de filmes. Ele utiliza o componente movie para renderizar cada filme individualmente.

Exemplo de código:
```sh
<main>
  <h1>Filmes</h1>
  <div class="movies-container">
    <app-movie *ngFor="let movie of movies" [movie]="movie"></app-movie>
  </div>
</main>
```

* __movie__
O componente movie recebe as informações do filme e as exibe, incluindo a imagem, título, ano de lançamento e a nota.

Exemplo de código:
```sh
<div class="movie">
  <img [src]="movie.image" alt="">
  <div class="movie-info">
    <p>{{movie.title}}</p>
    <div class="movie-extra-info">
      <p>Ano: {{ movie.year}}</p>
      <p>Nota: {{movie.score}}/10</p>
    </div>
  </div>
</div>
```
