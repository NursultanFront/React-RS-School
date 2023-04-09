import { Character } from 'api/character/types';

import './cards.css';

interface Props {
  characters: Character[];
  error?: boolean;
  loading?: boolean;
  getOneChar: (id: number) => void;
}

const Cards = (props: Props) => {
  if (props.error) {
    return <h3 style={{ textAlign: 'center', color: 'red' }}>Error</h3>;
  }

  if (props.loading) {
    return <h3 style={{ textAlign: 'center' }}>Loading...</h3>;
  }

  const setChar = (id: number) => {
    props.getOneChar(id);
  };

  return (
    <>
      <ul className="cards-wrapper">
        {props.characters.length > 0 &&
          props.characters.map((item) => {
            return (
              <li key={item.id} className="card-item" onClick={() => setChar(item.id)}>
                <img
                  className="card-img"
                  src={item.image}
                  alt="character-image"
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
