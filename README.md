<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 

# CodersCamp 2021/2022 | Projekt Zespołowy | NestJS

- [Zespół projektowy](#zespół-projektowy)
- [WeddingPlanner](#WeddingPlanner)
  - [Demo](#demo)
  - [Cel projektu](#cel-projektu)
  - [Działanie aplikacji](#działanie-aplikacji)
  - [Wykorzystywane technologie](#wykorzystywane-technologie)
  - [Funkcjonalności](#funkcjonalności)
  - [Uruchomienie projektu](#uruchomienie-projektu)
  - [Organizacja pracy](#organizacja-pracy)

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp 2021](https://coderscamp.pl/), a aplikacja została wykonana pod okiem dwóch mentorów. Część zespołu kontynuowała pracę nad frontendem [Dostępny tutaj](https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp), a część rozpoczęła pracę nad backendem. 

**Mentorzy**: Dariusz Knysak, Paweł Michalak

**Uczestnicy**:

- [Marcin Barszcz](https://github.com/marcinnnnb)
- [Agnieszka Bury](https://github.com/angbur)
- [Agnieszka Kapelańczyk](https://github.com/AgnieszkaKapelanczyk)
- [Marta Pejkowska](https://github.com/MartaPejkowska)

## WeddingPlanner

![This is an image](https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp/blob/main/src/assets/img/readMeImage.png)

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://weddingapicoderscamp.herokuapp.com/api/).

### Cel projektu

Celem tej backendowej części projektu było napisanie aplikacji wykorzystującej wiedzę nabytą w ostatnim dziale kursu tj. z następujących technologii:
* NestJS
* PostgreSQL

Zespół projektowy zdecydował się na aplikację własnego pomysłu. Jest ona kontynuacją poprzedniego zadania projektowego, dostępnego pod [TYM LINKIEM](https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp) 


### Działanie aplikacji

Aplikacja składa się z 13 encji (user,wedding, bride, groom, guests, tables, calendar, tasks, budget, pictures, presents, invitations, layout). Większość z nich obsługuje zapytania POST,GET,PATCH,DELETE. Przy każdej encji zapewniona jest autoryzacja. 


### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

   * TypeScript
   * NodeJS
   * PostgreSQL
   * Nodemailer
   * Multer
   * Swagger
   * TypeORM
   * Passport
   * JWT
   * bcrypt

### Funkcjonalności:

* Wykonane przez zespół REST API pozwala na obsługę zapytań: __GET__, __POST__, __DELETE__,__PATCH__.
* Umożliwia rejestrację oraz logowanie użytkownika.
* Umożliwia wysłanie automatycznego maila z linkiem do rejestracji.
* Zapewnia hashowanie hasła i bezpieczne jego przechowywanie w bazie danych.
* Zabezpiecza dostęp do określonych zapytań poprzez autentykacje oraz autoryzacje(dostep tylko dla użytkowników zalogowanych).
* Aplikacja ma możliwość przesyłania plików graficznych.


### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm start`

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Organizacja pracy

Przy użyciu narzędzia YouTrack rozdzielono poszczególne moduły. Komunikacja zespołu odbywała się głównie przez Google Meets i Discord.
