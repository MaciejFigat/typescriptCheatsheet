import React from 'react'
import SectionCode from '../components/SectionCode'
import { snippetOne, snippetTwo } from '../codeSnippets/vscSnippets'
interface VSCSnippetsProps {}

const VSCSnippets: React.FC<VSCSnippetsProps> = () => {
  return (
    <div>
      <SectionCode
        sectionID='partOne'
        title=''
        version='success'
        description='Typescript React Function Component with default export and a div'
        codeExample={snippetOne}
      />
      <SectionCode
        sectionID='partTwo'
        title=''
        version='warning'
        description='Typescript React Function Component'
        codeExample={snippetTwo}
      />
      <SectionCode
        sectionID='partThree'
        title=''
        version='primary'
        description=''
        codeExample='   '
      />
    </div>
  )
}
export default VSCSnippets
