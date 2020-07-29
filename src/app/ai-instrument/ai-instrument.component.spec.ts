import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInstrumentComponent } from './ai-instrument.component';

describe('AiInstrumentComponent', () => {
  let component: AiInstrumentComponent;
  let fixture: ComponentFixture<AiInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
