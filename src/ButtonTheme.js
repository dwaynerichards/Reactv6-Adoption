import {
  purple,
  teal,
  pink,
  red,
  indigo,
  deepPurple,
  lightBlue,
} from "@mui/material/colors";

const ButtonTheme = (props) => {
  return (
    <label htmlFor="theme">
      Button Theme
      <select
        id="theme"
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        <option></option>
        <option value={indigo[300]}>Indigo</option>
        <option value={deepPurple[300]}>Deep Purple</option>
        <option value={lightBlue[300]}>Light Blue</option>
        <option value={pink[300]}>Pink</option>
        <option value={red[300]}>Red</option>
        <option value={teal[300]}>Teal</option>
        <option value={purple[300]}>Purple</option>
      </select>
    </label>
  );
};

export default ButtonTheme;
