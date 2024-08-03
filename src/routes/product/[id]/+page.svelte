<script lang="ts">
import { page } from '$app/stores';
import ProductCard from '$lib/ProductCard.svelte';
import CartItems from .....

let id = $page.params.id
let product:Product|undefined = $state(undefined)

fetch('https://dummyjson.com/products/'+id)
.then(res => res.json())
.then(res => product = res);

let selectedProduct = null;

function selectProduct() {
    cartItems = { title: product.title, price: product.price } ;
  }

</script>

<div class="container mt-2">
	This will show you the whole product info...<br>
	<a href="/" class="btn btn-primary">Home</a>
	{#if product}
		<ProductCard {product} />
	{:else}
	Loading...
	{/if}
</div>


<button on:click={selectProduct}>Select Product</button>

