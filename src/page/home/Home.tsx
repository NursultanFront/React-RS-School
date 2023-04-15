import { useEffect, useState } from 'react';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/search-bar/SearchBar';
import { api } from '../../api/index';
import { Character } from 'api/character/types';
import { Modal } from '../../components/modal/Modal';
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks';
import { getChar } from '../../store/character/character';

const Home = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [oneCharacter, setOneCharacter] = useState<Character>();
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.char);

  const getFromSearch = (value: Character[]) => {
    setCharacter(value);
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
    const getProducts = async () => {
      try {
        dispatch(getChar());
        console.log(data);
      } catch (error) {}
    };

    getProducts();
  }, [data, dispatch]);

  return (
    <>
      <SearchBar getChar={getFromSearch}></SearchBar>
      <Cards error={error} loading={loading} characters={data} getOneChar={getOneChar}></Cards>
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
