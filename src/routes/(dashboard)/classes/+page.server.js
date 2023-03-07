import { redirect } from "@sveltejs/kit";
import prisma from "../../../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	const classes = await prisma.class.findMany();
	return { classes };
}

/** @type {import('./$types').Actions} */
export const actions = {
	deleteClass: async ({ request }) => {
		const form = await request.formData();
		const id = form.get("id");

		const deleted = await prisma.class
			.delete({
				where: {
					id,
				},
			})
			.catch((e) => null);

		throw redirect(302, "/classes");
	},
};
