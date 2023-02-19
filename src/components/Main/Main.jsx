import styles from "./Main.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import BusinessIcon from "@mui/icons-material/Business";
import GitHubIcon from "@mui/icons-material/GitHub";

function Main({ image, name, nickName, joined, repos, following, followers }) {

  return (
    <main className={styles.main}>
      <div className={styles.leftContent}>
        <div className={styles.avatar}>
          {image ? (
            <img src={`${image}`} alt="userIcon" className={styles.userIcon} />
          ) : (
            <GitHubIcon className={styles.gitHubIcon} />
          )}
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.mainTopContent}>
          <div className={styles.userBlock}>
            <h3 className={styles.name}>{name}</h3>
            {
              nickName ? <p className={styles.nickName}>{`${"@"}${nickName}`}</p> : ""
            }
          </div>
          <div className={styles.rightContentDate}>
            <p className={styles.joined}> Joined</p>
            <p className={styles.date}>
              {
                joined ? joined.substring(0, 10) : ""
              }
              </p>
          </div>
        </div>
        <div className={styles.mainBottomContent}>
          <h3 className={styles.mainBottomContentTitle}>React Developer</h3>
          <div className={styles.follow}>
            <div className={styles.rep}>
              <h5 className={styles.followTitle}>Repositories</h5>
              <p className={styles.repNum}>{repos}</p>
            </div>
            <div className={styles.fol1}>
              <h5 className={styles.followTitle}>Following</h5>
              <p className={styles.repNum}>{following}</p>
            </div>
            <div className={styles.fol2}>
              <h5 className={styles.followTitle}>Followers</h5>
              <p className={styles.repNum}>{followers}</p>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialItem}>
              <LocationOnIcon className={styles.socialIcon} />
              <p className={styles.socialTitle}>Not Available</p>
            </div>
            <div className={styles.socialItem}>
              <TwitterIcon className={styles.socialIcon} />
              <p className={styles.socialTitle}>Not Available</p>
            </div>
            <div className={styles.socialItem}>
              <TelegramIcon className={styles.socialIcon} />
              <p className={styles.socialTitle}>Not Available</p>
            </div>
            <div className={styles.socialItem}>
              <BusinessIcon className={styles.socialIcon} />
              <p className={styles.socialTitle}>Not Available</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
