<script lang="ts">
  import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";

  import List, { Item, Text } from "@smui/list";

  export let open;
  let active = "Main";

  function setActive(value) {
    active = value;
  }
</script>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Navigation</Title>
    </Header>
    <Content>
      <List>
        <Item
          href="/"
          on:click={() => setActive("Main")}
          activated={active === "Main"}
        >
          <Text>Main</Text>
        </Item>
        <Item
          href="/history"
          on:click={() => setActive("History")}
          activated={active === "History"}
        >
          <Text>History</Text>
        </Item>
      </List>
    </Content>
  </Drawer>
</div>

<style>
  .drawer-container {
    position: absolute;
    left: 0;
    top: 50px;
    height: 100vh;
    max-width: 150px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
</style>
