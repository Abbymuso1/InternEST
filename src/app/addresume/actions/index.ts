"use server"

import createSupabaseServerClient from "src/lib/supabase/server";

export async function createResume(
    data: {
        userName: string;
        jobType: string,
        
        email: string;
        password: string;
        confirmPassword: string;
    }
) {

    const supabase = await createSupabaseServerClient();

    const result = await supabase

    return JSON.stringify(result)
}



