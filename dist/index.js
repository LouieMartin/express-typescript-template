"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloRoute_1 = __importDefault(require("./routes/HelloRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(HelloRoute_1.default);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
