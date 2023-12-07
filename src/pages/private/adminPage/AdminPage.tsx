import { Button, TextField } from "@mui/material";
import { useState } from "react";

import classes from "./adminPage.module.scss";

function AdminPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
  };
  return (
    <div className={classes.containerParent}>
      <div className={classes.formBlock}>
        <form
          className={classes.root}
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <TextField
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
