import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comp-graph';

  menu = [
    { name: 'Página Inicial', icon: 'home', link: '/' },
    { name: 'Conversor', icon: 'home', link: '/converter' },
    { name: 'Sobre', icon: 'info', link: '/about' },
  ];
}
