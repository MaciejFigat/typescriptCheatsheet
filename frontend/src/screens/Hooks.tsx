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
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksOne}
      />
      <SectionCode
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksTwo}
      />
      <SectionCode
        title='Title  1'
        description='desc 1'
        codeExample={codeExampleHooksThree}
      />
    </>
  )
}
export default Hooks
