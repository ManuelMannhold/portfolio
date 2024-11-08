import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberOpinionsComponent } from './member-opinions.component';

describe('MemberOpinionsComponent', () => {
  let component: MemberOpinionsComponent;
  let fixture: ComponentFixture<MemberOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberOpinionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
