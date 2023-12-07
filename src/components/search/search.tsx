import { searchIcon } from "../../assets/header/header";
import { propsTypes } from "../../utils/types/search";

import styles from "./search.module.scss";

function Search({ widthStyle, placeholder, positionRight }: propsTypes) {
  return (
    <div style={{ right: positionRight }} className={styles.searchBlock}>
      <input placeholder={placeholder} style={{ width: widthStyle }} type="text" />
      <button>
        <img src={searchIcon} alt="searchIcon" />
      </button>
    </div>
  );
}

export default Search;
