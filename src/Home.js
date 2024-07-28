const Home = () => {

    const handleClick = (event) => {
        console.log('Hello ninjas!', event);
    };

    const handleClickAgain = (name, event) => {
        console.log('Hello ' + name, event.target);
    };

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(event) => handleClickAgain('Mario', event)}>Click me again</button>
        </div>
    );
}

export default Home;