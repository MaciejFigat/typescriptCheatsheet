import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
interface CodeHighlightProps {
codeBlock: string
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({codeBlock }) => {
        return (
            <SyntaxHighlighter
            language='jsx'
            style={vscDarkPlus}
            wrapLines={true}
            lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
          >
            {codeBlock}
          </SyntaxHighlighter>
        
        
            )
}
export default CodeHighlight