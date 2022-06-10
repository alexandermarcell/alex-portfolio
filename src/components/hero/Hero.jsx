import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id='hero' 
    style={{ backgroundImage: `url('https://www.alexmarcell.com/static/media/hero-image.99c4528a9c3e01972c8b.jpg')`, width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', height: '55vh', linearGradient: 'rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.9)', border:'none !important' }}
    >
      <div className="hero__wrap">
        <h1 className="hero__text">
          Hi. I'm Alexander,
          A Web Developer.
        </h1>
      </div>
    </div>
  )
}

export default Hero