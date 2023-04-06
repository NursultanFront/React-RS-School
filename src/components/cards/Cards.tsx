import { Character } from 'api/character/types';

import './cards.css';

interface Props {
  products: Character[];
  error: boolean;
  loading: boolean;
}

const Cards = (props: Props) => {
  if (props.error) {
    return <p>Error</p>;
  }

  if (props.loading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <ul className="cards-wrapper">
        {props.products.length > 0 &&
          props.products.map((item) => {
            return (
              <li key={item.id} className="card-item">
                <img
                  className="card-img"
                  src={item.image}
                  alt="image for cards"
                  width={295}
                  height={300}
                />
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Cards;
