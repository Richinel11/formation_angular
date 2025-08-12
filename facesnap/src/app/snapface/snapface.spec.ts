import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snapface } from './snapface';

describe('Snapface', () => {
  let component: Snapface;
  let fixture: ComponentFixture<Snapface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snapface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snapface);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
