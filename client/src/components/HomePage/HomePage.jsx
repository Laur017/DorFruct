import MainImage from './HomePageImg.png'
import Ion from './ion.png'
import HomeProducts from '../HomeProducts/HomeProducts'
import Footer from '../Footer/Footer'

export default function HomePage() {
  return (
    <div className="homepage-main-div">
        <div className='homepage-div'>
            <img src={MainImage} className='homepage-img'/>
            <div className="homepage-green">
                <h1>FRESH FRUITS FROM MOLDOVA</h1>
                <h3>Taste the flavour of our fields</h3>
                <h3>Taste <a href='#'>DOR-FRUCT</a></h3>
            </div>
        </div>
        <div className="homepage-family">
            <div className="home-fam-left">
                <h1>A FAMILY LEGACY</h1>
                <p>
                DOR-FRUCT is the culmination of our family’s agricultural heritage. With a profound connection to the land, we embarked on our journey into fruit cultivation four years ago. What began as a labor of love has evolved into a thriving enterprise, driven by our unyielding commitment to taste and quality.
                <br /><br />
                Our story is one of passion, unity, and a relentless pursuit of delivering exceptional quality. Join us in savoring fruits that carry the legacy of our family’s dedication – a true celebration of nature’s finest.
                </p>
                <button> Read more ...</button>
            </div>
            <img src={Ion} />
        </div>
        <HomeProducts />
        <Footer />
    </div>
  )
}
