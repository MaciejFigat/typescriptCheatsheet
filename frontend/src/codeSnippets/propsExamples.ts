

const codeExamplePropsBasic: string = `
type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    /** array of a type, ["Joe", "Dick", "Uncle", "Fcuk"]*/
    names: string[];
    /** string literals to specify exact string values, with a union type to join them together */
    /** status will only accept strings that are either "waiting" or "success" */ 
    status: "waiting" | "success";
    /** any object as long as you dont use its properties (useful as placeholder) */
    obj: object;
    obj2: {}; // almost the same as object, exactly the same as Object
    /** an object with any number of properties (PREFERRED) */
    obj3: {
      id: string;
      title: string;
    };
    /** array of objects! (common) */
    objArr: {
      id: string;
      title: string;
    }[];
    /** a dict object with any number of properties of the same type */
    dict1: {
      [key: string]: MyTypeHere;
    };
    dict2: Record<string, MyTypeHere>; // equivalent to dict1
    /** any function as long as you don't invoke it (not recommended) */
    onSomething: Function;
    /** function that doesn't take or return anything (VERY COMMON) */
    onClick: () => void;
    /** function with named prop (VERY COMMON) */
    onChange: (id: number) => void;
    /** alternative function type syntax that takes an event (VERY COMMON) */
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    /** an optional prop (VERY COMMON!) */
    optional?: OptionalType;
  };
  `


const codeExamplePropsOne: string = `

import React from 'react'

const ComponentExample: React.FC<{ propsOne: string }> = () => {
    return (
        <div>
            
        </div>
    )
}

export default codeTwo
 
`
const codeExamplePropsTwo: string = `

import React from 'react'

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
    personOne: Person
    
}
//ok?: boolean means the props is optional

const ComponentExample: React.FC<Props> = () => {
    return (
        <div>
            
        </div>
    )
}

export default codeTwo
 
`
const codeExamplePropsThree: string = ` 
import React from 'react'
import ComponentExample from './ComponentExample'

const App: React.FC = () => {
    return (
        <div>
            <ComponentExample text='text prop string' person={{firstName: 'Maciej', lastName: 'Smith'}}/>
        </div>
    )
}

export default App 
`


export {
    codeExamplePropsBasic,
    codeExamplePropsOne,
    codeExamplePropsTwo,
    codeExamplePropsThree,

}