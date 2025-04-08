import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './core/components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavbarComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'site';
}
