import { useEffect, useRef, useState } from 'react';
import Form from '../../components/form/Form';
import FormCards from '../../components/form/FormCards';

interface Product {
  name: string | undefined;
  id: string | number | undefined;
  date: string | undefined;
  brand: string | undefined;
  color: string | undefined;
  img: string | undefined;
}

interface State {
  count: number;
  products: Product[];
}

const FormsPage = () => {
  const [count, setCount] = useState<State['count']>(0);
  const [products, setProducts] = useState<State['products']>([]);

  const countRef = useRef<State['count']>(0);
  const productRef = useRef<State['products']>([]);

  const getFromLocal = () => {
    const card = localStorage.getItem('cards');
    if (typeof card === 'string') {
      const parse = JSON.parse(card);
      setProducts(parse);
      productRef.current = parse;
    }

    const countCards = Number(localStorage.getItem('countCards'));
    setCount(countCards);
    countRef.current = countCards;
  };

  const getProducts = (value: Product, count: number) => {
    setCount((prevState) => prevState + count);
    setProducts((prevState) => [...prevState, value]);
    countRef.current = count;
    productRef.current = [...productRef.current, value];
  };

  const setLocal = () => {
    localStorage.setItem('cards', JSON.stringify(productRef.current));
    localStorage.setItem('countCards', JSON.stringify(countRef.current));
  };

  useEffect(() => {
    getFromLocal();

    return () => {
      setLocal();
    };
  }, []);

  return (
    <>
      <Form getProducts={getProducts} count={count}></Form>
      <FormCards count={count} products={products}></FormCards>
    </>
  );
};

export default FormsPage;
