import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen bg-slate-200 flex justify-center items-center">
      <Link href="/login">
        <Button
          variant="gradient"
          gradient={{ from: "blue", to: "lime", deg: 105 }}
          type="submit"
          mt="sm"
        >
          Go to login page
        </Button>
      </Link>
    </div>
  );
}
