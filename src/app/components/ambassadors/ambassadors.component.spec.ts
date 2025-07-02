import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorsComponent } from './ambassadors.component';

describe('AmbassadorsComponent', () => {
  let component: AmbassadorsComponent;
  let fixture: ComponentFixture<AmbassadorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbassadorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbassadorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
