import { writable } from 'svelte/store';

export const history = writable([]);

export const updateHistory = (task, status) => {
  history.update((value) => {
    const result = value.concat({
      task,
      status,
    });
    return result;
  });
}

export const count = writable(0);