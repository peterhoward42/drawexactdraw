import { writable } from 'svelte/store';

// The current custom angle.
export const CustomAngle = writable(0)

// This should be a list of the Svelte components that you want to
// be displayed in the side bar - in order.
export const sideBarComponents = writable([]);
