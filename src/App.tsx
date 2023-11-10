import { SyntheticEvent, useRef, useState } from 'react'

import SectionOne from 'components/SectionOne'
import SectionTwo from 'components/SectionTwo'

import 'index.css'

function App() {
  const [activePage, setActivePage] = useState(1)
  const pageRefOne = useRef(null)
  const pageRefTwo = useRef(null)
  const pageRefThree = useRef(null)

  const handleScroll = (event: SyntheticEvent) => {
    const scrollValue = event.currentTarget.scrollTop
    // @ts-expect-error as of the moment i cannot specify the type for the reference.current
    const pageTwoVisibilityOffset = pageRefTwo.current.offsetTop * 0.1
    // @ts-expect-error as of the moment i cannot specify the type for the reference.current
    const pageThreeVisibilityOffset = pageRefThree.current.offsetTop * 0.1

    if (scrollValue < pageTwoVisibilityOffset) {
      setActivePage(1)
    }
    if (
      scrollValue >= pageTwoVisibilityOffset ||
      scrollValue < pageThreeVisibilityOffset
    ) {
      setActivePage(2)
    }
    if (scrollValue >= pageThreeVisibilityOffset) {
      setActivePage(3)
    }
  }

  return (
    <main
      className="app-container h-screen overflow-y-scroll sm:h-full sm:overflow-y-auto"
      onScroll={handleScroll}
    >
      <SectionOne reference={pageRefOne} page={1} activePage={activePage} />
      <SectionOne reference={pageRefTwo} page={2} activePage={activePage} />
      <SectionTwo reference={pageRefThree} page={3} activePage={activePage} />
    </main>
  )
}

export default App
