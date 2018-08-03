import fill from '../polyfills/fill';
import { NoteUnavailableException, InvalidArgumentException } from './exceptions';

export const AVAILABLE_BILLS = [100, 50, 20, 10];

export function withdraw(value: number | null) {
  if (!value) return [];
  if (value < 0) throw new InvalidArgumentException('value', value);

  let remainingValue = value;

  const billCount = AVAILABLE_BILLS.map(bill => {
    const bills = Math.floor(remainingValue / bill);
    remainingValue = remainingValue - (bills * bill);
    return bills;
  });

  if (remainingValue > 0) {
    // if there's still remaining value,
    // it means that we do not have all bills
    // to give to user what s/he asked for
    throw new NoteUnavailableException(`No note available for $${remainingValue}`);
  }

  return billCount.reduce((all, count, index) => {
    const currentBill = AVAILABLE_BILLS[index];
    const necessaryBills: number[] = fill(Array(count), currentBill);
    return all.concat(necessaryBills);
  }, [] as number[]);
}
