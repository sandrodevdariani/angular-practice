import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutineModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent, CartComponent, ],
    imports: [BrowserModule, FormsModule, BooksModule, AppRoutineModule],  
    bootstrap: [AppComponent],
}) 

export class AppModule {}