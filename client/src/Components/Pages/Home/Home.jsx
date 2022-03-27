import React from "react";
import { Image, Display, Text, Button, Table } from "@geist-ui/core";
import Vegetals from "../../../Assets/vegetals.jpg";
import useToggle from "../../Hooks/useToggle";
import styles from "./home.module.scss";
import FormUser from "../../Elements/FormUser";
import cls from "classnames"

export default function Home() {
  const [isOpen, toggleIsOpen] = useToggle();

  const data = [
    {
      name: "type",
      age: "Content type",
      email: "secondary | warning",
      whatsapp: "-",
    },
    {
      name: "Component",
      age: "DOM element to use",
      email: "string",
      whatsapp: "-",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
    {
      name: "bold",
      age: "Bold style",
      email: "boolean",
      whatsapp: "true",
    },
  ];

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
        <Button type="error"  disabled={isOpen}>
          No
        </Button>
      </div>

      {isOpen && (
        <>
          <FormUser toggleIsOpen={toggleIsOpen} />

          <div
            className={styles.tableUsers}
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <Table data={data} className="pr-1">
              <Table.Column prop="name" label="Nombre" />
              <Table.Column prop="age" label="Edad" />
              <Table.Column prop="email" label="Correo" />
              <Table.Column prop="whatsapp" label="Whatsapp" />
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
