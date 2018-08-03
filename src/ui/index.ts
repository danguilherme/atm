// Import assets
import '../assets/styles/main.scss';
import moneySvg from '../assets/img/money.one.svg';

// Import ATM
import { withdraw } from '../atm';
import { createSvgElement } from './svg';

const form = document.querySelector('.form') as HTMLInputElement;
const amountInput = document.querySelector('.amount') as HTMLInputElement;
const withdrawButton = document.querySelector('.submit');
const notesList = document.querySelector('.notes') as HTMLUListElement;

form.addEventListener('submit', onFormSubmit);

function updateNotes(withdrawal: number[]) {
  const bills = withdrawal.map(n => createBill(n));
  // TODO: bad for performance, create element in memory
  bills.forEach(b => notesList.appendChild(b));
}

function onFormSubmit(event: Event) {
  notesList.innerHTML = '';
  updateNotes(withdraw(getAmount()));
  event.preventDefault();
}

function getAmount() {
  return Number(amountInput.value);
}

function createBill(qty: number): SVGElement {
  const bill = createSvgElement(moneySvg);
  bill.classList.add('money-bill', `-chars-${String(qty).length}`);
  const text = bill.querySelector<SVGTextElement>('#bill-value');
  text!.textContent = String(qty);
  return bill;
}
