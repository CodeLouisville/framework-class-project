# Week 3

## House Keeping

1. Thinking about your Projects!
2. Make sure you know how to get to your Projects when you create them on
   your computer.

## Lets get caught ups first!!

`git checkout -f week2`.

This will blow away all your changes, so if there is something you want to keep for later go ahead and commit it and remove the `-f` from your command.

## What are Callback Functions?

Here is a link to a resource for learning more about callback functions
[Callback Functions] (<https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks)>

## ES2015

ES2015 Syntax.

Below is a link to the list of every blog post by Mozilla that talk about
features that were added to Javascript in the ES6 release. Pace yourself its a
lot of content, but if you just can't get enough!

1. <https://hacks.mozilla.org/category/es6-in-depth/>

## Lets Get Started!

return to <https://reple.it> to test out ES6 stuffs

```JavaScript
students = [
  {"name":"Alex", "grade":81},
  {"name":"Lucas", "grade":93},
  {"name":"Dvontre", "grade":71}
]

// Function that loops over students 
// checks passing based on grades
function checkPass(student){
  if(student.grade >= 70){
    console.log(`${student.name} is passing!`)
  }
  else console.log(`${student.name} is not passing..`)
}

// loops through and logs out each student
students.forEach((student) =>{
  console.log(student)
})

// calls checkPass on each student
students.forEach(checkPass)

```


# New Reading

## React

The first two articles linked below are CRUCIAL to your understanding of react,
and you should pay very close attention to them!

1. https://reactjs.org/docs/handling-events.html
2. https://reactjs.org/docs/components-and-props.html
3. https://reactjs.org/docs/react-component.html
4. http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Javascript

1. https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
2. https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
3. https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/

# Refresher Reading

It's not going away, might as well make sure you know how to use Array functions
inside and out. The one you will use the most is map.

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

# Bonus Reading


