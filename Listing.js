import React  from 'react'
import './App.css';



function Listing(props){
  let {items} = props;
 
  function getStr(input) {
    let str = input.slice(0,50);
    console.log("str : ",str,"len : ",str.length)
    if (str.length >= 50){
      str =str+'…';
    }
    return str;
  }
  function getQuant(quant) {
    const level = ["level-low","level-medium","level-high"];
    console.log("quant : ",quant);
    let level_index = 0;
    if (quant < 10){
      level_index = 0;
    } else if (quant < 20) {
      level_index = 1;
    } else {
      level_index = 2;
    }
    const lev = "item-quantity "+level[level_index];
    return ( <p class={lev} >{quant}</p>)
  }

  function getCurrSign(currstr,price) {
    if (currstr === undefined || price === undefined) {
      return "";
    }
    let result = "";
    if(currstr.includes("USD")) {
      result = "$"+price.toString();
    } else if (currstr.includes("EUR")) {
      result = "€"+price.toString();
    } else {
      result = price.toString()+" GBR"
    }
    return result;
  }

  let arr = items.map(el => 
    <div className="item" key={el.listing_id}>
      <div className="item-image">
        <a href={el.url}>
          <img src={el.src} alt="alt" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getStr(`${el.title}`)} </p>
        <p className="item-price">{getCurrSign(`${el.currency_code}`,el.price)}</p>
          {getQuant(el.quantity)}
      </div>
    </div>
    )
  return (
    <div className="item-list">
        {arr}
    </div>
      
  ) 
}

export default Listing;