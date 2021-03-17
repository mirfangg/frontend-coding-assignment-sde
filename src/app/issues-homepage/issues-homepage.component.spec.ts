import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesHomepageComponent } from './issues-homepage.component';

describe('IssuesHomepageComponent', () => {
  let component: IssuesHomepageComponent;
  let fixture: ComponentFixture<IssuesHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
