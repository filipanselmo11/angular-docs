import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-anatomy-component',
  standalone: true,
  imports: [],
  templateUrl: './anatomy-component.component.html',
  styleUrl: './anatomy-component.component.scss'
})
export class AnatomyComponentComponent {
  private internalValue!: number;
  @Input({required: true}) titulo = '';
  @Input({transform: appendPx}) widthPx: string = '';
  @Input({transform: booleanAttribute}) disabled = false;
  @Input({transform: numberAttribute}) number = 0;
  @Input()
  get value(): number {
    return this.internalValue;
  }
  set value(newValue: number) {
    this.internalValue = newValue;
  }
}

function appendPx(value: number) {
  return `${value}px`
}
