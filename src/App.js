import React from 'react'
import { Button } from 'react-bootstrap'
import RenderList from './Training/RenderList/RenderList'
import ConditionalRendring from './Training/ConditionalRendring/ConditionalRendring'
import Usingternary from './Training/ConditionalRendring/Usingternary'
import ShortCircuting from './Training/ConditionalRendring/ShortCircuting'
import Event from './Training/EventHandling/Event'
import Props from './Training/Porps/Props'
import Parent from './Training/ParentToChild/Parent'
import Input from './Training/Input/Input'
import Output from './Training/Output/Output'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Training/Routing/Home'
import About from './Training/Routing/About'
import State from './Training/Hooks/State'
import Effect from './Training/Hooks/Effect'
import Memo from './Training/Hooks/Memo'
import Ref from './Training/Hooks/Ref'
import Layout from './Training/Routing/Layout'
import Contact from './Training/Routing/Contact'
import User from './Training/Routing/User'
import Style from './Training/Styling/Style'
import CrudApp from './Training/Crud/CrudApp'
import Create from './Training/Crud/Create'
import Read from './Training/Crud/Read'
import Edit from './Training/Crud/Edit'
import Delete from './Training/Crud/Delete'
import ReactTostify from './Training/ReactTostify/ReactTostify'
// import Form from './Training/Form/Form'
import Form from './Training/FormUI/Header'


//   const router=createBrowserRouter(
//   createRoutesFromElements(
//    <Route path='/' element={<Layout/>}>
//     <Route path='/about' element={<About/>}></Route>
//     <Route path='/contact' element={<Contact/>}></Route>
//     <Route path='/user/:userId' element={<User/>}></Route>
//    </Route>
//   )
//  )


  
const App = () => {

  return (
    <div>
      {/* <Button>CLick me</Button> */}
      {/* <RenderList></RenderList> */}
      {/* <ConditionalRendring></ConditionalRendring> */}
      {/* <Usingternary></Usingternary> */}
      {/* <ShortCircuting></ShortCircuting> */}
      {/* <Event></Event> */}
      {/* <Props></Props> */}
      {/* <Parent></Parent> */}
      {/* <Input></Input> */}
      {/* <Output></Output> */}
      {/* <Layout></Layout> */}
      {/* <State></State> */}
      {/* <Effect></Effect> */}
      {/* <Memo></Memo>     */}
      {/* <Ref></Ref> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Style></Style> */}
      {/* <Routes>
      <Route path='/' element={<CrudApp></CrudApp>}></Route>
      <Route path='/read' element={<Read></Read>}></Route>
      <Route path='/Edit' element={<Edit></Edit>}></Route>
      <Route path='/Delete' element={<Delete></Delete>}></Route>

      </Routes> */}
      {/* <ReactTostify/> */}
        {/* <Form></Form> */}
      <Form></Form>
      </div>
  )
}

export default App
