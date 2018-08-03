import * as machine from './machine';

describe('ATM Machine', () => {
  it('should return nothing if asked 0', () => {
    const result = machine.withdraw(0);
    expect(result).toEqual([]);
  });
});