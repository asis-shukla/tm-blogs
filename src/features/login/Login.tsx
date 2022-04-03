import { Button } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import styles from "./Login.module.css";
import { generateOtpAsync } from "./loginSlice";

function Login() {
  // const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const handleOnChange = (e: any) => {
    setMobileNumber(e.target.value);
  };

  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    console.log("submit is called");
    dispatch(generateOtpAsync(Number(mobileNumber)));
  }

  return (
    <div className={styles.loginWrapper}>
     <h3> Login Using Mobile Number and OTP</h3>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
          onChange={handleOnChange}
          value={mobileNumber}
          type="text"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <Button type="submit" variant="contained">Genrate OTP</Button>
      </form>
    </div>
  );
}

export default Login;
