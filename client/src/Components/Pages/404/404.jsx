import React from "react";
import useBody from "../../Hooks/useBody";
import css from "./NotFound.module.scss";

export default function NotFound() {
  useBody({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  });

  return (
    <div className={css.container}>
      <h1>Not Found</h1>
    </div>
  );
}
