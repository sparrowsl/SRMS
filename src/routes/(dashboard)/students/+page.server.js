import { redirect } from "@sveltejs/kit";
import prisma from "../../../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	await prisma.student.deleteMany();

	await prisma.student.create({
		data: {
			id: crypto.randomUUID(),
			name: "John Doe",
			roll: `SRMS${crypto.randomUUID().split("-")[1]}`.toUpperCase(),
			email: "johndoe@gmail.com",
			gender: "Male",
			dateOfBirth: new Date(),
		},
	});

	const students = await prisma.student.findMany();
	return { students };
}

/** @type {import('./$types').Actions} */
export const actions = {
	deleteStudent: async ({ request }) => {
		const form = await request.formData();
		const id = form.get("id");

		const deleted = await prisma.student
			.delete({
				where: {
					id,
				},
			})
			.catch((e) => false);

		throw redirect(302, "/students");
	},
};
