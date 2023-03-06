import { redirect } from "@sveltejs/kit";
import prisma from "../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	// await prisma.admin.create({
	// 	data: {
	// 		id: crypto.randomUUID(),
	// 		email: "john@gmail.com",
	// 		password: "password",
	// 	},
	// });
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const form = await request.formData();
		const email = form.get("email");
		const password = form.get("password");

		const admin = await prisma.admin.findFirst({
			where: {
				email,
				password,
			},
		});

		if (!admin) return { error: "Invalid Username and Password!" };

		cookies.set("session", admin.id, {
			path: "/",
			sameSite: "strict",
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
		});

		throw redirect(302, "/dashboard");
	},
};
