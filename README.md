# Week 2

## Getting Setup

1. `git add .`
2. `git commit -m "my work"`
3. `git checkout master`

## This Weeks Overview

- Object Oriented Programming
- Understanding This
- Understanding JS Conditionalss

## Further Information

A great website to just play around with a bunch of different languages
is <https://repl.it.> Today we are going to use it to demo the topics.

- [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [If / Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

```javascript
class Person{
  constructor(name="New Name", age="20"){
    this._name = name
    this._age = age
  }

  getName(){
    return this._name
  }

  setName(name){
    if(name.length >= 2){
      this._name = name
    }
  }

  getAge(age){
    return this._age
  }
}

```


_Inclass Demo Time!!!_
