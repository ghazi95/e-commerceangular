import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatearticlesComponent } from './createarticles.component';

describe('CreatearticlesComponent', () => {
  let component: CreatearticlesComponent;
  let fixture: ComponentFixture<CreatearticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatearticlesComponent]
    });
    fixture = TestBed.createComponent(CreatearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
