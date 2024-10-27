"use server";

import { LoginSchema } from "@/schema/auth-schema";

export async function login(formData: FormData){
  const result = LoginSchema.safeParse(Object.fromEntries(formData));

  if(!result.success){
    return {success: false, error: result.error.errors[0].message};
  }

  
}