const codeExampleOne: string = `
empty too
 
`
const typesExampleOne: string = `
const user = {
  name: "Hayes",
  id: 0,
}

`
const typesExampleTwo: string  = `
interface User {
  name: string;
  id: number;
}

`
const typesExampleThree: string  = `
const user: User = {
  name: "Hayes",
  id: 0,
}
`
const propTypeExamples: string  = `
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
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
}
`
const useStateExample: string  = `const [user, setUser] = React.useState<IUser | null>(null);

// later...
setUser(newUser);`
const useStateExampleTwo = `// You can also use type assertions if a state is initialized soon after setup and always has a value after:
const [user, setUser] = React.useState<IUser>({} as IUser);

// later...
setUser(newUser);`
const useStateExampleThree: string  = `empty
`

const functionComponentsExamples: string  = ` 
/*  Declaring type of props - see "Typing Component Props" for more examples */
type AppProps = {
  message: string;
}
 /* use interface if exporting so that consumers can extend */

 /*  Easiest way to declare a Function Component; return type is inferred. */
const App = ({ message }: AppProps) => <div>{message}</div>;

/*  you can choose annotate the return type so an error is raised if you accidentally return some other type */
const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

/*  you can also inline the type declaration; eliminates naming the prop types, but looks repetitive */
const App = ({ message }: { message: string }) => <div>{message}</div>;`

const useReducerExample: string  = `const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}`

const useEffectExampleOne: string  = `function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;

  useEffect(
    () =>
      setTimeout(() => {
        /* do stuff */
      }, timerMs),
    [timerMs]
  );
  // bad example! setTimeout implicitly returns a number
  // because the arrow function body isn't wrapped in curly braces
  return null;
}
`
const useEffectExampleTwo: string  = `function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;

  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs]);
  // better; use the void keyword to make sure you return undefined
  return null;
}
`
const useRefExampleOne: string  = `function Foo() {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement
  //   is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it
    if (!divRef.current) throw Error("divRef is not assigned");

    // Now divRef.current is sure to be HTMLDivElement
    doSomethingWith(divRef.current);
  });

  // Give the ref to an element so React can manage it for you
  return <div ref={divRef}>etc</div>;
}`
const useRefExampleTwo: string  = `function Foo() {
  // Technical-wise, this returns MutableRefObject<number | null>
  const intervalRef = useRef<number | null>(null);

  // You manage the ref yourself (that's why it's called MutableRefObject!)
  useEffect(() => {
    intervalRef.current = setInterval(...);
    return () => clearInterval(intervalRef.current);
  }, []);

  // The ref is not passed to any element's "ref" prop
  return <button onClick={/* clearInterval the ref */}>Cancel timer</button>;
}`

export {
  codeExampleOne,
  typesExampleOne,
  typesExampleTwo,
  typesExampleThree,
  propTypeExamples,
  functionComponentsExamples,
  useStateExample,
  useStateExampleTwo,
  useReducerExample,
  useEffectExampleOne,
  useEffectExampleTwo,
  useRefExampleOne,
  useRefExampleTwo,
}
