import { writable } from 'svelte/store';
import Example from './Example.svelte'

export const sideBarComponent = writable(Example)
