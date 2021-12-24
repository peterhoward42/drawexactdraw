import { writable } from 'svelte/store';

// The angle to initialise the custom angle input control with - float.
export const initialCustomAngle = writable(0)

// This should be a list of the Svelte components that you want to
// be displayed in the side bar - in order.
export const sideBarComponents = writable([]);
