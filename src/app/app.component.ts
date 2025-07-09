import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HttpClientModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
  
export class AppComponent {
  title = 'WOK';
 
  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });
  }
}
