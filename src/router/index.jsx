import { createHashRouter } from "react-router-dom";
import Index from "../pages";
import FrontLayout from "../layouts/FrontLayout";
import Portfolio02 from "../components/common/Portfolio02";

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
                element: <Portfolio02 />,
            },
        ]
	}
])
export default router;