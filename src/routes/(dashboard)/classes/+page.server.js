import prisma from "../../../lib/utils/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	const classes = await prisma.class.findMany();
	return { classes };
}
