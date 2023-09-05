<script lang='ts'>

import { onMount } from "svelte";

onMount(async () =>{
	await fetch('https://github.com/users/tonyx92/contributions?from=2023-09-01&to=2023-09-05');
})

</script>