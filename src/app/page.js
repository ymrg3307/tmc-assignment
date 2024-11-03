import styles from "./page.module.css";
import Header from "./organisms/header/Header";
import MainSection from "./organisms/mainsection/MainSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./organisms/footer/Footer";

export default function Home() {
  return (
    <div className={styles.topLevelContainer}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
