import { Injectable } from '@angular/core';
import { Interfaces } from 'src/entities/interfaces/interfaces';
import { notesList } from 'src/entities/mocks/notes';

@Injectable()
export class ListOfNotesService {
  private notes: Interfaces.Note[] = [];
  private selectedNote: Interfaces.Note;
  public showFormNewNote: boolean = false;

  constructor() {
    notesList.forEach((item) => this.notes.push(item));
  }

  get getNotes(): Interfaces.Note[] {
    return this.notes;
  }

  get getSelectedNote(): Interfaces.Note {
    return this.selectedNote;
  }

  public showHideForm(): void {
    this.showFormNewNote = !this.showFormNewNote;
  }

  public addNote(noteHeader: string, noteText: string): void {
    const noteId = Math.max(...this.getNotes.map((item) => item.id)) + 1;
    this.notes.push({
      id: noteId,
      header: noteHeader,
      text: noteText,
    });
    this.showHideForm();
  }

  public selectNote(id: number): void {
    this.selectedNote = this.notes.find((note) => note.id === id);
  }
}
