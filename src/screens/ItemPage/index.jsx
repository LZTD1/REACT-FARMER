import React from 'react';

import styles from './ItemPage.module.scss';
import ItemComment from '../../components/ItemComment';

function ItemPage() {
  return (
    <div className={styles.root}>
      <div className={styles.frontBlock}>
        <img
          src={
            'http://om-saratov.ru/files/pages/21296/1424331903general_pages_19_February_2015_i21296_deputaty_gordumy_prizvali.jpg'
          }
          alt={'photo'}
        />
        <div className={styles.descriptionProduct}>
          <div>
            <button>Зеленый сад</button>
            <button>г. Краснодар</button>
          </div>
          <h3 className={styles.title}>Огурцы</h3>
          <div>
            <span className={styles.rating}>
              ⭐ 3/5 <span>9 отзывов</span>
            </span>
            <span className={styles.buyProduct}>🛒 123123</span>
          </div>
          <p>
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
            SomeTextAboutProduct SomeTextAboutProduct SomeTextAboutProduct
          </p>
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
            <textarea placeholder='Напишите свой комментарий'/>
            <button>Отправить комментарий!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
