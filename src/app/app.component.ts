import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>', //cuando no manejo un archivo aparte puedo usar esta sintaxis
  // styleUrl: './app.component.css' =>lo oviamos porque no se utiliza.
})
export class AppComponent {
  title = 'storeAngular';
}
