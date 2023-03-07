import { redirect } from "@sveltejs/kit";
import prisma from "../../../../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	// await prisma.class.deleteMany();
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const name = form.get("class_name");
		const section = form.get("class_section");

		let newClass = null;
		try {
			newClass = await prisma.class.create({
				data: {
					id: crypto.randomUUID(),
					name,
					section,
				},
			});
		} catch (e) {
			return { error: "Class already exists!!" };
		}

		if (newClass) throw redirect(302, "/dashboard");
	},
};
