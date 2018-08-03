export class NoteUnavailableException extends Error {
  constructor(message?: string) {
      super(message); // 'Error' breaks prototype chain here
      (<any>Object).setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

export class InvalidArgumentException extends Error {
  constructor(argument: string, value: any) {
    super(`Value ${value} is not valid for argument '${argument}'.`);
    (<any>Object).setPrototypeOf(this, new.target.prototype);
  }
}