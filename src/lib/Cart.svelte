<script Lang="ts">
export let cartItems = [];
<script>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
 <ul>
  {#each cartItems as item}
    <li>{item.title} - {item.price}</li>
  {/each}
</ul>

</div>


