import styles from './preloader.module.css';

function Preloader(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.circle}>
        <div className={styles.circle}>
          <div className={styles.circle}>
            <div className={styles.circle}>
              <div className={styles.circle}>
                <div className={styles.circle}>
                  <div className={styles.circle}>
                    <div className={styles.circle}>
                      <div className={styles.circle}>
                        <div className={styles.circle}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Preloader;
