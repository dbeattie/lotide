# Lotide

A bad mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. Poorly written and incomplete at the time of publication.  It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my practice at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dbeattie/lotide`

**Require it:**

`const _ = require('@dbeattie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

**The following functions are currently implemented:**

* assertEqual(x,y): Logs message to show whether 2 primary objects match.
* head(array): returns the front element of the array.
* tail(array): returns a new array without the (head) first index value of the original array.
* eqArrays(arr1,arr2): compare 2 arrays and return true if they’re equal. This currently does not work on nested arrays but might be implented at a later date.
* assertArraysEqual(arr1, arr2): Logs a message to show if 2 arrays match.
* middle(array): returns a new array with the middle index element value/s of the original array if it's more than 2 elements.
* without(source, itemsToRemove): returns a source array without the specified items from itemsToRemove.
* flatten(array): Takes potentially nested arrays and flattens it into a single array with no nesting.

**The following functions are still waiting to be implemented:**

* eqObject(object1, object2): compares tow objects and returns a bollean if the values are the same and the number of keys are the same. This currently does not work on nested objects- to be implented at a later date.
* countLetters(string): returns the count of each letter of the string with an Object format.
* countOnly(allItems, itemsToCount): returns the number of times a value (itemsToCount) appears in an array.
* assertObjectsEqual(Obj1, Obj2): Logs a message to show whether 2 objects match.
* findKey(obj1, callback): returns the first key which matches the value which is given by the callback.
* findKeyByValue(object, value): returns the first key which matches the value. (This is with no callback function).
* letterPositions(sentence): returns an object that contains the letters (key) and index positions (value) of the sentence.
* map(array, callback): takes in two arguments 1) array to map and 2) callback function (when predicate is met) should return the altered array.
* takeUntil(array, callback): takes a slice of an array with index values taken from the beginning until callback/predicate returns a truthy value.
