import { Component, OnInit } from '@angular/core';
import { Interfaces } from 'src/entities/interfaces/interfaces';
import { ListOfNotesService } from 'src/services/list-of-notes.service';

@Component({
  selector: 'headers-of-notes',
  templateUrl: './headers-of-notes.component.html',
  styleUrls: ['./headers-of-notes.component.scss'],
})
export class HeadersOfNotesComponent implements OnInit {
  constructor(private notesService: ListOfNotesService) {}

  ngOnInit(): void {}

  get getHeadersOfNotes(): Interfaces.Note[] {
    return this.notesService.getNotes;
  }

  public showHideForm(): void {
    this.notesService.showHideForm();
  }

  public selectNote(id: number): void {
    this.notesService.selectNote(id);
  }
}
