import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Fragment>
      <h1>Pricing Cart</h1>
      <NavLink to="/pricing" />
    </Fragment>
  );
}
