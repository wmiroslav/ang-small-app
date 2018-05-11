import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailPreviewComponent } from './mail-preview/mail-preview.component';
import { FooterComponent } from './footer/footer.component';
import { MailComponent } from './mail/mail.component';


// services
import { ApiService } from '../services/api-service';

// pipes
import { MailsPipe } from '../pipes/filter-mail';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MailListComponent,
    MailPreviewComponent,
    FooterComponent,
    MailComponent,
    MailsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
