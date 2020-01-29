import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactContainerComponent } from './react-container.component';

describe('ReactContainerComponent', () => {
  let component: ReactContainerComponent;
  let fixture: ComponentFixture<ReactContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
