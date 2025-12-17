
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// const Router = import.meta.env.MODE === "production" ? HashRouter : BrowserRouter; 

import Home from "@/pages/Home/Home";
import Service from "./pages/Service/Service";
import Differential from "./pages/Differential/Differential";
import Contact from "./pages/Contact/Contact";
import NextSteps from "./pages/NextSteps/NextSteps";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path=""
                    element={ <Navigate to="home" replace/> }
                />
				<Route 
					path="home"
					element={ <Home /> }
				/>

                <Route 
					path="servicos"
					element={ <Service /> }
				/>

                <Route 
					path="diferenciais"
					element={ <Differential /> }
				/>
                
                <Route 
					path="contatos"
					element={ <Contact /> }
				/>

                <Route 
					path="proximos-passos"
					element={ <NextSteps /> }
				/>

                {/* <Route 
                    path="/not-found"
                    element={ <NotFound /> }
                />*/}

                <Route 
                    path="*" 
                    // element={ <Navigate to="/not-found" replace /> }
                    element={ <Navigate to="/home" replace /> }
                /> 

            </Routes>
        </Router>    
    );
}

export default App;

//https://www.youtube.com/watch?v=FrZNOo9tXiQ&list=RDFrZNOo9tXiQ&start_radio=1
//https://www.youtube.com/watch?v=ZZvDZJEZSVA&list=RD5v07zsVouDA&index=5