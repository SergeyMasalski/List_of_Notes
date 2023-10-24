import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfNotesService } from 'src/services/list-of-notes.service';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HeadersOfNotesComponent } from './headers-of-notes/headers-of-notes.component';
import { SelectedNoteComponent } from './selected-note/selected-note.component';
import { CreateNewNoteComponent } from './create-new-note/create-new-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    HeadersOfNotesComponent,
    SelectedNoteComponent,
    CreateNewNoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ListOfNotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
