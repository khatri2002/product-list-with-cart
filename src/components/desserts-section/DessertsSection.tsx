import styles from "./DessertsSection.module.scss";
import classNames from "classnames";
import { IconAddToCart } from "../../assets/images";
import { items } from "../../data";
import { DessertsSectionProps } from "../../types";

const DessertsSection = ({ cart, handleSetCart }: DessertsSectionProps) => {
  const handleAddToCart = (name: string) => {
    handleSetCart([
      ...cart,
      {
        name,
        quantity: 1,
      },
    ]);
  };

  const IsItemInCart = (name: string) =>
    cart.some((item) => item.name === name);

  const itemQuantity = (name: string) => {
    const dessert = cart.find((item) => item.name === name);
    return dessert ? dessert.quantity : 0;
  };

  const incrementQuantity = (name: string) => {
    handleSetCart(
      cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decremenetQuantity = (name: string) => {
    handleSetCart(
      cart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

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
                  [styles.hide]: IsItemInCart(item.name),
                })}
                onClick={() => handleAddToCart(item.name)}
                type="button"
              >
                <img src={IconAddToCart} alt="icon-add-to-cart" />
                Add to Cart
              </button>
              <div
                className={classNames({
                  [styles.selected]: true,
                  [styles.show]: IsItemInCart(item.name),
                })}
              >
                <button
                  type="button"
                  onClick={() => decremenetQuantity(item.name)}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span>{itemQuantity(item.name)}</span>
                <button
                  type="button"
                  onClick={() => incrementQuantity(item.name)}
                >
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
