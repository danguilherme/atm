export class NoteUnavailableException extends Error {
  constructor(m?: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NoteUnavailableException.prototype);
  }
}

export class InvalidArgumentException extends Error {
  constructor(argument: string, value: any) {
    super(`Value ${value} is not valid for argument '${argument}'.`);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
  }
}