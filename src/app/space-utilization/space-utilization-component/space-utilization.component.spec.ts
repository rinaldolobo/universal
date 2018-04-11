import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceUtilizationComponent } from './space-utilization.component';

describe('SpaceUtilizationComponent', () => {
  let component: SpaceUtilizationComponent;
  let fixture: ComponentFixture<SpaceUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
