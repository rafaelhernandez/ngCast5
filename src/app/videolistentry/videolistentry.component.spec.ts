import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistentryComponent } from './videolistentry.component';

describe('VideolistentryComponent', () => {
  let component: VideolistentryComponent;
  let fixture: ComponentFixture<VideolistentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
