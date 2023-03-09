<script>
	import { enhance } from "$app/forms";
	import dayjs from "dayjs";
	import BreadCrumbs from "../../../../lib/components/shared/BreadCrumbs.svelte";
	import Button from "../../../../lib/components/shared/Button.svelte";
	import Input from "../../../../lib/components/shared/Input.svelte";

	export let data;
	export let form;
</script>

<BreadCrumbs>
	<span slot="title">Edit Student: {data.student.name} - {data.student.roll} </span>
</BreadCrumbs>

<form action="" method="post" class="mx-auto max-w-xl mt-10" use:enhance>
	<fieldset class="grid gap-5">
		<Input type="hidden" name="id" value="{data.student.id}" />

		<div>
			<label for="">Student Name</label>
			<Input name="name" placeholder="John Doe" value="{data.student.name}" />
		</div>

		<div>
			<label for="">Student Emial</label>
			<Input type="email" name="email" placeholder="john@gmail.com" value="{data.student.email}" />
		</div>

		<div>
			<label for="">Date of Birth</label>
			<Input
				type="date"
				name="dateOfBirth"
				value="{dayjs(data.student.dateOfBirth).format('YYYY-MM-DD')}"
			/>
		</div>

		{#if form?.error}
			<small class="text-xs text-red-500">{form?.error}</small>
		{/if}

		<Button classes="bg-gray-500 text-white text-sm px-6 py-2 rounded w-fit">Update Student</Button>
	</fieldset>
</form>
