// Courtesy:
// https://dev.to/danawoodman/svelte-quick-tip-using-actions-to-integrate-with-javascript-libraries-tippy-tooltips-2m94


// This module implements tooltips using tippy.js under the hood, and is
// designed so that it works as a Svelte Action.

// We've cut down danawoodman's solution a bit to make it less general, but
// simpler.
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // necessary else you see nothing.

export default function tooltip(node, params = {}) {
    const content = node.title;

    // We use the node's title as the tool tip, so we must defeat the default
    // behavior of the title showing up on hover.
    node.title = "";

    const tip = tippy(node, {
        delay: 500,
        "content": content,
    });

    // The returned object satisfies Svelte's "Action" contract.
    return {
        // If the props change, let's update the Tippy instance:
        update: (newParams) => tip.setProps({ content, ...newParams }),

        // Clean up the Tippy instance on unmount:
        destroy: () => tip.destroy(),
    };
};