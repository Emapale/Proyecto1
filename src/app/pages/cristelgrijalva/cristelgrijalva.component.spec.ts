import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CristelgrijalvaComponent } from './cristelgrijalva.component';

describe('CristelgrijalvaComponent', () => {
  let component: CristelgrijalvaComponent;
  let fixture: ComponentFixture<CristelgrijalvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CristelgrijalvaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CristelgrijalvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
