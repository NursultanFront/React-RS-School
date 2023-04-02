import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/search-bar/SearchBar';
import { products } from '../../data/cards';

const Home = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <Cards products={products}></Cards>
    </>
  );
};

export default Home;
