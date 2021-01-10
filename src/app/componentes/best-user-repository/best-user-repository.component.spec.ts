import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestUserRepositoryComponent } from './best-user-repository.component';

describe('BestUserRepositoryComponent', () => {
  let component: BestUserRepositoryComponent;
  let fixture: ComponentFixture<BestUserRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestUserRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestUserRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
