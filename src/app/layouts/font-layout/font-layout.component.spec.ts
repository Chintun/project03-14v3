import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontLayoutComponent } from './font-layout.component';

describe('FontLayoutComponent', () => {
  let component: FontLayoutComponent;
  let fixture: ComponentFixture<FontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
