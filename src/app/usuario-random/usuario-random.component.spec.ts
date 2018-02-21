import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRandomComponent } from './usuario-random.component';

describe('UsuarioRandomComponent', () => {
  let component: UsuarioRandomComponent;
  let fixture: ComponentFixture<UsuarioRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
