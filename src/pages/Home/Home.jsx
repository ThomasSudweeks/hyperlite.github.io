import './Home.css'
import './components/ShadowBox'
import ShadowBox from './components/ShadowBox'
import HomeSlogan from './components/HomeSlogan'

function Home() {
  const handleButtonClick = () => {
    window.open('http://hyperlyte.tech', '_self');
  }

  return (
    <div>
      <div className='home-bg' />
      <ShadowBox className='home-logo-container'>
        <div className='home-masked-image' />
      </ShadowBox>
      <HomeSlogan className='home-slogan'>
        cool slogan 'bout innovation. and stuff.
      </HomeSlogan>
      <button 
      className='home-hyperlyte-button'
      onClick={handleButtonClick}>
        HyperLyte.tech
      </button>
    </div>
  );
}

export default Home