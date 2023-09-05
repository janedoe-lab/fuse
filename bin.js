#!/usr/bin/env node

import { configure, unconfigure, isConfigured } from "./";
const cmd = process.argv[2];

if (cmd === "configure") {
    configure(onerror);
} else if (cmd === "unconfigure") {
    unconfigure(onerror);
} else if (cmd === "is-configured") {
    isConfigured(function (err, bool) {
        if (err) return onerror(err);
        console.log("" + bool);
        process.exit(bool ? 0 : 1);
    });
}

function onerror(err) {
    if (err) throw err;
}
