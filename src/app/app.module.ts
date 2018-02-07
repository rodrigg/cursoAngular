import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarTodosPipe } from './pipes/priorizar-todos.pipe';
import { TerminadosTodosPipe } from './pipes/terminados-todos.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    TodoComponent,
    PriorizarTodosPipe,
    TerminadosTodosPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
