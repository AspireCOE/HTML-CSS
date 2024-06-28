import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfAccComponent } from './type-of-acc.component';

describe('TypeOfAccComponent', () => {
  let component: TypeOfAccComponent;
  let fixture: ComponentFixture<TypeOfAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeOfAccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeOfAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
