<script lang="ts">
  import ProductCard from "$lib/ProductCard.svelte";
  let products:Product[] = $state([])

  fetch('https://dummyjson.com/products')
  .then(res => res.json() as Promise<Response>)
  .then(json => products = json.products);

</script>
<div class="container mt-2">
	<div class="row">

		{#each products as product}
			<ProductCard {product} />
		{:else}
			<div class="col">
				Nothing found.
			</div>
		{/each}
	</div>
</div>
