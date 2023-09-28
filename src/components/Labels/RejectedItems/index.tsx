import styles from './RejectedItems.module.scss';

const RejectedItems = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <h1>🛠</h1>
      <span className={styles.text}>Ошибка получения данных!</span>
      <br />
      <span className={styles.description}>
        Видимо, произошел какой-то сбой на сервере.
        <br /> Мы уже трудимся над его устранением.
      </span>
    </div>
  );
};

export default RejectedItems;
