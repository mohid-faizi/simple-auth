"use client";

import { FormEvent, useActionState, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { login } from "@/action/login";

export default function Form() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);

    const targetedFields = e.currentTarget;

    const formData = new FormData(targetedFields);

    const result = await login(formData);

    if (!result?.success) {
      setError(result?.error as string);
    }

    setIsPending(false);
  };
  return (
    <>
      <Card className="max-w-[500px] mx-auto my-4">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter the right credentials to signin to your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <>
              <div className="bg-red-100 border border-red-400 text-red-500 rounded-md py-2 px-3 mb-4">
                {error}
              </div>
            </>
          )}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" required />
            </div>
            <Button type="submit" size={"lg"} disabled={isPending}>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
