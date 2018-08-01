// Import stylesheets
import '../style.css';
// Import ATM
import { withdraw } from '../atm';

const form = document.querySelector('.form') as HTMLInputElement;
const amountInput = document.querySelector('.amount') as HTMLInputElement;
const withdrawButton = document.querySelector('.submit');
const notesList = document.querySelector('.notes') as HTMLUListElement;

form.addEventListener('submit', onFormSubmit);

function updateNotes(withdrawal: number[]) {
  notesList.innerHTML = withdrawal.map(n => `<li>${n}</li>`).join('');
}

function onFormSubmit(event: Event) {
  updateNotes(withdraw(getAmount()));
  event.preventDefault();
}

function getAmount() {
  return Number(amountInput.value);
}
