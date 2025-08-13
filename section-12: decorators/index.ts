import { Person, Product, Printer } from './classes';
import { Course, validate } from './validation';

// Person example
const pers = new Person();
console.log(pers);

// Product examples
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

// Printer example
const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// Course validation example
const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
