import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomyComponentComponent } from './anatomy-component.component';

describe('AnatomyComponentComponent', () => {
  let component: AnatomyComponentComponent;
  let fixture: ComponentFixture<AnatomyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatomyComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnatomyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
