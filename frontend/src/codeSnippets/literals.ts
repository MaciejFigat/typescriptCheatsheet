const literalsExampleOne = `
const helloWorld = "Hello World"
let hiWorld = "Hi World" // this is a string because it is let
`
const literalsDescOne = `A literal is a more concrete subtype of a collective type.
What this means is that "Hello World" is a string, but a
string is not "Hello World" inside the type system.`
const literalsExampleTwo = `declare function allowsAnyString(arg: string);
allowsAnyString(helloWorld);
allowsAnyString(hiWorld)`
const literalsDescTwo = `This function takes all strings
`
const literalsExampleThree = `
declare function allowsOnlyHello(arg: "Hello World")
allowsOnlyHello(helloWorld)
allowsOnlyHello(hiWorld)`
const literalsDescThree = `This function only accepts the string literal "Hello World"`
const literalsExampleFour = `declare function allowsFirstFiveNumbers(arg: 1 | 2 | 3 | 4 | 5)
allowsFirstFiveNumbers(1)
allowsFirstFiveNumbers(10)

let potentiallyAnyNumber = 3
allowsFirstFiveNumbers(potentiallyAnyNumber)`
const literalsDescFour = `This lets you declare APIs which use unions to say it
only accepts a particular literal:`
const literalsExampleFive = `
const myUser = {
  name: "Sabrina",
}

myUser.name = "Cynthia"`
const literalsDescFive = `At first glance, this rule isn't applied to complex objects. See how it transforms name: "Sabrina" to name: string
even though it is defined as a constant. This is because
the name can still change any time. 
Because myUser's name property can change, TypeScript
cannot use the literal version in the type system. There
is a feature which will allow you to do this however.`
const literalsExampleSix = `const myUnchangingUser = {
  name: "Fatmom",
} as const

myUnchangingUser.name = "Youfat"
//so this won't work`
const literalsDescSix = `When "as const" is applied to the object, then it becomes
a object literal which doesn't change instead of a mutable object which can.`
const literalsExampleSeven = `
const exampleUsers = [{ name: "Hughes" }, { name: "Dick" }] as const`
const literalsDescSeven = `"as const" is a great tool for fixtured data, and places
where you treat code as literals inline. "as const" also works with arrays:`
export {
  literalsExampleOne,
  literalsExampleTwo,
  literalsExampleThree,
  literalsExampleFour,
  literalsExampleFive,
  literalsExampleSix,
  literalsExampleSeven,
  literalsDescOne,
  literalsDescTwo,
  literalsDescThree,
  literalsDescFour,
  literalsDescFive,
  literalsDescSix,
  literalsDescSeven
}