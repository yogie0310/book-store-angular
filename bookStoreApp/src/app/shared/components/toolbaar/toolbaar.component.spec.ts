import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbaarComponent } from './toolbaar.component';

describe('ToolbaarComponent', () => {
  let component: ToolbaarComponent;
  let fixture: ComponentFixture<ToolbaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbaarComponent]
    });
    fixture = TestBed.createComponent(ToolbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
