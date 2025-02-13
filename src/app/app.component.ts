import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COMPONENTS } from './components';
import { RouterModule } from '@angular/router'; // Ensure you import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // If you're using standalone components
  imports: [RouterOutlet, ...COMPONENTS, RouterModule],  // Make sure RouterModule is included
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vfeb';
}
