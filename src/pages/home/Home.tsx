import { useState } from "react";
import CartSection from "../../components/cart-section/CartSection";
import DessertsSection from "../../components/desserts-section/DessertsSection";
import styles from "./Home.module.scss";
import { Cart } from "../../types";

const Home = () => {
  const [cart, setCart] = useState<Cart>([]);

  const handleSetCart = (cartData: Cart) => {
    setCart(cartData);
  };

  return (
    <main className={styles.main}>
      <DessertsSection cart={cart} handleSetCart={handleSetCart} />
      <CartSection cart={cart} handleSetCart={handleSetCart} />
    </main>
  );
};

export default Home;
