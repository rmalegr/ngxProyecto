import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPostComponent } from './listar-post.component';

describe('ListarPostComponent', () => {
  let component: ListarPostComponent;
  let fixture: ComponentFixture<ListarPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  //TESTEAR H1

  it('deberia coincidir el tag h1', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('Lista de Posts');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
