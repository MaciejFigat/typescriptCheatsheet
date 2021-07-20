import React from 'react'
import SectionCode from '../components/SectionCode'
import {
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
} from '../codeSnippets/hooksExamples'
interface HooksProps {}

const Hooks: React.FC<HooksProps> = () => {
  return (
    <>
      <SectionCode
        sectionID='partOne'
        title='useState'
        version='secondary'
        description={codeDescriptionHooksOne}
        codeExample={codeExampleHooksOne}
      />
      <SectionCode
        sectionID='partTwo'
        title=''
        version='info'
        description={codeDescriptionHooksTwo}
        codeExample={codeExampleHooksTwo}
      />
      <SectionCode
        sectionID='partThree'
        title=''
        version='success'
        description={codeDescriptionHooksThree}
        codeExample={codeExampleHooksThree}
      />
      <SectionCode
        sectionID='partFour'
        title=''
        version='dark'
        description={codeDescriptionHooksFour}
        codeExample={codeExampleHooksFour}
      />
      <SectionCode
        sectionID='partFive'
        title=''
        version='success'
        description={codeDescriptionHooksFive}
        codeExample={codeExampleHooksFive}
      />
      <SectionCode
        sectionID='partSix'
        title=''
        version='warning'
        description={codeDescriptionHooksSix}
        codeExample={codeExampleHooksSix}
      />
      <SectionCode
        sectionID='partSeven'
        title=''
        version='success'
        description={codeDescriptionHooksSeven}
        codeExample={codeExampleHooksSeven}
      />
      <SectionCode
        sectionID='partEight'
        title=''
        version='info'
        description={codeDescriptionHooksEight}
        codeExample={codeExampleHooksEight}
      />
    </>
  )
}
export default Hooks
