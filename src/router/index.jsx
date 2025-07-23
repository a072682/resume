import { createHashRouter } from "react-router-dom";
import Index from "../pages";
import FrontLayout from "../layouts/FrontLayout";

const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <Index />,
            },
        ]
	}
])
export default router;