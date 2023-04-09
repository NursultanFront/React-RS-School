import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import './modal.css';

interface Props {
  error: boolean;
  loading: boolean;
  modal: boolean;
  showModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  modal,
  showModal,
  children,
  error,
  loading,
}) => {
  if (error) {
    return <h3 style={{ textAlign: 'center', color: 'red' }}>Error</h3>;
  }

  if (loading) {
    return <h3 style={{ textAlign: 'center' }}>Loading...</h3>;
  }
  return (
    <div className={modal ? 'modal open' : 'modal'} onClick={() => showModal(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div onClick={() => showModal(false)} className="close">
          X
        </div>
        {children}
      </div>
    </div>
  );
};
