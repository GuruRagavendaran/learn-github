import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to my sample website';
  const likes = 60;
  const link="htp://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className ="Content">
       <Home />
        <p>Likes {likes}  times</p>
        <p> { 56}</p>
        <p>{"Guru"}</p>
        <p>vbjchdvlj</p>
        <p>{[1,2,3,4,5]}</p>
        <a href={link}> Google site</a>
      </div>
     
    </div>
  );
}

export default App;
