import { Button, Paper, PasswordInput, Space, TextInput } from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";

const login = () => {
  const form = useForm({
    initialValues: {
      email: "test@test.com",
      password: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {},
  });
  return (
    <div className=" h-screen bg-slate-200 ">
      <div className="max-w-lg mx-auto py-20">
        <Paper p={"lg"} radius={"md"}>
          <form onSubmit={form.onSubmit(console.log)}>
            <TextInput label="Name" placeholder="Name" required />
            <Space h={"sm"} />
            <TextInput
              required
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
            />
            <Space h={"sm"} />
            <PasswordInput placeholder="******" label="Password" withAsterisk />
            <Space h={"sm"} />
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              type="submit"
              mt="sm"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default login;
