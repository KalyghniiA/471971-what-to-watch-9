import styles from './server-failed.module.css';

function ServerFailed(): JSX.Element {
  return (
    <div className={styles.div}>
      <h1 className={styles.header}>Server Failed</h1>
      <p className={styles.paragraph}>Please, try again</p>
    </div>
  );
}

export default ServerFailed;
