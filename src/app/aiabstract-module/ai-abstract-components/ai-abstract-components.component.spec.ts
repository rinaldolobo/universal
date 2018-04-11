import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAbstractComponent } from './ai-abstract-components.component';

describe('AiAbstractComponent', () => {
  let component: AiAbstractComponent;
  let fixture: ComponentFixture<AiAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
