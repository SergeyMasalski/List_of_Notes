import { Component } from '@angular/core';
import { ListOfNotesService } from 'src/services/list-of-notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private noteService: ListOfNotesService) {}

  get showHideForm(): boolean {
    return this.noteService.showFormNewNote;
  }
}
