import styles from "../styles/popUpSucesso.module.css";

function PopUpSucesso({ mensagem }) {
  return (
    <div className={styles.popUpSucesso}>
      <div className={styles.popUpInfo}>
        <div className={styles.popUpContent}>
          <p className={styles.popUp_p}>{mensagem}</p>
          <i className={`fa-solid fa-circle-check ${styles.iconSuccess}`}></i>
        </div>
      </div>
    </div>
  );
}

export default PopUpSucesso;
