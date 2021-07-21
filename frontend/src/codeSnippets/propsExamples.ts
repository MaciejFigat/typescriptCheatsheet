



const codeExamplePropsBasicOne: string = `type AppProps = {
    message: string;
    count: number;
    disabled: boolean;`
const codeExamplePropsBasicOneDesc = `It could be something simple like this.`
const codeExamplePropsBasicTwoDesc = `Or perhaps an array of a type.`
const codeExamplePropsBasicThreeDesc = `string literals to specify exact string values, with a union type to join them together. Variable status will only accept strings that are either "waiting" or "success" 
`
const codeExamplePropsBasicFourDesc = `obj - any object as long as you dont use its properties (useful as placeholder)
obj 2 - almost the same as object, exactly the same as Object

obj3 - an object with any number of properties (PREFERRED) 

objArr - An array of objects
 `
const codeExamplePropsBasicFiveDesc = ` dict - object with any number of properties of the same type.  
dict2 - equivalent to dict1. 
`
const codeExamplePropsBasicSixDesc = `any function as long as you don't invoke it`
const codeExamplePropsBasicSevenDesc = `function that doesn't take or return anything (VERY COMMON)`
const codeExamplePropsBasicEightDesc = `function with named prop (VERY COMMON)`
const codeExamplePropsBasicNineDesc = `alternative function type syntax that takes an event (VERY COMMON)`

const codeExamplePropsBasicTwo: string = `names: string[]
const names = ["Joe", "Dick", "Uncle", "Fcuk"]
`
const codeExamplePropsBasicThree: string = `status: "waiting" | "success"`
const codeExamplePropsBasicFour: string = `obj: object;

obj2: {}; 

obj3: {
  id: string;
  title: string;

objArr: {
  id: string;
  title: string;
}[]  
}`
const codeExamplePropsBasicFive: string = `dict1: {
    [key: string]: MyTypeHere;
  }
dict2: Record<string, MyTypeHere>   
  `
const codeExamplePropsBasicSix: string = `onSomething: Function;`
const codeExamplePropsBasicSeven: string = `onClick: () => void;`
const codeExamplePropsBasicEight: string = `onChange: (id: number) => void;`
const codeExamplePropsBasicNine: string = `onClick(event: React.MouseEvent<HTMLButtonElement>): void;`

const codeExamplePropsOne: string = `import React from 'react'

const ComponentExample: React.FC<{ propsOne: string }> = () => {
    return (
        <div>
            
        </div>
    )
}

export default codeTwo`
const codeExamplePropsTwo: string = `import React from 'react'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: string
    ok?: boolean
    nr?: number
    fnTwo?: (parameterA: number) => number
    fnThree?: (bob: string) => string
    objectOne?: {
        fieldOne: string
    }
    person: Person
    
}`
const codeExamplePropsThree: string = `const ComponentExample: React.FC<Props> = () => {
    return (
        <div>
            
        </div>
    )
}

export default codeTwo`
const codeExamplePropsThreeDesc: string = `I refer only to Props interface in my component. This way code looks cleaner etc.`
const codeExamplePropsOneDesc = `This component expects propsOne that is a string.`
const codeExamplePropsTwoDesc = `Connected interface Person in interface Props.`
const codeExamplePropsFour: string = ` 
import React from 'react'
import ComponentExample from './ComponentExample'

const App: React.FC = () => {
    return (
        <div>
        <ComponentExample text='hell' person={{firstName: 'Maciej', lastName: 'Smith'}}/>
        </div>
        )
    }
    
    export default App 
    `
const codeExamplePropsFourDesc: string = `This way I can pass person object as props with properties defined in Person interface.`


export {
    codeExamplePropsBasicOne,
    codeExamplePropsBasicTwo,
    codeExamplePropsBasicThree,
    codeExamplePropsBasicFour,
    codeExamplePropsBasicFive,
    codeExamplePropsBasicSix,
    codeExamplePropsBasicSeven,
    codeExamplePropsBasicEight,
    codeExamplePropsBasicNine,
    codeExamplePropsBasicOneDesc,
    codeExamplePropsBasicTwoDesc,
    codeExamplePropsBasicThreeDesc,
    codeExamplePropsBasicFourDesc,
    codeExamplePropsBasicFiveDesc,
    codeExamplePropsBasicSixDesc,
    codeExamplePropsBasicSevenDesc,
    codeExamplePropsBasicEightDesc,
    codeExamplePropsBasicNineDesc,
    codeExamplePropsOne,
    codeExamplePropsTwo,
    codeExamplePropsThree,
    codeExamplePropsFour,
    codeExamplePropsOneDesc,
    codeExamplePropsTwoDesc,
    codeExamplePropsThreeDesc,
    codeExamplePropsFourDesc,

}