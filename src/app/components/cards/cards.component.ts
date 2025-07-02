import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  cards = [
    { title: 'Donate Now', image: 'assets/images/donate.jpg', route: '/donate' },
    {
      title: 'Be a Volunteer',
      image: 'assets/images/volunteer.jpg',
      route: '/join-us',
    },
    {
      title: 'Campaigns',
      image: 'assets/images/campaign.jpg',
      route: '/campaigns',
    },
  ];

  

}
