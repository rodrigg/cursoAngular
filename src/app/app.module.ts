import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarTodosPipe } from './pipes/priorizar-todos.pipe';
import { TerminadosTodosPipe } from './pipes/terminados-todos.pipe';
import { BuscarNombrePipe } from './pipes/buscar-nombre.pipe';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ProductoService } from './services/producto.service';
import { ArticulosComponent } from './articulos/articulos.component';
import {HttpModule} from '@angular/http';
import { UsuarioRandomComponent } from './usuario-random/usuario-random.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    TodoComponent,
    PriorizarTodosPipe,
    TerminadosTodosPipe,
    BuscarNombrePipe,
    HomeComponent,
    ArticulosComponent,
    UsuarioRandomComponent
    ],
  imports: [
    BrowserModule,FormsModule,routing,HttpModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
