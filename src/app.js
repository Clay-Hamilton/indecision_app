//imported files run before app.js:
import { proposalPlugins } from "@babel/preset-env/data/shipped-proposals";
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));