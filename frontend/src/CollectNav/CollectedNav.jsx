
import { Link, Outlet } from "react-router-dom"


 export default function CollectedNav() {
  return (
    <div className='collected-nav'>
     <header>
        <nav>
          <h1>The Game Shope</h1>
          <Link to="/"><span>Home</span></Link>
            <Link to="/Products"><span>Products</span></Link>
            <Link to="/About"><span>About</span></Link>
            <Link to="/Contact"><span>Contact</span></Link>
          <Link to="/login"><span>Login</span></Link>
        </nav>
      </header>


      <main>
        <Outlet />
      </main>
    </div>
  )
}




