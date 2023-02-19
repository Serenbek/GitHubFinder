import styles from "./SearchBlock.module.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import Main from "../Main/Main";

function SearchBlock() {
  const [exportData, setExportData] = useState([]);

  const [data, setData] = useState({
    name: "",
  });

  const changeFile = (e) => {
    setData({
      name: e.target.value,
    });
  };

  const getAllData = async () => {
    const response = await fetch(
      `${"https://api.github.com/users/"}${data.name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const list = await response.json();

    if (list) {
      setExportData(list);
    }

    if (response.status === 200) {
      toast.success("Request sent successfully");
    } else if (response.status === 404) {
      toast.error("User is not found");
    } else {
      toast.error("Error");
    }
  };
  console.log(exportData);

  return (
    <>
      <div className={styles.searchBlockMain}>
        <div className={styles.leftContent}>
          <SearchIcon className={styles.searchIcon} />
          <TextField
            id="outlined-multiline-flexible"
            placeholder="Enter GitHub username"
            multiline
            size="small"
            maxRows={3}
            className={styles.input}
            onChange={changeFile}
          />
        </div>
        <div className={styles.rightContent}>
          <Button onClick={getAllData} variant="contained">
            Search
          </Button>
        </div>
      </div>
      <Main
        key={exportData.id}
        image={exportData.avatar_url}
        name={exportData.name}
        nickName={exportData.login}
        joined={exportData.created_at}
        repos={exportData.public_repos}
        following={exportData.following}
        followers={exportData.followers}
      />
    </>
  );
}

export default SearchBlock;
