import './App.css';
import Listing from './Listing.js'

function App() {
  
  let jsonData = require('./data/etsy.json'); 

  const items = jsonData.map((pos) => { return { 
    listing_id: pos.listing_id,
    url: pos.url,
    src: pos.MainImage,
 //   src : pos.MainImage.listing_image_id,
    title: pos.title,
    currency_code: pos.currency_code,
    price: pos.price,
    quantity: pos.quantity
   } 
  } 
  );

 //console.log("!!!",jsonData[1].MainImage.listing_image_id, jsonData[1].MainImage.url_570xN);
  
  return (
    <Listing items={items}/>
  ); 
}

export default App;
