export class NoteUnavailableException extends Error {}

export class InvalidArgumentException extends Error {
  constructor(argument: string, value: any) {
    super(`Value ${value} is not valid for argument '${argument}'.`);
  }
}