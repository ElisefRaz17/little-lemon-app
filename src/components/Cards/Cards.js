import items from "./data";
import  "../../styles/cards.css";
import moped from "../../assets/moped.png";
function Card() {
  const cards = items.map((item) => (
    <div key={item.id} className="card">
      <img src={item.image} key={item.image} alt="food-item" className="card-image"/>
      <span className="card-details"><p className="card-title">{item.title}</p> <p className="card-price">${item.price}</p></span>
      <p className="card-description">{item.description}</p>
      <p style={{fontFamily: 'Karla-Bold', fontSize:'16px', padding:'20px'}}>Order a delivery<img src={moped} style={{width:'20px', height:'10.54px', paddingLeft:'5px'}} alt="moped icon"/></p>
    </div>
  ));
  return <> <div className='card-container grid-container'> {cards} </div> </>;
}

export default Card;
