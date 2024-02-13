import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticleTableComponent } from './listarticle-table.component';

describe('ListarticleTableComponent', () => {
  let component: ListarticleTableComponent;
  let fixture: ComponentFixture<ListarticleTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarticleTableComponent]
    });
    fixture = TestBed.createComponent(ListarticleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
