import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtherComponentComponent } from './components/other-component/other-component.component';
import { AnatomyComponentComponent } from './components/anatomy-component/anatomy-component.component';
import { EventComponent } from './components/event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OtherComponentComponent, AnatomyComponentComponent, EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-docs';
  titulo = 'Olá eu sou o Angular 17';
  label = '40'

  clicarBotao () {
    console.log('Botao clicado')
  }
}
