const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      minLength: 3,
      maxLength: 200,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El e-mail es obligatorio"],
      maxLength: 100,
      unique: true,
      trim: true,
    },
    age: {
      type: Number,
      minLength: 1,
      maxLength: 100,
      required: [true, "La contraseña es obligatoria"],
    },
    whatsapp: {
      type: String,
      required: [true, "El whatsapp es obligatorio"],
      minLength: 1,
      maxLength: 50,
    },
  },
  { timestamps: true, collection: "users" }
);

module.exports = model("User", UserSchema);
