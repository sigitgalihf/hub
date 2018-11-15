import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelabuhanComponent } from './pelabuhan.component';

describe('PelabuhanComponent', () => {
  let component: PelabuhanComponent;
  let fixture: ComponentFixture<PelabuhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelabuhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelabuhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
