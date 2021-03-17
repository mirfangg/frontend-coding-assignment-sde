import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailPageComponent } from './issue-detail-page.component';

describe('IssueDetailPageComponent', () => {
  let component: IssueDetailPageComponent;
  let fixture: ComponentFixture<IssueDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
