import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOfsComponent } from './liste-ofs.component';

describe('ListeOfsComponent', () => {
  let component: ListeOfsComponent;
  let fixture: ComponentFixture<ListeOfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeOfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
