import { Button } from "@/components/common";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="text-2xl font-semibold text-prussian-blue">Log In</div>
      <div className="my-4">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-link underline">
          Sign Up
        </Link>
      </div>

      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forget-pass" className="text-sm text-link underline">
                Forgot Password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          className="mt-6"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
