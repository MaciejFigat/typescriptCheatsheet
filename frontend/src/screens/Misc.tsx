import React from 'react'
import SectionCode from '../components/SectionCode'
import {
  literalsExampleOne,
  literalsExampleTwo,
  literalsExampleThree,
  literalsExampleFour,
  literalsExampleFive,
  literalsExampleSix,
  literalsExampleSeven,
  literalsDescOne,
  literalsDescTwo,
  literalsDescThree,
  literalsDescFour,
  literalsDescFive,
  literalsDescSix,
  literalsDescSeven,
} from '../codeSnippets/literals'

interface MiscProps {}

const Misc: React.FC<MiscProps> = () => {
  return (
    <>
      <SectionCode
        sectionID='partOne'
        title='Literals'
        version='danger'
        description={literalsDescOne}
        codeExample={literalsExampleOne}
      />
      <SectionCode
        sectionID='partTwo'
        title=''
        description={literalsDescTwo}
        codeExample={literalsExampleTwo}
      />
      <SectionCode
        sectionID='partThree'
        title=''
        description={literalsDescThree}
        codeExample={literalsExampleThree}
      />
      <SectionCode
        sectionID='partFour'
        title=''
        description={literalsDescFour}
        codeExample={literalsExampleFour}
      />
      <SectionCode
        sectionID='partFive'
        title=''
        description={literalsDescFive}
        codeExample={literalsExampleFive}
      />
      <SectionCode
        sectionID='partSix'
        title=''
        description={literalsDescSix}
        codeExample={literalsExampleSix}
      />
      <SectionCode
        sectionID='partSeven'
        title=''
        description={literalsDescSeven}
        codeExample={literalsExampleSeven}
      />
    </>
  )
}
export default Misc
