import Attractions from "../pages/Attractions"
import Hotels from "../pages/Hotels"
import Restaurants from "../pages/Restaurants"
import Homepage from '../pages/Homepage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
 return (
     <div>
       <Routes>
         <Route path="/uiux_project_1/" element={<Layout />}>
           <Route index element={<Homepage />} />
           <Route path="Hotels" element={<Hotels />} />
           <Route path="Restaurants" element={<Restaurants />} />
           <Route path="Attractions" element={<Attractions />} />
           <Route path="*" element={<NoMatch />} />
         </Route>
       </Routes>    
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul className='Navbar'>
          <Link className='NavbarLink' to="/uiux_project_1/">Home</Link>
          <Link className='NavbarLink' to="/uiux_project_1/Hotels">Hotels</Link>
          <Link className='NavbarLink' to="/uiux_project_1/Restaurants">Restaurants</Link>
          <Link className='NavbarLink' to="/uiux_project_1/Attractions">Attractions</Link>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/uiux_project_1/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default Navbar;