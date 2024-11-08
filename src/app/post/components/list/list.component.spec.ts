import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', (): void => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [ListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
