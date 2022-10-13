<script>
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Checkbox from "@smui/checkbox";
  import List, { Item, Meta, Label } from "@smui/list";
  import IconButton from "@smui/icon-button";
  import { history, updateHistory } from "../../store/store";

  let task = "";

  let dirty = false;

  let tasks = ["Planing"];
  let selected = [];

  $: countMessage = `There is ${tasks.length} tasks today.`;

  const change = () => {
    tasks = tasks.concat(task);
    task = "";
  };

  const addToDone = (task) => {
    tasks = tasks.filter((item) => item != task);
    updateHistory(task, "completed");
  };

  const remove = (task) => {
    tasks = tasks.filter((item) => item != task);
    updateHistory(task, "removed");
  };

  let historyLogs;

  history.subscribe((value) => {
    historyLogs = value;
  });
</script>

<section class="wrapper">
  <h2>Tasks</h2>

  <Textfield
    type="text"
    label="To do"
    bind:dirty
    updateInvalid
    bind:value={task}
    style="width: 600px;"
    on:change={change}
  >
    <Icon class="material-icons" slot="trailingIcon">add</Icon>
  </Textfield>

  {#if tasks.length}
    <h3>{countMessage}</h3>

    <div class="list">
      <List checkList>
        {#each tasks as task, i (i)}
          <Item>
            <Label>{task}</Label>
            <Meta>
              <Checkbox bind:group={selected} bind:value={task} />
            </Meta>

            {#if selected.includes(task)}
              <IconButton
                class="material-icons"
                on:click={() => addToDone(task)}
              >
                check
              </IconButton>
              <IconButton
                class="material-icons bg-secondary"
                on:click={() => remove(task)}
              >
                delete
              </IconButton>
            {/if}
          </Item>
        {/each}
      </List>
    </div>
  {:else}
    <p>No tasks today! Enjoy!</p>
  {/if}

  {#each historyLogs as log, i (i)}
    <p>{log.task}, {log.status}</p>
  {/each}
</section>

<style>
  .wrapper {
    text-align: center;
    width: 100%;
  }

  .list {
    margin: 0 auto;
    width: 600px;
  }
</style>
