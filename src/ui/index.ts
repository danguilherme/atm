// Import assets
import '../assets/styles/main.scss';
import moneySvg from '../assets/img/money.one.svg';

// Import ATM
import { withdraw } from '../atm';
import { createSvgElement } from './svg';

const form = document.querySelector('.form') as HTMLInputElement;
const amountInput = document.querySelector('.amount') as HTMLInputElement;
const listContainer = document.querySelector('.bills-section') as HTMLDivElement;

form.addEventListener('submit', onFormSubmit);

function updateNotes(bills: number[]) {
  const list = document.createElement('ul');
  list.classList.add('bills', 'bills-list');

  bills.forEach(bill => {
    const billSvg = createBill(bill);
    const li = document.createElement('li');

    li.classList.add('bill');
    li.appendChild(billSvg);
    list.appendChild(li);
  });

  listContainer.innerHTML = '';
  listContainer.appendChild(list);
}

function onFormSubmit(event: Event) {
  event.preventDefault();
  updateNotes(withdraw(getAmount()));
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
