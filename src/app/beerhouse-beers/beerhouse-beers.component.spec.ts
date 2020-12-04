import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerhouseBeersComponent } from './beerhouse-beers.component';

describe('BeerhouseBeersComponent', () => {
  let component: BeerhouseBeersComponent;
  let fixture: ComponentFixture<BeerhouseBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerhouseBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerhouseBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
