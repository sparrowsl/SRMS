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
		const name = form.get("subject_name");
		const subjectCode = form.get("subject_code");

		const newClass = await prisma.subject
			.create({
				data: {
					id: crypto.randomUUID(),
					subjectCode,
					name,
				},
			})
			.catch((e) => false);

		if (!newClass) return { error: "Subject already exists!!" };

		throw redirect(302, "/subjects");
	},
};
