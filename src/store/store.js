import { writable } from 'svelte/store';
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"

// export const history = writable([]);
export const history = persist(writable([]), createLocalStorage(), 'history')

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