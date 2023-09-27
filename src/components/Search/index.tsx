import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import ProductInSearch from '../Blocks/ProductInSearch';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchItems,
  resetItems,
  setItems,
} from '../../redux/slices/searchItems';

function Search(): JSX.Element {
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.searchItems);
  const [searchWords, setSearchWords] = React.useState('');

  const inputRef = React.useRef<HTMLInputElement>(null);
  const productsRef = React.useRef<HTMLInputElement>(null);
  const searchRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleClickOnScreen = (e: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node) &&
        status === 'fulfilled'
      ) {
        setSearchWords('');
        dispatch(resetItems());
      }

      if (
        productsRef.current &&
        productsRef.current.contains(e.target as Node)
      ) {
        setSearchWords('');
        dispatch(resetItems());
      }
    };

    document.addEventListener('click', handleClickOnScreen);

    return () => {
      document.removeEventListener('click', handleClickOnScreen);
    };
  }, []);

  const debouncedOnChangeInput = React.useCallback(
    debounce((value : string) => {
      if (value.trim() !== '') {
        dispatch(fetchItems(value));
      } else {
        dispatch(setItems([]));
      }
    }, 250),
    []
  );

  const onClickClear = () => {
    setSearchWords('');
    dispatch(resetItems());
    inputRef.current.focus();
  };

  const onChangeInput = (event :) => {
    const newValue = event.target.value;
    setSearchWords(newValue); // необходим для подконтрольного инпута
    debouncedOnChangeInput(newValue);
  };

  return (
    <div className={styles.root} ref={searchRef}>
      <input
        ref={inputRef}
        value={searchWords}
        onChange={onChangeInput}
        placeholder="Найди свой продукт..."
      />
      <svg
        className={styles.loupSvg}
        width={100}
        version="1.1"
        viewBox="0 0 50 50"
        enableBackground="new 0 0 50 50"
        fill="#e9e6e6"
        stroke="#e9e6e6"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#e9e6e6"
            d="M20.745,32.62c2.883,0,5.606-1.022,7.773-2.881L39.052,40.3c0.195,0.196,0.452,0.294,0.708,0.294 c0.255,0,0.511-0.097,0.706-0.292c0.391-0.39,0.392-1.023,0.002-1.414L29.925,28.319c3.947-4.714,3.717-11.773-0.705-16.205 c-2.264-2.27-5.274-3.52-8.476-3.52s-6.212,1.25-8.476,3.52c-4.671,4.683-4.671,12.304,0,16.987 C14.533,31.37,17.543,32.62,20.745,32.62z M13.685,13.526c1.886-1.891,4.393-2.932,7.06-2.932s5.174,1.041,7.06,2.932 c3.895,3.905,3.895,10.258,0,14.163c-1.886,1.891-4.393,2.932-7.06,2.932s-5.174-1.041-7.06-2.932 C9.791,23.784,9.791,17.431,13.685,13.526z"
          ></path>{' '}
        </g>
      </svg>
      {searchWords && (
        <svg
          onClick={() => {
            onClickClear();
          }}
          className={styles.clearSvg}
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
      )}
      {status === 'fulfilled' && (
        <div className={styles.searchedItems} ref={productsRef}>
          {items.map((obj : any, index : number) => (
            <ProductInSearch key={index} {...obj} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
