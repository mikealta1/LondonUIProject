import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Hotels" element={<Hotels />} />
          <Route path="Restaurants" element={<Restaurants />} />
          <Route path="Attractions" element={<Attractions />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>    
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul className='Navbar'>
          <Link className='NavbarLink' to="/">Home</Link>
          <Link className='NavbarLink' to="/Hotels">Hotels</Link>
          <Link className='NavbarLink' to="/Restaurants">Restaurants</Link>
          <Link className='NavbarLink' to="/Attractions">Attractions</Link>
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
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
