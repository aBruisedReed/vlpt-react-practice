let count = 0;
count += 1;
// count = 'suddenly string';

const message: string = 'hello string';


const flag: boolean = true;

const numbers: number[] = [1,2,3];
const messages: string[] = ['hi', 'hello'];

messages.push('bon jour');

let mightBeUndefined: string|undefined = undefined;
let nullableNumber: number|null = null;
nullableNumber = 123;

let color: 'red'|'blue'|'green' = 'green';

function sum(x: number, y: number): number {
  return x+y;
}

console.log(sum(1,2));

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc+current, 0);
}

const total = sumArray([1,2,3,4,5]);

interface Shape {
  getArea(): number;
} 

class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius*this.radius*Math.PI;
  }
}

class Rectangle implements Shape {
  public width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width*this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];
shapes.forEach(shape => {
  console.log(shape.getArea());
});

type Person = {
  name: string;
  age?: number;
}
type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: 'Kim',
  age: 20
}

const expert: Developer = {
  name: 'D.kim',
  skills: ['js', 'react']
}

function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const mergedObj = merge({foo: 1, bar:2}, {kk: 4});

console.log(mergedObj); 

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a','b','c'],
}

class Queue<T> {
  list: T[];
  constructor() {
    this.list = [];
  }
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue(): T|undefined {
    return this.list.shift();
  }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(9);


