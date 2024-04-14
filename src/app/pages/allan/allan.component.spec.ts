import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllanComponent } from './allan.component';

describe('AllanComponent', () => {
  let component: AllanComponent;
  let fixture: ComponentFixture<AllanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
