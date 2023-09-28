import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './ItemPage.module.scss';
import ItemComment from '../../components/ItemComment';
import { fetchItemById } from '../../redux/slices/pageItem';
import Skeleton from './Skeleton';
import EmptyComments from '../../components/Labels/EmptyComments';
import { setStateAndDataModalWindow } from '../../redux/slices/modalWindow';
import { RootState, useAppDispatch } from '../../redux/store';
import RejectedItems from '../../components/Labels/RejectedItems';

function ItemPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { item, status } = useSelector((state: RootState) => state.pageItem);

  React.useEffect(() => {
    if (typeof id === 'string') {
      dispatch(fetchItemById(id));
    }
  }, []);
  if (item === null) {
    return <Skeleton />;
  }
  return (
    <>
      {status.state === 'rejected' && <RejectedItems />}
      {status.state === 'pending' && <Skeleton />}
      {status.state === 'fulfilled' && (
        <div className={styles.root}>
          <div className={styles.frontBlock}>
            <img src={item['photo']} alt={item['name']} />
            <div className={styles.descriptionProduct}>
              <div className={styles.buttons}>
                <button>{item['seller']}</button>
                <button>{item['city']}</button>
              </div>
              <div className={styles.nameAndPrice}>
                <h3 className={styles.title}>{item['name']}</h3>
                <span>
                  Цена: {item['price']} ₽/{['Кг', 'Л', 'Шт'][item['type']]}
                </span>
              </div>
              <div>
                <span className={styles.rating}>
                  ⭐ {item['rating']}/5{' '}
                  <span>{item['comments'].length} отзывов</span>
                </span>
                <span className={styles.buyProduct}>
                  🛒 {item['purchases']}
                </span>
              </div>
              <p>{item['description']}</p>
              <div
                onClick={() => {
                  dispatch(
                    setStateAndDataModalWindow({
                      active: true,
                      modalData: item,
                    })
                  );
                }}
                className={styles.buttonBuy}
              >
                <span>Заказать</span>
              </div>
            </div>
          </div>
          <div className={styles.commentBlock}>
            <h2>Отзывы о товаре:</h2>
            <div className={styles.comments}>
              <div className={styles.SeeComments}>
                {item.comments.length !== 0 ? (
                  item['comments'].map((obj, index: number) => (
                    <ItemComment {...obj} key={index} />
                  ))
                ) : (
                  <EmptyComments />
                )}
              </div>
              <div className={styles.writeComment}>
                <textarea placeholder="Напишите свой комментарий" />
                <button>Отправить комментарий!</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemPage;
