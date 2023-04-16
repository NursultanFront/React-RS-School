import { useEffect, useRef, useState } from 'react';
import { Product } from '../../components/form/form.interface';
import Form from '../../components/form/Form';
import FormCards from '../../components/form/FormCards';
import { useAppSelector } from '../../redux-hooks/redux-hooks';

interface State {
  count: number;
  products: Product[];
}

const FormsPage = () => {
  const { forms, productExist } = useAppSelector((state) => state.form);

  return (
    <>
      <Form></Form>
      <FormCards isExist={productExist} products={forms}></FormCards>
    </>
  );
};

export default FormsPage;
