import React from "react";
import {createRoot} from "react-dom/client";
import App from "./app";
// react 버전 18버전부터
// react -dom/client 에서 createRoot 사용하라고 권장함

const root = createRoot(document.querySelector("#root"));
root.render(<App/>);