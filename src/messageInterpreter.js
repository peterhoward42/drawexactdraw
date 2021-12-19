import { initialRayLength } from "./cpts/toolbar/toolbarstore.js";

export function interpretMessage(topic, payload) {
    switch (topic) {
        case "raylength":
            initialRayLength.set(payload);
            break;
    }
}
