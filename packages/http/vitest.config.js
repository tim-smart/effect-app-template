"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="vitest" />
const path_1 = __importDefault(require("path"));
const vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    test: {
        include: ["./test/**/*.test.ts"],
        globals: true,
    },
    resolve: {
        alias: {
            "@app/core/test": path_1.default.join(__dirname, "test"),
            "@app/core": path_1.default.join(__dirname, "src"),
        },
    },
});
