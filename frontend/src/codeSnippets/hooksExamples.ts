const codeExampleHooksOne: string = `
const [count, setCount] = useState(5)
//inferred as a number

const [countTwo, setCountTwo] = useState<number | null | undefined | string>()

setCountTwo(null)
// specific type 
`
const codeDescriptionHooksOne = `We can make it so it'll be either inferred that count is a number or we can specify the type.`

const codeExampleHooksTwo: string = `

const [textOne, setTextOne] = useState<{ text: string}>({text: 'Hell is wherever'})

setTextOne({text: 'Hell is where hello is!'})
`
const codeDescriptionHooksTwo = `We can specify it so it will accept a variable of text that is a string.`

const codeExampleHooksThree: string = `
interface TextNode {
    text: string
}

const [textOne, setTextOne] = useState<TextNode>({text: 'Hell is wherever'})

setTextOne({text: 'Hello from Hell!'})`

const codeDescriptionHooksThree = `We can also define what can be accepted by the useState by defining an interface`


const codeExampleHooksFour: string = `
import React, {useRef} from 'react'

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const RefExample: React.FC<Props> = () => {
const inputRef = useRef<HTMLInputElement>(null)
const divRef = useRef<HTMLDivElement>(null)
return (
    <div ref={divRef}> 
<input ref={inputRef} onChange={handleChange}/>
</div>
)

}
`
const codeDescriptionHooksFour = `Example of typing ref hook. In this case we'll get assist from the IDE when we hoover over the element that contains the ref to find out what type it is.`

const codeExampleHooksFive: string = `
import React from 'react'

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

type State = Todo[]
// I could also write Array<Todo>

`
const codeDescriptionHooksFive = ` | - pipes, in below type, mean that either of the objects is the type of Actions. 1st we create interface Todo with text that is a string and complete that is boolean type. 2nd we declare a type State that uses interface Todo and we create this type as an array.`

const codeExampleHooksSix: string = `
const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'add':
            return [...state, {text: action.text, complete: false}]
        case 'remove':
            return state.filter((_, i) => action.indexNr !== i)
        default: 
            return state;
    }
}`
const codeDescriptionHooksSix = `In this reducer I store an array of Todos from previous block of code.`

const codeExampleHooksSeven: string = `const ComponentWithReducer: React.FC = () => {
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

export default ComponentWithReducer`
const codeDescriptionHooksSeven = `Here I use the TodoReducer`

const codeExampleHooksEight: string = `import React, { useState } from "react";

interface Props {
    children: (data: {
        count: number;
        setCount: React.Dispatch<React.SetStateAction<number>>;
    }) => JSX.Element | null;
}

export const Counter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(0);

    return <div>{ children({ count, setCount }) } < /div>;
}; `

const codeDescriptionHooksEight = `This is how we type children and props we pass onto them.`




export {

    codeExampleHooksOne,
    codeExampleHooksTwo,
    codeExampleHooksThree,
    codeExampleHooksFour,
    codeExampleHooksFive,
    codeExampleHooksSix,
    codeExampleHooksSeven,
    codeExampleHooksEight,
    codeDescriptionHooksOne,
    codeDescriptionHooksTwo,
    codeDescriptionHooksThree,
    codeDescriptionHooksFour,
    codeDescriptionHooksFive,
    codeDescriptionHooksSix,
    codeDescriptionHooksSeven,
    codeDescriptionHooksEight,

}