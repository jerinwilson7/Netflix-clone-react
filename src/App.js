import React from 'react'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Header/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { original,action,trending,comedy,romance,documentaries,horror} from './urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={original} title = 'Netflix Originals'/>
      <RowPost url={action} title = 'Action' isSmall/>
      {/* <RowPost url={trending} title = 'Trending' isSmall/>
      <RowPost url={comedy} title = 'comedy' isSmall/>
      <RowPost url={romance} title = 'romance' isSmall/>
      <RowPost url={horror} title = 'horror' isSmall/>
      <RowPost url={documentaries} title = 'documentaries' isSmall/> */}
    </div>
  )
}

export default App

