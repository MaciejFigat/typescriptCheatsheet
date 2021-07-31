const TM_FILENAME_BASE = null

const snippetOne: string = `
"Typescript React Function Component v2": {
    "prefix": "rt",
    "body": [
      "import React from 'react'",
      "",
       "interface ${TM_FILENAME_BASE}Props {",
      "$1",
      "}",
      "",
      "const $TM_FILENAME_BASE: React.FC<${TM_FILENAME_BASE}Props> = ({$2}) => {",
      "\t\treturn (<div>$3</div>)",
      "}",
    "export default ${TM_FILENAME_BASE}"
    ],
    "description": "Typescript React Function Component with default export and a div"
  },

`
const snippetTwo = `"Typescript React Function Component": {
    "prefix": "rh",
    "body": [
      "import React from 'react'",
      "",
      "interface ${TM_FILENAME_BASE}Props {",
      "$1",
      "}",
      "",
      "export const $TM_FILENAME_BASE: React.FC<${TM_FILENAME_BASE}Props> = ({$2}) => {",
      "\t\treturn ($3);",
      "}"
    ],
    "description": "Typescript React Function Component"
  }`
export {
    snippetOne,
    snippetTwo
}
