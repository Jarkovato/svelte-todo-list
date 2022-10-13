<script>
  // @ts-ignore
  import { Router, Route } from "svelte-routing";
  import IconButton from "@smui/icon-button";

  import ToDoList from "./lib/ToDoList/ToDoList.svelte";
  import History from "./lib/History/History.svelte";
  import Drawer from "./lib/Drawer/Drawer.svelte";

  let isDarwerOpened = false;

  const toggleDrawer = () => {
    isDarwerOpened = !isDarwerOpened;
  };
</script>

<Router>
  <main class="main">
    <Drawer open={isDarwerOpened} />
    <div class="container">
      <header class="header">
        <IconButton
          class="material-icons"
          :bind:class="icon"
          on:click={toggleDrawer}
        >
          menu
        </IconButton>
      </header>
      <div class="pages">
        <Route path="/">
          <ToDoList />
        </Route>

        <Route path="/history">
          <History />
        </Route>
      </div>
    </div>
  </main>
</Router>

<style>
  .header {
    flex-grow: 1;
  }
</style>
