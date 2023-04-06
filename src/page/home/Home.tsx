import { useEffect, useState } from 'react';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/search-bar/SearchBar';
import { api } from '../../api/index';
import { Character } from 'api/character/types';

const Home = () => {
  const [products, setProduct] = useState<Character[]>([]);
  const [errorProduct, setErrorProduct] = useState<boolean>(false);
  const [loadingProduct, setLoadingProduct] = useState<boolean>(false);

  const getFromSearch = (value: Character[]) => {
    setProduct(value);
  };

  const checkLocal = (value: Character[]) => {
    const char = localStorage.getItem('characters');
    if (char) {
      const parse = JSON.parse(char);
      if (parse.length > 0) {
        console.log('works');
        setProduct(parse);
        return;
      }
    }
    setProduct(value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        setErrorProduct(false);
        setLoadingProduct(true);
        const { results } = await api.character.list();
        setLoadingProduct(false);
        checkLocal(results);
      } catch (error) {
        setErrorProduct(true);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <SearchBar
        setError={setErrorProduct}
        setLoading={setLoadingProduct}
        getChar={getFromSearch}
      ></SearchBar>
      <Cards error={errorProduct} loading={loadingProduct} products={products}></Cards>
    </>
  );
};

export default Home;
