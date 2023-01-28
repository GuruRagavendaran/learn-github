const Home = () => {

    const handleClick = () =>{
        console.log('hello, guru')
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick()}>click</button>
        </div>
     );
}
 
export default Home;