import "./styles/globalstyles.scss";
import "./styles/90s.scss";
import "./styles/funk.scss";
import "./styles/professional.scss";
import { AppContext, AppProvider } from "./Components/Context/index";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/index";

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
