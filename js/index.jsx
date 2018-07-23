import React from "react";
import ReactDOM from "react-dom";

import Tetris from "./components/Tetris.jsx"

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render( <Tetris/>, document.getElementById("app") );
});