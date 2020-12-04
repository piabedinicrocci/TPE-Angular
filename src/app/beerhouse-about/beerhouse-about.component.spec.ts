import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerhouseAboutComponent } from './beerhouse-about.component';

describe('BeerhouseAboutComponent', () => {
  let component: BeerhouseAboutComponent;
  let fixture: ComponentFixture<BeerhouseAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerhouseAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerhouseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
