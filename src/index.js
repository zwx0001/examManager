import dva from "dva";
import "./common/reset.css";
import "./index.css";
import createLoading from "dva-loading";
import { createBrowserHistory as createHistory } from "history";
import loading from "./model/loading";

const app = dva({
  history: createHistory()
});

app.use(createLoading());
app.model(loading);
app.router(require("./router").default);

app.start("#root");
