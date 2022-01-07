// Courtesy:
// https://dev.to/danawoodman/svelte-quick-tip-using-actions-to-integrate-with-javascript-libraries-tippy-tooltips-2m94


// This module implements tooltips using tippy.js under the hood.
// The exported tooltip() function should be used as a Svelte "Action".

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // necessary else you see nothing.

export default function tooltip(node, params = {}) {
    const content = node.title;

    // Clear out the HTML title attribute since
    // we don't want the default behavior of it
    // showing up on hover.
    node.title = "";

    // Support any of the Tippy props by forwarding all "params":
    // https://atomiks.github.io/tippyjs/v6/all-props/
    const tip = tippy(node, {
        delay: 500,
        "content": content,
    });

    return {
        // If the props change, let's update the Tippy instance:
        update: (newParams) => tip.setProps({ content, ...newParams }),

        // Clean up the Tippy instance on unmount:
        destroy: () => tip.destroy(),
    };
};