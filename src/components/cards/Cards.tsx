import type { IProduct } from 'data/cards';
import './cards.css';

interface Props {
  products: IProduct[];
}

const Cards = (props: Props) => {
  return (
    <ul className="cards-wrapper">
      {props.products.map((item) => {
        return (
          <li key={item.id} className="card-item">
            <img
              className="card-img"
              src={item.images}
              alt="image for cards"
              width={295}
              height={300}
            />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-brand">{item.brand}</p>
              <p className="card-descr">{item.descr}</p>
              <div className="card-info">
                <div className="card-more-info">
                  <img src={item.likeIcon} width={24} height={24} alt="Likes" />
                  <div>{item.likes}</div>
                </div>
                <div className="card-more-info">
                  <img src={item.eyeIcon} width={24} height={24} alt="views" />
                  <div>{item.views}</div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Cards;
