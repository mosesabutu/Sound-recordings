/** @format */
import Navbar from "./Navbar";
import BrowserRouter from "./BrowserRouter";
import Routes from "./Routes";
import Blog from "./Blog";
import Link from "./Link";
import Auth from "./FireBase/Auth/Auth";
function App() {
  return (
    <>
      <Auth />
      <BrowserRouter>
        <Link to={"/"}>
          {" "}
          <h1>App</h1>{" "}
        </Link>
        <h2>Hello</h2>
        <Navbar />
        <Routes path="/home">
          <h3>Route 1</h3>
        </Routes>
        <Routes path="/blog">
          <h3>Route 2</h3>
          <Blog />
        </Routes>
        <Routes path="/about">
          <h3>Route 3</h3>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
