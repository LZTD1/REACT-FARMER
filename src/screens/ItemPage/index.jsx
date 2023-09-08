import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ItemPage.module.scss';
import ItemComment from '../../components/ItemComment';
import { fetchItemById } from '../../redux/slices/pageItem';
import Skeleton from './Skeleton';
import RejectedItems from '../../components/Labels/RejectedItems';

function ItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.pageItem);

  React.useEffect(() => {
    dispatch(fetchItemById(id));
  }, []);

  console.log(items);

  return (
    <>
      {status.state === 'rejected' && <RejectedItems />}
      {status.state === 'pending' && <Skeleton />}
      {status.state === 'fulfilled' && (
        <div className={styles.root}>
          <div className={styles.frontBlock}>
            <img
              src={
                'http://om-saratov.ru/files/pages/21296/1424331903general_pages_19_February_2015_i21296_deputaty_gordumy_prizvali.jpg'
              }
              alt={'photo'}
            />
            <div className={styles.descriptionProduct}>
              <div className={styles.buttons}>
                <button>{items['seller']}</button>
                <button>{items['city']}</button>
              </div>
              <div className={styles.nameAndPrice}>
                <h3 className={styles.title}>{items['name']}</h3>
                <span>
                  Цена: {items['price']} ₽/{['Кг', 'Л', 'Шт'][items['type']]}
                </span>
              </div>
              <div>
                <span className={styles.rating}>
                  ⭐ {items['rating']}/5{' '}
                  <span>{items['comments'].length} отзывов</span>
                </span>
                <span className={styles.buyProduct}>
                  🛒 {items['purchases']}
                </span>
              </div>
              <p>{items['description']}</p>
            </div>
          </div>
          <div className={styles.commentBlock}>
            <h2>Отзывы о товаре:</h2>
            <div className={styles.comments}>
              <div className={styles.SeeComments}>
                <ItemComment />
                <ItemComment />
                <ItemComment />
                <ItemComment />
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
