import { useEffect, useState } from 'react';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/search-bar/SearchBar';
import { Modal } from '../../components/modal/Modal';
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks';
import { setSearchChar } from '../../store/character/character';
import { setOneChar } from '../../store/modal/modal';

const Home = () => {
  const [modalView, setModalView] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { data, error, loading, search } = useAppSelector((state) => state.char);
  const { modalError, modalLoading, oneChar } = useAppSelector((state) => state.modal);

  const getOneChar = async (id: number) => {
    setModalView(true);
    dispatch(setOneChar(id));
  };

  useEffect(() => {
    dispatch(setSearchChar());
  }, [dispatch]);

  return (
    <>
      <SearchBar search={search}></SearchBar>
      <Cards error={error} loading={loading} characters={data} getOneChar={getOneChar}></Cards>
      <Modal error={modalError} loading={modalLoading} modal={modalView} showModal={setModalView}>
        <>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src={oneChar?.image} alt="char img" />
          </div>
          <h2>Name - {oneChar?.name}</h2>
          <div>Gender - {oneChar?.gender}</div>
          <div>Location - {oneChar?.location.name}</div>
          <div>Where the came from - {oneChar?.origin.name}</div>
          <div>Status - {oneChar?.status}</div>
        </>
      </Modal>
    </>
  );
};

export default Home;
