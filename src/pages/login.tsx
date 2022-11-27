import { Button, Paper, PasswordInput, Space, TextInput } from "@mantine/core";
import React from "react";
import { z as zod } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { json } from "stream/consumers";

const loginformSchema = zod.object({name: zod
        .string()
        .min(2, { message: "Name should have at least 2 letters" }),
      email: zod.string().email({ message: "Invalid email" }),
      password: zod.string().min(6).max(12)
    });

const login = () => {
  const form = useForm({
    validate: zodResolver(loginformSchema),
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = (values: any) => {
     console.log(values);
  }

  return (
    <div className=" h-screen bg-slate-200 ">
      <div className="max-w-lg mx-auto py-20">
        <Paper p={"lg"} radius={"md"}>
          <pre>{ JSON.stringify(form.values, null, 2)}</pre>
          <pre>{ JSON.stringify(form.errors, null, 2)}</pre>
          <form onSubmit={form.onSubmit(handleSubmitForm)}>
            <TextInput
              label="Name"
              placeholder="Name"
              required
              {...form.getInputProps("name")}
            />
            <Space h={"sm"} />
            <TextInput
              required
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
            />
            <Space h={"sm"} />
            <PasswordInput
              placeholder="******"
              label="Password"
              withAsterisk
              {...form.getInputProps("password")}
            />
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
