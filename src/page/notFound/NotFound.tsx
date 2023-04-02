import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>404 error</h2>
      <div>
        There is nothing here go <Link to="/">away</Link>
      </div>
    </>
  );
};

export default NotFound;
