import React from "react";
import { Image, Display, Text, Button } from "@geist-ui/core";
import Vegetals from "../../../Assets/vegetals.jpg";
import useToggle from "../../Hooks/useToggle";
import styles from "./home.module.scss";
import FormUser from "../../Elements/FormUser";
import cls from "classnames";
import TableUsers from "../../Elements/TableUsers";

export default function Home() {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <div
      className="container mt-5 mb-5"
      style={{ maxWidth: "650px" }}
      data-aos="zoom-out-up"
    >
      <Display caption={<Text h4>¿Te gustaría tener una vida saludable?</Text>}>
        <Image width="380px" src={Vegetals} />
      </Display>

      <div className={cls("mt-3 center", styles.buttons)}>
        <Button
          type="success"
          className="mr-2"
          onClick={toggleIsOpen}
          disabled={isOpen}
        >
          Sí
        </Button>
        <Button type="error" disabled={isOpen}>
          No
        </Button>
      </div>

      {isOpen && (
        <>
          <FormUser toggleIsOpen={toggleIsOpen} />

          <TableUsers />
        </>
      )}
    </div>
  );
}
