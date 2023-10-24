import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListOfNotesService } from 'src/services/list-of-notes.service';

@Component({
  selector: 'create-new-note',
  templateUrl: './create-new-note.component.html',
  styleUrls: ['./create-new-note.component.scss'],
})
export class CreateNewNoteComponent implements OnInit {
  public createNewNote: FormGroup = new FormGroup({
    header: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });

  constructor(private noteService: ListOfNotesService) {}

  get viewForm(): boolean {
    return this.noteService.showFormNewNote;
  }

  public saveNote(): void {
    const header = this.createNewNote.controls['header'].value;
    const text = this.createNewNote.controls['text'].value;
    if (this.createNewNote.status !== 'INVALID') {
      this.noteService.addNote(header, text);
    }
  }

  public closeForm(): void {
    this.noteService.showHideForm();
  }

  ngOnInit(): void {}
}
