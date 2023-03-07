import { redirect } from "@sveltejs/kit";
import prisma from "../../../../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const id = url.searchParams.get("id");

	const editClass = await prisma.class.findUnique({
		where: {
			id,
		},
	});

	// TODO: Throw error if Id is not found...

	return {
		editClass,
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const id = form.get("id");
		const name = form.get("class_name");
		const section = form.get("class_section");

		const updated = await prisma.class
			.update({
				data: {
					name,
					section,
				},
				where: {
					id,
				},
			})
			.catch((e) => null);

		if (!updated) return { error: "Name already exists, cannot update!!" };

		throw redirect(302, "/classes");
	},
};
