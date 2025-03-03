import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
