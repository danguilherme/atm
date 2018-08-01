import { NoteUnavailableException, InvalidArgumentException } from './exceptions';

export const AVAILABLE_NOTES = [100, 50, 20, 10];

export function withdraw(value: number) {
  if (!value) return [];
  if (value < 0) throw new InvalidArgumentException('value', value);

  let remainingValue = value;

  const noteCount = AVAILABLE_NOTES.map(note => {
    const notes = Math.floor(remainingValue / note);
    remainingValue = remainingValue - (notes * note);
    return notes;
  });

  if (remainingValue > 0) {
    // if there's still remaining value,
    // it means that we do not have all notes
    // to give to user what s/he asked for
    throw new NoteUnavailableException(`No note available for $${remainingValue}`);
  }

  return noteCount.reduce((all, count, index) => {
    const currentNote = AVAILABLE_NOTES[index];
    const necessaryNotes: number[] = Array(count).fill(currentNote);
    return all.concat(necessaryNotes);
  }, [] as number[]);
}
