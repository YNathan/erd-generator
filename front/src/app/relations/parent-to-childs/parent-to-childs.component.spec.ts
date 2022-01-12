import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildsComponent } from './parent-to-childs.component';

describe('ParentToChildsComponent', () => {
  let component: ParentToChildsComponent;
  let fixture: ComponentFixture<ParentToChildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
