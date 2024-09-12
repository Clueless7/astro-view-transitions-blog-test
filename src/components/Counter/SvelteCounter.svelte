<script>
  let count = 0
</script>

<div class="container">
  <p>Svelte Counter</p>

  <p>{count}</p>

  <button on:click={() => count++}>+1</button>
</div>

<style>
  .container {
    border: 1px solid black;
    padding: 1rem;
    max-width: max-content;
  }
</style>
