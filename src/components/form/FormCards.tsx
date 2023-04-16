interface Product {
  name: string | undefined;
  id: string | number | undefined;
  date: string | undefined;
  brand: string | undefined;
  color: string | undefined;
  img: string | undefined;
}

interface Props {
  isExist: boolean;
  products: Product[];
}

const FormCards = (props: Props) => {
  return (
    <>
      {!props.isExist && <h2 className="d-center">There is no cards</h2>}
      <ul className="cards-wrapper">
        {props.products &&
          props.products.map((item) => {
            return (
              <li className="card-item" key={item.id}>
                <img
                  className="card-img"
                  src={item.img}
                  alt="form cards"
                  width={295}
                  height={300}
                />
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-brand">{item.brand}</p>
                  <div className="card-info">
                    <div className="card-more-info">
                      <div>{item.color}</div>
                    </div>
                    <div className="card-more-info">
                      <div>{item.date}</div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FormCards;
