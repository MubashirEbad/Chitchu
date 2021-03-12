import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordField = (props) => {
  const {
    value,
    error,
    labelWidth = 70,
    label = "Password",
    placeholder = "Enter Password",
    setPassword,
    disabled = null,
  } = props;

  const [values, setValues] = React.useState({
    password: value,
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value.substr(0, 40) });

    setPassword(event.target.value.substr(0, 40));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-password" shrink>
        {label}
      </InputLabel>
      <OutlinedInput
        disabled={disabled}
        error={error}
        id="outlined-adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        placeholder={placeholder}
        notched
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={labelWidth}
      />
    </FormControl>
  );
};

export default PasswordField;
