import styles from "../styles/popUpSucesso.module.css";

function PopUpSucesso({ mensagem }) {
  return (
    <div className={styles.popUpSucesso}>
      <div className={styles.popUpInfo}>
        <p className={styles.popUp_p}>{mensagem}</p>
      </div>
    </div>
  );
}

export default PopUpSucesso;
