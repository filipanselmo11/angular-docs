import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prophile-photo',
  standalone: true,
  imports: [],
  templateUrl: './prophile-photo.component.html',
  styleUrl: './prophile-photo.component.scss'
})
export class ProphilePhotoComponent {
  constructor(elementRef: ElementRef) {
    console.log('Element REF ', elementRef.nativeElement);
  }
}
