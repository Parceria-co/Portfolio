
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";

const Router = import.meta.env.MODE === "production" ? HashRouter : BrowserRouter; 

import Home from "@/pages/Home.tsx";

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

                {/* <Route 
                    path="/not-found"
                    element={ <NotFound /> }
                />

                <Route 
                    path="*" 
                    element={ <Navigate to="/not-found" replace /> }
                /> */}

            </Routes>
        </Router>    
    );
}

export default App;

//https://www.youtube.com/watch?v=FrZNOo9tXiQ&list=RDFrZNOo9tXiQ&start_radio=1
//https://www.youtube.com/watch?v=ZZvDZJEZSVA&list=RD5v07zsVouDA&index=5