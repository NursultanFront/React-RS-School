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
    const searchValue = localStorage.getItem('input-value') ?? '';
    if (searchValue.length == 0) {
      setProduct(value);
      localStorage.removeItem('characters');
      return;
    }

    if (char) {
      const parse = JSON.parse(char);
      setProduct(parse);
    }
  };

  useEffect(() => {
    const value = localStorage.getItem('input-value') ?? '';
    const getProducts = async () => {
      try {
        setErrorProduct(false);
        setLoadingProduct(true);
        const { results } = await api.character.searchName(value);
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
