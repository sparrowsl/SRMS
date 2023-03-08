import { redirect } from "@sveltejs/kit";
import prisma from "../../../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// await prisma.subject.deleteMany();

	// await prisma.subject.create({
	// 	data: {
	// 		id: crypto.randomUUID(),
	// 		subjectCode: crypto.randomUUID().split("-")[crypto.randomUUID().split("-").length - 1],
	// 		name: "Java",
	// 	},
	// });

	const subjects = await prisma.subject.findMany();

	return { subjects };
}

/** @type {import('./$types').Actions} */
export const actions = {
	deleteSubject: async ({ request }) => {
		const form = await request.formData();
		const id = form.get("id");

		const deleted = await prisma.subject
			.delete({
				where: {
					id,
				},
			})
			.catch((e) => null);

		throw redirect(302, "/subjects");
	},
};
