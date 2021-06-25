"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var count = 0;
count += 1;
// count = 'suddenly string';
var message = 'hello string';
var flag = true;
var numbers = [1, 2, 3];
var messages = ['hi', 'hello'];
messages.push('bon jour');
var mightBeUndefined = undefined;
var nullableNumber = null;
nullableNumber = 123;
var color = 'green';
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: 'Kim',
    age: 20
};
var expert = {
    name: 'D.kim',
    skills: ['js', 'react']
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var mergedObj = merge({ foo: 1, bar: 2 }, { kk: 4 });
console.log(mergedObj);
var items = {
    list: ['a', 'b', 'c'],
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    return Queue;
}());
