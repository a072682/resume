import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import Index from "../pages/Index/Index";
import PortfolioDetail from "../pages/PortfolioDetail/PortfolioDetail";

const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <Index />,
            },
            {
                path: "Portfolio/:id_portfolio",
                element: <PortfolioDetail />,
            },

            
        ]
	}
])
export default router;