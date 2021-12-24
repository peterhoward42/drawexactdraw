import { writable } from 'svelte/store';

// The current custom angle - in string form
export const CustomAngle = writable("")

// This should be a list of the Svelte components that you want to
// be displayed in the side bar - in order.
export const sideBarComponents = writable([]);
