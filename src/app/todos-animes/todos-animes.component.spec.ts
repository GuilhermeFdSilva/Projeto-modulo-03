import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAnimesComponent } from './todos-animes.component';

describe('TodosAnimesComponent', () => {
  let component: TodosAnimesComponent;
  let fixture: ComponentFixture<TodosAnimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosAnimesComponent]
    });
    fixture = TestBed.createComponent(TodosAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
