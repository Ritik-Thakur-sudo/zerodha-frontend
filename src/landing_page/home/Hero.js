import '../../css/Hero.css'

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
                <h1>Invest in everything</h1>
                <p className='fs-5 mt-1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="signUp mt-3 p-2 btn fs-5">Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;