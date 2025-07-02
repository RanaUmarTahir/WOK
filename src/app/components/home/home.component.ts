import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';


@Component({
  selector: 'app-home',
  imports: [RouterLink, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
