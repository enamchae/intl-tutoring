import type {RequestHandler} from "@sveltejs/kit";

import {db} from "$lib/server/db";
import * as table from '$lib/server/db/schema';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify({courses: await db.select().from(table.course)}), {
        status: 200,
    });
};

export const POST: RequestHandler = async ({request}) => {
    const {name, description} = await request.json();
    await db.insert(table.course).values({name, description});
    return new Response(JSON.stringify({courses: await db.select().from(table.course)}), {
        status: 200,
    });
};