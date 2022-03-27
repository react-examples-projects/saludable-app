import React, { useEffect, useState } from "react";
import { Image, Display, Text, Button } from "@geist-ui/core";
import Vegetals from "../../../Assets/vegetals.jpg";
import useToggle from "../../Hooks/useToggle";
import styles from "./home.module.scss";
import FormUser from "../../Elements/FormUser";
import cls from "classnames";
import TableUsers from "../../Elements/TableUsers";
import { getUsers } from "../../../Helpers/api";
import { useQuery } from "react-query";

export default function Home() {
  const [isOpen, toggleIsOpen] = useToggle();
  const { isLoading, isError, data } = useQuery("users", getUsers, {
    enabled: isOpen,
  });
  const [users, setUsers] = useState(data || []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

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
          <FormUser toggleIsOpen={toggleIsOpen} setUsers={setUsers} />

          <TableUsers {...{ isLoading, isError, users, setUsers }} />
        </>
      )}
    </div>
  );
}
