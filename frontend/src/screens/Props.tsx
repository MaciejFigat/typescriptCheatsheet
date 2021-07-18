import React from 'react'
import SectionCode from '../components/SectionCode'
import {
  codeExamplePropsOne,
  codeExamplePropsTwo,
  codeExamplePropsThree,
} from '../codeSnippets/codeTwo'
interface PropsProps {}

const Props: React.FC<PropsProps> = () => {
  return (
    <>
      <SectionCode
        sectionID='partOne'
        title='Title  1'
        description='desc 1'
        codeExample={codeExamplePropsOne}
      />
      <SectionCode
        sectionID='partTwo'
        title='Title  2'
        description='desc 2'
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
