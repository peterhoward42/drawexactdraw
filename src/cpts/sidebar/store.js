import { writable } from 'svelte/store';

export const customAngle = writable(42.0)

// This should be a list of the Svelte components that you want to
// be displayed in the side bar - in order.
export const sideBarComponents = writable([]);
