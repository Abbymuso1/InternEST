"use server"

import createSupabaseServerClient from "src/lib/supabase/server";

export async function signupWithEmailandPassword(
    data: {
        fullName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }
) {

    const supabase = await createSupabaseServerClient();

    const result = await supabase.auth.signUp({ email: data.email, password: data.password });

    return JSON.stringify(result)
}

export async function signinWithEmailandPassword(
    data: {
        email: string;
        password: string;
    }
) {

    const supabase = await createSupabaseServerClient();

    const result = await supabase.auth.signInWithPassword({ email: data.email, password: data.password })

    return JSON.stringify(result)
}

export async function changePassword(
    data: {
        email: string;
    }
) {

    const supabase = await createSupabaseServerClient();

    const result = await supabase.auth.resetPasswordForEmail(data.email)

    return JSON.stringify(result)
}