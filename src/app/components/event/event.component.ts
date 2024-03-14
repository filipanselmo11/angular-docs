import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  @Output() clicarBotao = new EventEmitter<void>();

  emitClicarBotao() {
    this.clicarBotao.emit()
  }
}
