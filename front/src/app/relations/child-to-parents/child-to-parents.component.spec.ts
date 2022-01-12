import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentsComponent } from './child-to-parents.component';

describe('ChildToParentsComponent', () => {
  let component: ChildToParentsComponent;
  let fixture: ComponentFixture<ChildToParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentsComponent ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
