import { useEffect, useState } from 'react';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/search-bar/SearchBar';
import { api } from '../../api/index';
import { Character } from 'api/character/types';
import { Modal } from '../../components/modal/Modal';

const Home = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [oneCharacter, setOneCharacter] = useState<Character>();
  const [errorProduct, setErrorProduct] = useState<boolean>(false);
  const [loadingProduct, setLoadingProduct] = useState<boolean>(false);
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const getFromSearch = (value: Character[]) => {
    setCharacter(value);
  };

  const checkLocal = (value: Character[]) => {
    const char = localStorage.getItem('characters');
    const searchValue = localStorage.getItem('input-value') ?? '';
    if (searchValue.length == 0) {
      setCharacter(value);
      localStorage.removeItem('characters');
      return;
    }

    if (char) {
      const parse = JSON.parse(char);
      setCharacter(parse);
    }
  };

  const getOneChar = async (id: number) => {
    try {
      setModalError(false);
      setModalView(true);
      setModalLoading(true);
      const oneChar = await api.character.getOneCharacter(id);
      setOneCharacter(oneChar);
      setModalLoading(false);
    } catch (error) {
      setModalError(true);
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
      <Cards
        error={errorProduct}
        loading={loadingProduct}
        characters={character}
        getOneChar={getOneChar}
      ></Cards>
      <Modal error={modalError} loading={modalLoading} modal={modalView} showModal={setModalView}>
        <>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src={oneCharacter?.image} alt="char img" />
          </div>
          <h2>Name - {oneCharacter?.name}</h2>
          <div>Gender - {oneCharacter?.gender}</div>
          <div>Location - {oneCharacter?.location.name}</div>
          <div>Where the came from - {oneCharacter?.origin.name}</div>
          <div>Status - {oneCharacter?.status}</div>
        </>
      </Modal>
    </>
  );
};

export default Home;
