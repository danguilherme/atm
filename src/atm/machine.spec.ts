import * as machine from './machine';
import {
  NoteUnavailableException,
  InvalidArgumentException
} from './exceptions';

describe('ATM Machine', () => {
  describe('withdrawal', () => {
    it('should return nothing if entering null', () => {
      expect(machine.withdraw(null)).toEqual([]);
    });

    it('should return nothing if asked 0', () => {
      expect(machine.withdraw(0)).toEqual([]);
      expect(machine.withdraw(-0)).toEqual([]);
    });

    it('should return 10 if asked 10', () => {
      expect(machine.withdraw(10)).toEqual([10]);
    });

    it('should return 20 if asked 20', () => {
      expect(machine.withdraw(20)).toEqual([20]);
    });

    it('should return 50 if asked 50', () => {
      expect(machine.withdraw(50)).toEqual([50]);
    });

    it('should return 100 if asked 100', () => {
      expect(machine.withdraw(100)).toEqual([100]);
    });

    it('should return multiple bills if asked different numbers', () => {
      expect(machine.withdraw(30)).toEqual([20, 10]);

      expect(machine.withdraw(80)).toEqual([50, 20, 10]);

      expect(machine.withdraw(200)).toEqual([100, 100]);

      expect(machine.withdraw(280)).toEqual([100, 100, 50, 20, 10]);
    });

    it('should return error if bill does not exist in the machine', () => {
      expect(() => machine.withdraw(5)).toThrowError(NoteUnavailableException);
      expect(() => machine.withdraw(125)).toThrowError(
        NoteUnavailableException
      );
    });

    it('should return error if trying to withdraw negative number', () => {
      expect(() => machine.withdraw(-5)).toThrowError(InvalidArgumentException);
      expect(() => machine.withdraw(-130)).toThrowError(
        InvalidArgumentException
      );
    });
  });
});
