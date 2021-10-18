import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comp-graph';

  menu = [
    { name: 'Página Inicial', iconType: 'icon', icon: 'home', link: '/' },
    { name: 'Conversor', iconType: 'img', icon: './assets/cor.png', link: '/converter' },
    { name: 'Sobre', iconType: 'icon', icon: 'info', link: '/about' },
  ];
}
