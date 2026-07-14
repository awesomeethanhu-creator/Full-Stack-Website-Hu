import {Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import ThingsILike from './ThingsILike.jsx'
import Extracurriculars from './Extracurriculars.jsx'
import Contact from './Contact.jsx'
import ThingsIHate from './ThingsIHate.jsx'
import Timeline from './Timeline.jsx'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ThingsILike' element={<ThingsILike/>}/>
      <Route path='/Extracurriculars' element={<Extracurriculars/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/ThingsIHate' element={<ThingsIHate/>}/>
      <Route path='/Timeline' element={<Timeline/>}/>
    </Routes>
  )
}

export default App
