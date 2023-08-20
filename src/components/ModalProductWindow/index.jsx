import React from 'react';

import styles from './ModalProductWindow.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setStateModalWindow } from '../../redux/slices/modalWindow';

function ModalProductWindow() {
  const dispatch = useDispatch();
  const [modalActive, modalData] = useSelector((state) => [
    state.modalWindow.active,
    state.modalWindow.modalData,
  ]);
  const [inputDiliveryAddress, setInputDiliveryAddress] = React.useState('');
  const [inputHowMutch, setInputHowMutch] = React.useState(0);
  const [inputDiliveryTime, setInputDiliveryTime] = React.useState('');

  const handleInputHowMutch = (e) => {
    try {
      const numericValue = Number(e.target.value);
      if (!isNaN(numericValue) && numericValue <= 1000) {
        setInputHowMutch(numericValue);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDiliveryTime = (e) => {
    if (e.target.value.split('-')[0] < 2100) {
      setInputDiliveryTime(e.target.value);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dispatch(setStateModalWindow(false));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={modalActive ? `${styles.root} ${styles.active}` : styles.root}
      onClick={() => dispatch(setStateModalWindow(false))}
    >
      <div
        className={
          modalActive
            ? `${styles.modal_content} ${styles.mc_active}`
            : styles.modal_content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton}>
          <svg
            onClick={() => {
              dispatch(setStateModalWindow(false));
            }}
            className={styles.closeSvg}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#e9e6e6"
              ></path>
            </g>
          </svg>
        </button>
        <div className={styles.description}>
          <img src={modalData.photo} />
          <div className={styles.descriptionHeader}>
            <span>{modalData.name}</span>
            <span>⭐ {modalData.ratingProduct}/5</span>
            <span>🛒 {modalData.buyProduct}</span>
          </div>
          <button>{modalData.sellerName}</button>
          <button>{modalData.sellerCity}</button>
        </div>
        <div className={styles.buyMenu}>
          <span>Заполните данные для заказа:</span>
          <input placeholder="Куда довезти" />
          <input
            placeholder="Сколько заказать "
            onChange={handleInputHowMutch}
            value={inputHowMutch}
          />
          <input
            placeholder="Во сколько привезти"
            type="date"
            value={inputDiliveryTime}
            onChange={handleDiliveryTime}
          />
          <button>Оформить</button>
        </div>
      </div>
    </div>
  );
}

export default ModalProductWindow;
