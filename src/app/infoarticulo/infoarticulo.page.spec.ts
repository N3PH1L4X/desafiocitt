import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoarticuloPage } from './infoarticulo.page';

describe('InfoarticuloPage', () => {
  let component: InfoarticuloPage;
  let fixture: ComponentFixture<InfoarticuloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoarticuloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoarticuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
