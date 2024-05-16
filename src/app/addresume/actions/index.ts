"use server"

import createSupabaseServerClient from "src/lib/supabase/server";

export async function createResume(
    data: {
        username: string,
        location: string,
        salary: string,
        gender: string,
        qualification: string,
        description: string,
    }
) {

    const supabase = await createSupabaseServerClient();

    const result = await supabase.from('addresume').insert(data).single();

    return JSON.stringify(result)
}



