import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoreTeamComponent } from '../core-team/core-team.component';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, CoreTeamComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
 
}
