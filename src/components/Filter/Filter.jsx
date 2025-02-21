import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
}
