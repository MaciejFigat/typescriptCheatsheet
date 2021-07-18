import React from 'react'
import SectionCode from '../components/SectionCode'
import {
  codeExampleHooksOne,
  codeExampleHooksTwo,
  codeExampleHooksThree,
} from '../codeSnippets/codeTwo'
interface HooksProps {}

const Hooks: React.FC<HooksProps> = ({}) => {
  return (
    <>
      <SectionCode
        sectionID='partOne'
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksOne}
      />
      <SectionCode
        sectionID='partTwo'
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksTwo}
      />
      <SectionCode
        sectionID='partTwo3'
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksTwo}
      />
      <SectionCode
        sectionID='partTwo2'
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksTwo}
      />
      <SectionCode
        sectionID='partTwo2'
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksTwo}
      />
      <SectionCode
        sectionID='partThree'
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksThree}
      />
    </>
  )
}
export default Hooks
