import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantallaejecutivosPage } from './pantallaejecutivos.page';

describe('PantallaejecutivosPage', () => {
  let component: PantallaejecutivosPage;
  let fixture: ComponentFixture<PantallaejecutivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaejecutivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaejecutivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
