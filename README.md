# Lotide

A mini clone of some features from [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my practice at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dbeattie/lotide`

**Require it:**

`const _ = require('@dbeattie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

* **countLetters(string):** Returns the count of each letter of the string with an object output format.

* **countOnly(allItems, itemsToCount):** Returns the number of times a value (itemsToCount) appears in an array.

* **eqArrays(arr1,arr2):** Compares 2 arrays and return true if they’re equal. Only goes one layer deep, see the recursive option below that goes deeper.

* **eqObject(object1, object2):** Compares tow objects and returns a boolean if the values are the same and the number of keys are the same. Currently only goes one layer deep, see the recursive version below that goes deeper.

* **findKey(obj1, callback):** Returns the first key that matches the value which is given by the callback.

* **findKeyByValue(object, value):** Returns the first key in an object that matches the value. (No callback here).

* **flatten(array):** Takes potentially nested arrays and flattens it into a single array with no nesting. Recursive version goes many layers deep.

* **head(array):** Returns the front element of the array.

* **letterPositions(sentence):** Returns an object that contains the letters (key) and index positions (value) of them from the string sentence input.

* **map(array, callback):** Takes in two arguments 1) array to map and 2) callback function (when predicate is met) and returns the altered array. -- Mimics the prototype.map method.

* **middle(array):** Returns a new array with the middle index element value/s of the original array if it's more than 2 elements. i.e. slices off the front and back elements if longer than 3 or more elements.

* **tail(array):**  Returns a new array without the (head) first index value of the original array. i.e. returns just the tail of the array.

* **takeUntil(array, callback):** Takes all the elements of an array and puts them into a new array until the callback terminates the action. i.e. Take until the condition of the callback is met.  

* **without(source, itemsToRemove):** Returns a new array from a source array minus any items from a a itemsToRemove array.

### Two Recursive STRETCH activites:

* **eqArraysRecursive(arr1, arr2):** Will determine if two arrays many layers deep (deep nested) are equal.

* **eqObjectsRecursive(obj1, obj2):** Will determine if two objects many layers deep (deep nested) are equal.


#### The following functions are implemented but not needed with Mocha/Chai installed:

* **assertEqual(x,y):** Logs message to show whether 2 primative types match.

* **assertArraysEqual(arr1, arr2):** Logs a message to show if 2 arrays match.

* **assertObjectsEqual(Obj1, Obj2):** Logs a message to show whether 2 objects match.