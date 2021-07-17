const codeExamplePropsOne: string  = `

import React from 'react'

const ComponentExample: React.FC<{ propsOne: string }> = () => {
    return (
        <div>
            
        </div>
    )
}

export default codeTwo
 
`
const codeExamplePropsTwo: string  = `

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
const codeExamplePropsThree: string  = ` 
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
const codeExampleHooksOne: string  = `
const [count, setCount] = useState(5)
//here it will be inferred that count is a number

const [countTwo, setCountTwo] = useState<number | null | undefined | string>()

setCountTwo(null)
// if I want to specify the type - here it can be a number or null etc.
`
const codeExampleHooksTwo: string  = `

const [textOne, setTextOne] = useState<{ text: string}>({text: 'Hell is wherever'})

setTextOne({text: 'ddd'})
`
const codeExampleHooksThree: string  = `
interface TextNode {
    text: string
}

const [textOne, setTextOne] = useState<TextNode>({text: 'Hell is wherever'})

setTextOne({text: 'dddd'})`
const codeExampleHooksFour: string  = `
// when i hover over onChange in the input after the : it gives me the type of what the function can return

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const inputRef = useRef<HTMLInputElement>(null)
const divRef = useRef<HTMLDivElement>(null)



<div ref={divRef}> 
<input ref={inputRef} onChange={handleChange}/>
</div>

`
const codeExampleHooksFive: string  = `
import React from 'react'

// | - pipes, in below type, mean that either of the objects is the type of Actions

type Actions = 
    | { type: 'add'; text: string }
    | {
        type: 'remove' 
        indexNr: number
      }

interface Todo {
    text: string
    complete: boolean
}

// this is how I create an array 

type State = Todo[]
// I could also write Array<Todo>


// in this reducer I store an array of Todos
const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'add':
            return [...state, {text: action.text, complete: false}]
        case 'remove':
            return state.filter((_, i) => action.indexNr !== i)
        default: 
            return state;
    }
}

const ComponentWithReducer: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

return (
    <div>
        {JSON.stringify(todos)}   
        <button 
            onClick={()=>{
             dispatch({type: 'add', text: '...'})     
            }}
        >
        +
        </button>

    </div>
    )
}

export default ComponentWithReducer


`
const codeExampleHooksSix: string  = `
import React, { useState } from "react";

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <div>{children({ count, setCount })}</div>;
};`

const onSubmitExampleOne: string  = `
<form
  ref={formRef}
  onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
  }}
>
  <div>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
  </div>
  <div>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
  </div>
  <div>
    <input type="submit" value="Log in" />
  </div>
</form>`
const onSubmitExampleTwo = ``
export {
  codeExamplePropsOne,
  codeExamplePropsTwo,
  codeExamplePropsThree,
  codeExampleHooksOne,
  codeExampleHooksTwo,
  codeExampleHooksThree,
  codeExampleHooksFour,
  codeExampleHooksFive,
  codeExampleHooksSix,
  onSubmitExampleOne,
  onSubmitExampleTwo,
}
