import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchQuery: string = '';
  movies: any[] = [];

  async fetchMovies() {
    try {
      const apiKey = '1870b88e'; // Replace with your OMDB API key
      const response = await fetch(
        `http://www.omdbapi.com/?s=${this.searchQuery}&apikey=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        this.movies = data.Search;
      } else {
        console.error('Error fetching data');
      }
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    this.fetchMovies();
  }

  onSearchInput() {
    this.fetchMovies();
  }
}
