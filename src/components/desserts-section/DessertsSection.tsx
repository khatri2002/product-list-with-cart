import styles from "./DessertsSection.module.scss";
import classNames from "classnames";
import { IconAddToCart } from "../../assets/images";
import { items } from "../../data/data";

const DessertsSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroTitle}>Desserts</h1>
      <div className={styles.dessertsContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img
                className={styles.desktop}
                src={item.image.desktop}
                alt={item.name}
              />
              <img
                className={styles.tablet}
                src={item.image.tablet}
                alt={item.name}
              />
              <img
                className={styles.mobile}
                src={item.image.mobile}
                alt={item.name}
              />
              <button
                className={classNames({
                  [styles.addToCartBtn]: true,
                  [styles.hide]: false,
                })}
                type="button"
              >
                <img src={IconAddToCart} alt="icon-add-to-cart" />
                Add to Cart
              </button>
              <div
                className={classNames({
                  [styles.selected]: true,
                  [styles.show]: false,
                })}
              >
                <button>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span>3</span>
                <button>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div className={styles.footer}>
              <span className={styles.category}>{item.category}</span>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>&#36;{item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsSection;
