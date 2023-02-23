import styles from "./Header.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>GitHubFinder</h1>
      <div className={styles.rightContent}>
        <h4 className={styles.btn}>D A R K</h4>
        <WbSunnyIcon />
      </div>
    </header>
  );
}

export default Header;