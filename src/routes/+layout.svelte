<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />
<div class="h-screen w-screen">
	<slot />
</div>
