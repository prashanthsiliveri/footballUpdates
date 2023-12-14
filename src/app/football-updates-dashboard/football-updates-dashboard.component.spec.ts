import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballUpdatesDashboardComponent } from './football-updates-dashboard.component';

describe('FootballUpdatesDashboardComponent', () => {
  let component: FootballUpdatesDashboardComponent;
  let fixture: ComponentFixture<FootballUpdatesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballUpdatesDashboardComponent]
    });
    fixture = TestBed.createComponent(FootballUpdatesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
