import { render } from "react-dom";
import 'dotenv/config'

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
