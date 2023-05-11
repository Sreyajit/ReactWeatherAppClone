import "./App.css";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./routes/app-routes";
const App = () => (
	<RecoilRoot>
		<div className="App">
			<AppRoutes />
		</div>
	</RecoilRoot>
);

export default App;
