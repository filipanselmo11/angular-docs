import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphilePhotoComponent } from './prophile-photo.component';

describe('ProphilePhotoComponent', () => {
  let component: ProphilePhotoComponent;
  let fixture: ComponentFixture<ProphilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProphilePhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProphilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
