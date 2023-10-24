import { Component, OnInit } from '@angular/core';
import { Interfaces } from 'src/entities/interfaces/interfaces';
import { ListOfNotesService } from 'src/services/list-of-notes.service';

@Component({
  selector: 'selected-note',
  templateUrl: './selected-note.component.html',
  styleUrls: ['./selected-note.component.scss'],
})
export class SelectedNoteComponent implements OnInit {
  constructor(private notesService: ListOfNotesService) {}

  ngOnInit(): void {}

  get selectedNote(): Interfaces.Note {
    return this.notesService.getSelectedNote;
  }
}
