<script>
	export let type = 'button';
	export let classes = '';
	export let disabled = false;
</script>

<button on:click {type} {disabled} class="{classes} block"> <slot /> </button>
