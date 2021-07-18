import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
interface CodeHighlightProps {
  codeBlock: string
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ codeBlock }) => {
  return (
    <SyntaxHighlighter
      language='tsx'
      style={vscDarkPlus}
      wrapLines={true}
      lineProps={{
        style: {
          wordBreak: 'break-all',
          whiteSpace: 'pre-wrap',
          // lineHeight: '1.75',
          fontSize: '1.25em',
        },
      }}
    >
      {codeBlock}
    </SyntaxHighlighter>
  )
}
export default CodeHighlight
