<script>
  import { history } from "../../store/store";
</script>

<div class="history">
  <h2>History</h2>

  {#each $history as log, i (i)}
    <p>{log.task}, {log.status}</p>
  {/each}
</div>

<style>
  .history {
    text-align: center;
  }
</style>
