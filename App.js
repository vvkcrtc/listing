import './App.css';
import Listing from './Listing.js'

function App() {
  
  let jsonData = require('./data/etsy.json'); 

  function getImageSrc(image){
    if (image  != undefined )
    {
      return image.url_570xN;
    } else {
      return "";
    }

  };

  const items = jsonData.map((pos) => { return { 
    listing_id: pos.listing_id,
    url: pos.url,
    src: getImageSrc(pos.MainImage),
    title: pos.title,
    currency_code: pos.currency_code,
    price: pos.price,
    quantity: pos.quantity
   } 
  } 
  );
  
  return (
    <Listing items={items}/>
  ); 
}

export default App;
