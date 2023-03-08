<script>
	import { enhance } from "$app/forms";
	import Icon from "@iconify/svelte";
	import BreadCrumbs from "../../../../lib/components/shared/BreadCrumbs.svelte";
	import Button from "../../../../lib/components/shared/Button.svelte";
	import Input from "../../../../lib/components/shared/Input.svelte";

	export let form;
	let generatedCode = "";

	const generateSubjectCode = async () => {
		const codeArray = crypto.randomUUID().split("-");
		generatedCode = codeArray[codeArray.length - 1].slice(0, 5);
	};
</script>

<BreadCrumbs>
	<span slot="title">Add Subject</span>
</BreadCrumbs>

<form action="" method="post" class="mx-auto max-w-xl mt-10" use:enhance>
	<fieldset class="grid gap-5">
		<div>
			<label for="">Subject Name</label>
			<Input name="subject_name" placeholder="Eg:- Java" />
		</div>

		<div>
			<label for="" class="flex items-center justify-between">
				Subject Code
				<Button on:click={generateSubjectCode} type="button">
					<Icon icon="fe:random" class="text-2xl text-gray-500" />
				</Button>
			</label>
			<Input name="subject_code" placeholder="Eg:- c2e161" bind:value={generatedCode} required={false} />
		</div>

		{#if form?.error}
			<small class="text-xs text-red-500">{form?.error}</small>
		{/if}

		<Button classes="bg-gray-500 text-white text-sm px-6 py-2 rounded w-fit">Add Subject</Button>
	</fieldset>
</form>
