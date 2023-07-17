import { useContext } from 'react'
import './app.css'
import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate, Outlet} from 'react-router-dom'
import Branch from './Components/Branch/Branch'
import RootLayout from './Components/RootLayout'
import Branch_edit from './Components/Branch/Branch_edit'
import Branch_create from './Components/Branch/Branch_create'
import Branch_info from './Components/Branch/Branch_info'
import Category from './Components/Category/Category'
import Category_create from './Components/Category/Category_create'
import Category_edit from './Components/Category/Category_edit'
import Maxsulotlar from './Components/Category/Maxsulotlar'
import Maxsulot_create from './Components/Category/Maxsulot_create'
import Maxsulotlar_info from './Components/Category/Maxsulotlar_info'
import Regions from './Components/Regions/Regions'
import Regions_create from './Components/Regions/Regions_create'
import Regions_edit from './Components/Regions/Regions_edit'
import Maxsulotlar_edit from './Components/Category/Maxsulotlar_edit'
import Agronom from './Components/Agronomlar/Agronom'
import Agronom_create from './Components/Agronomlar/Agronom_create'
import Agronom_edit from './Components/Agronomlar/Agronom_edit'
import CentralOffice from './Components/CentralOffice/CentralOffice'
import Login from './Components/Login/Login'
import { userContext } from './Components/Context/Context'

function App() {
      
  const {user} = useContext(userContext)
  console.log(user);
  const RequireAuth = ({children}) => {
    return user ? <Outlet/> : children
  }

  const router = createBrowserRouter(createRoutesFromElements(
    
      <Route path='/' element={<RequireAuth><Login/></RequireAuth>}>
        <Route path='/Admin' element={<RootLayout/>}>  
          <Route path='/Admin/Regions' element={<Regions/>}/>
          <Route path='/Admin/Regions_create' element={<Regions_create/>}/>
          <Route path='/Admin/Regions_edit/:empid' element={<Regions_edit/>}/>
          <Route path='/Admin/Branch/:empid' element={<Branch/>}/>
          <Route path='/Admin/branch_create/:empid' element={<Branch_create/>}/>
          <Route path='/Admin/branch_edit/:empid' element={<Branch_edit/>}/>
          <Route path='/Admin/branch_info/:empid' element={<Branch_info/>}/>
          <Route path='/Admin/Category' element={<Category/>}/>
          <Route path='/Admin/CategoryCreate' element={<Category_create/>}/>
          <Route path='/Admin/CategoryEdit/:empid' element={<Category_edit/>}/>
          <Route path='/Admin/Maxsulotlar/:empid' element={<Maxsulotlar/>}/>
          <Route path='/Admin/MaxsulotlarCreate/:empid' element={<Maxsulot_create/>}/>
          <Route path='/Admin/Maxsulotlar_info/:empid' element={<Maxsulotlar_info/>}/>
          <Route path='/Admin/Maxsulotlar_edit/:empid' element={<Maxsulotlar_edit/>}/>
          <Route path='/Admin/Agronomlar' element={<Agronom/>} />
          <Route path='/Admin/Agronomlar_Create' element={<Agronom_create/>}/>
          <Route path='/Admin/Agronom_edit/:empid' element={<Agronom_edit/>}/>
          <Route path='/Admin/CentralOffice' element={<CentralOffice/>}/>
        </Route>
      </Route>
    
  ))

  {/* <Routes>
          <Route path='/Branch' element={<Branch/>}/>
          <Route path='/Listing' element={<Listing/>}/>
          <Route path='/Activity' element={<Activity/>} />

    </Routes> */}
  return (
  <RouterProvider router={router}/>
  )
}


export default App