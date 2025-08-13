import { DataStore } from './types';
import { merge, mergeMultiple, mergeObj, mergeObjSecond } from './functions';
import { LinkedList } from './linked-list';

// Array examples
let names: Array<string> = ['Max', 'Anna'];

// DataStore examples
let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

let nameStore: DataStore<string> = {};

// Function examples
const ids = merge<number>(1, 2);
const secondIds = mergeMultiple<number, string>(1, 'Max');

const merged = mergeObj({username: 'Max'}, {age: 35});
const mergedSecond = mergeObjSecond({username: 'Max'}, {age: 35});

// Generic class example
interface Role<T>{}

class User<T> {
    constructor(public id: T) {}
}

const user = new User('i1');
user.id;

// LinkedList examples
const numberList = new LinkedList<number>();

numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log(' >>>>> NOW REMOVING INDEX 1 <<<<<< ');
numberList.removeAt(1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log(' >>>>> NOW INSERTING AT INDEX 1 <<<<<< ');
numberList.insertAt(100, 1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

const nameList = new LinkedList<string>();
