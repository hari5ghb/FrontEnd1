import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './Layouts/RootLayout'
import ServiceLayout from './Layouts/ServiceLayout'
import AboutLayout from './Layouts/AboutLayout'
import BlogLayout from './Layouts/BlogLayout'
import ContactLayout from './Layouts/ContactLayout'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />} />
        <Route index element={<Home />} />
        <Route path='/service' element={<ServiceLayout />} />
        <Route path='/about' element={<AboutLayout />} />
        <Route path='/blog' element={<BlogLayout />} />
        <Route path='/contact' element={<ContactLayout />} />
      </>
    )
  )


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
