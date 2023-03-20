import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAndListPlanetComponent } from './information-and-list-planet.component';

describe('InformationAndListPlanetComponent', () => {
  let component: InformationAndListPlanetComponent;
  let fixture: ComponentFixture<InformationAndListPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationAndListPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAndListPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
