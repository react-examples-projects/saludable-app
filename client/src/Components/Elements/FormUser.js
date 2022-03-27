import { Text, Button, Input, useToasts } from "@geist-ui/core";
import { useMutation } from "react-query";
import { createUser } from "../../Helpers/api";
import React from "react";
import ErrorText from "./ErrorText";
import { getErrorValidation } from "../../Helpers/utils";

export default function FormUser({ toggleIsOpen }) {
  const createUserMutation = useMutation((user) => createUser(user));
  const { setToast } = useToasts();

  const onSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = await createUserMutation.mutateAsync(fd);

    if (data?.ok) {
      setToast({
        text: `El usuario ${fd.get("name")} se agrego correctamente.`,
        type: "success",
        delay: 1000,
      });
    } else {
      setToast({
        text: `Error al agregar el usuario.`,
        type: "error",
        delay: 1000,
      });
    }
  };

  return (
    <div className="mt-3 mb-5">
      <Text className="mb-2 mt-4" h4>
        Registrate
      </Text>

      <div className="center" data-aos="fade-up" data-aos-duration="900">
        <form style={{ width: "100%" }} onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="text-gray mb-1">
              Nombre
            </label>
            <Input
              width="100%"
              name="name"
              id="name"
              placeholder="Manuel gomez marines"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="text-gray mb-1">
              Edad
            </label>
            <Input
              width="100%"
              name="age"
              id="age"
              placeholder="35"
              htmlType="number"
              min={0}
              max={100}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="text-gray mb-1">
              Correo Electrónico
            </label>
            <Input
              width="100%"
              name="email"
              id="email"
              placeholder="manueal@hotmail.com"
              htmlType="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="whatsapp" className="text-gray mb-1">
              Whatsapp
            </label>
            <Input
              width="100%"
              name="whatsapp"
              id="whatsapp"
              placeholder="+443232334567"
              required
            />
          </div>

          <ErrorText
            text={getErrorValidation(createUserMutation)}
            isVisible={createUserMutation.isError}
          />
          <div>
            <Button
              type="success"
              className="mr-2"
              auto
              htmlType="submit"
              disabled={createUserMutation.isLoading}
            >
              Aceptar
            </Button>
            <Button
              type="error"
              onClick={toggleIsOpen}
              disabled={createUserMutation.isLoading}
              auto
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
