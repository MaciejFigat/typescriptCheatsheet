import React from 'react'
import SectionCode from '../components/SectionCode'
import {
  codeExamplePropsBasic,
  codeExamplePropsOne,
  codeExamplePropsTwo,
  codeExamplePropsThree,
} from '../codeSnippets/propsExamples'
interface PropsProps {}

const Props: React.FC<PropsProps> = () => {
  return (
    <>
      <SectionCode
        sectionID='basic'
        title='Basic Prop Types Examples'
        description='A list of TypeScript types you will likely use in a React+TypeScript app:'
        codeExample={codeExamplePropsBasic}
      />
      <SectionCode
        sectionID='partOne'
        title='Title  1'
        description='desc 1'
        codeExample={codeExamplePropsOne}
      />
      <SectionCode
        sectionID='partTwo'
        title='Title  2'
        description='I connected the interfaces and used the main one'
        codeExample={codeExamplePropsTwo}
      />
      <SectionCode
        sectionID='partThree'
        title='Title  3'
        description='desc 3'
        codeExample={codeExamplePropsThree}
      />
    </>
  )
}
export default Props
