
import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Newsboard from './Components/Newsbord'

function App() {
  const[category,setcategory]=useState('general');
  const[country,setcountry]=useState('in');
  return (
    <>
     <Nav setcategory={setcategory} setcountry={setcountry}/>
      <Newsboard category={category} country={country}/>
    </>
  )
}

export default App;
