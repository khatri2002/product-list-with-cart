import CartSection from "../../components/cart-section/CartSection";
import DessertsSection from "../../components/desserts-section/DessertsSection";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <DessertsSection />
      <CartSection />
    </main>
  );
};

export default Home;
