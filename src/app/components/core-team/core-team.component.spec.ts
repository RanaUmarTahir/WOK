import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTeamComponent } from './core-team.component';

describe('CoreTeamComponent', () => {
  let component: CoreTeamComponent;
  let fixture: ComponentFixture<CoreTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
