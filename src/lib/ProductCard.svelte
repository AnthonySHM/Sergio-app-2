<script lang="ts">
let { product }:{
	product:Product
} = $props();
</script>

<div class="col mb-2">
	<div class="card" style="width: 18rem;">
	<img src="{product.thumbnail}" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">{product.title}</h5>
		<p class="card-text">{product.description}</p>
		<a href="/product/{product.id}" class="btn btn-primary">View</a>
	</div>
	</div>
</div>

