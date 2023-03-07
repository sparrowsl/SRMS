<script>
	import BreadCrumbs from "../../../../lib/components/shared/BreadCrumbs.svelte";
	import Button from "../../../../lib/components/shared/Button.svelte";
	import Input from "../../../../lib/components/shared/Input.svelte";
</script>

<BreadCrumbs>
	<span slot="title">Add New Class</span>
</BreadCrumbs>

<form action="" method="post" class="mx-auto max-w-xl mt-10">
	<fieldset class="grid gap-5">
		<div>
			<label for="">Class Name</label>
			<Input name="class_name" placeholder="Eg:- One" />
		</div>

		<div>
			<label for="">Section</label>
			<Input name="class_section" placeholder="Eg:- A" />
		</div>

		<Button classes="bg-gray-500 text-white text-sm px-6 py-2 rounded w-fit">Add Class</Button>
	</fieldset>
</form>
