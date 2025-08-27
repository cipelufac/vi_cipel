import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resumos } from './resumos';

describe('Resumos', () => {
  let component: Resumos;
  let fixture: ComponentFixture<Resumos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resumos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resumos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
