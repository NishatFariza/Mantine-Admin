import { Button, Container, NumberInput, Paper, TextInput } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { NavbarNested } from "../components/Navbar";
import TextTest from "../components/Text";
import { useForm } from "@mantine/form";
import styles from "../styles/Home.module.css";

export default function Home() {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    <div className="max-w-lg mx-auto shadow-xl px-16 py-10 mt-16">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps("age")}
        />
        <Button color="gray" type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </div>
  );
}
