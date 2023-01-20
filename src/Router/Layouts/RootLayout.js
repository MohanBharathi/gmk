import { Link, Outlet, } from "react-router-dom"

function RootLayout() {
  return (
    <div><header>
    <h1>React Router</h1>
    <Link to="/">Home</Link><br></br>
    <Link to="about">About</Link><br></br>
  </header>
  <main>
    <Outlet/>
  </main>
  </div>
  )
}

export default RootLayout