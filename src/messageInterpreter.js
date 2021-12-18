import { rayLength } from "./cpts/toolbar/toolbarstore.js";

export function interpretMessage(topic, payload) {
    switch (topic) {
        case "raylength":
            console.log("XXXX setting store ray length to: ", payload);
            rayLength.set(payload);
            break;
        default:
            console.log(
                "XXXX interpretMessage(): topic: ",
                topic,
                " not recognized"
            );
    }
}
