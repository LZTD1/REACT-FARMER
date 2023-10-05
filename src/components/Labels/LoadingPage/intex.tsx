import React from 'react';

import styles from './LoadingPage.module.scss';

function LoadingPage(): JSX.Element {
  return (
    <div id="wrapper">
      <div className={styles.profile_main_loader}>
        <div className={styles.loader}>
          <svg className={styles.circular_loader} viewBox="25 25 50 50">
            <circle
              className={styles.loader_path}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#70c542"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
