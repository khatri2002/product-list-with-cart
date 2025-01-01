import { IconCarbonNeutral } from "../../assets/images";
import styles from "./CartSection.module.scss";

const CartSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.heroTitle}>Your Cart (7)</h2>
        <ul className={styles.itemsContainer}>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.title}>Classic Tiramisu</span>
              <div className={styles.bottomTextContainer}>
                <span className={styles.quantity}>1x</span>
                <span className={styles.priceSub}>@ &#36;5.50</span>
                <span className={styles.priceMain}>&#36;5.50</span>
              </div>
            </div>
            <button className={styles.cancelBtn}>
              <i className="fa-solid fa-x"></i>
            </button>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.title}>Classic Tiramisu</span>
              <div className={styles.bottomTextContainer}>
                <span className={styles.quantity}>1x</span>
                <span className={styles.priceSub}>@ &#36;5.50</span>
                <span className={styles.priceMain}>&#36;5.50</span>
              </div>
            </div>
            <button className={styles.cancelBtn}>
              <i className="fa-solid fa-x"></i>
            </button>
          </li>
        </ul>
        <div className={styles.orderContainer}>
          <span className={styles.field}>Order Total</span>
          <span className={styles.value}>&#36;46.50</span>
        </div>
        <div className={styles.badge}>
          <img src={IconCarbonNeutral} alt="icon-carbon-neutral" />
          <span className={styles.text}>
            This is a <span className={styles.active}>carbon-neutral</span>{" "}
            delivery
          </span>
        </div>
        <button type="button" className={styles.btn}>
          <span>Confirm Order</span>
        </button>
      </div>
    </div>
  );
};

export default CartSection;
