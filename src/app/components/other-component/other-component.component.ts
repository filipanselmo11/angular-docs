import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-component',
  standalone: true,
  imports: [],
  templateUrl: './other-component.component.html',
  styleUrl: './other-component.component.scss'
})

export class OtherComponentComponent {
  @Input({transform: trimString}) label = '';
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
