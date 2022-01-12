import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTokenComponent } from './git-token.component';

describe('GitTokenComponent', () => {
  let component: GitTokenComponent;
  let fixture: ComponentFixture<GitTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
