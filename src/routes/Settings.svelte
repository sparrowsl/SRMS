<script>
  import {location, querystring} from 'svelte-spa-router';
</script>

<p>The current page is: {$location}</p>
{#if $querystring}
  <p>The querystring is: {$querystring}</p>
{:else}
  <p>No Query string available</p>
{/if}

<style></style>
