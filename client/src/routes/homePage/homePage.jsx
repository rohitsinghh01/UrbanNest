import SearchBar from '../../components/searchBar/searchBar.jsx';
import './homePage.scss';

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>
            Search Real Estate & Discover Your Perfect Place
          </h1>
          <p>
            UrbanNest is your premier
            destination for discovering urban living at its finest. Whether
            you're seeking a chic downtown apartment, a stylish city loft, or a
            modern suburban home, UrbanNest offers an extensive range of
            meticulously curated properties to suit every lifestyle. Explore our
            listings, find your dream urban sanctuary, and experience the
            convenience and vibrancy of city life with UrbanNest.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1 className='boxColor'>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1 className='boxColor'>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1 className='boxColor'>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
}

export default HomePage;
