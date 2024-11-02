import styles from "./page.module.css";
import Header from "./organisms/header/Header";
import MainSection from "./organisms/mainsection/MainSection";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.topLevelContainer}>
      <Header />
      <MainSection />
      <footer>
      </footer>
    </div>
  );
}
