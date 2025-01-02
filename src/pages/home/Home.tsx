import { useState } from "react";
import CartSection from "../../components/cart-section/CartSection";
import DessertsSection from "../../components/desserts-section/DessertsSection";
import styles from "./Home.module.scss";
import { Cart } from "../../types";
import Modal from "../../components/modal/Modal";

const Home = () => {
  const [cart, setCart] = useState<Cart>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleSetCart = (cartData: Cart) => setCart(cartData);
  const handleSetOpenModal = (val: boolean) => setOpenModal(val);

  return (
    <main className={styles.main}>
      <DessertsSection cart={cart} handleSetCart={handleSetCart} />
      <CartSection
        cart={cart}
        handleSetCart={handleSetCart}
        handleSetOpenModal={handleSetOpenModal}
      />
      <Modal
        cart={cart}
        open={openModal}
        handleSetOpenModal={handleSetOpenModal}
        handleSetCart={handleSetCart}
      />
    </main>
  );
};

export default Home;
