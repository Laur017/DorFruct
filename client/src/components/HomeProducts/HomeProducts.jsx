import Cherries from './cirese.png'
import Apricots from './apricot.png'
import Peaches from './peach.png'
import Plums from './perje.png'
import Grapes from './poama.png'

export default function HomeProducts() {
  return (
    <div className="homeproduct-main">
        <h1>OUR PRODUCTS</h1>
        <div className="homepage-products">
            <div className="card-product">
                <img src={Cherries} />
                <h4>Cherries</h4>
            </div>
            <div className="card-product">
                <img src={Apricots} />
                <h4>Apricots</h4>
            </div>
            <div className="card-product">
                <img src={Peaches} />
                <h4>Peaches</h4>
            </div>
            <div className="card-product">
                <img src={Plums} />
                <h4>Plums</h4>
            </div>
            <div className="card-product">
                <img src={Grapes} />
                <h4>Grapes</h4>
            </div>
        </div>
    </div>
  )
}
