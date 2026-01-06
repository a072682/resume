import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";

import 經歷 from "../pages/經歷/經歷";
import 作品集 from "../pages/作品集/作品集";
import 技能 from "../pages/技能/技能";
import 作品介紹頁面 from "../pages/作品介紹頁面/作品介紹頁面";


const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <經歷 />,
            },
            {
                path: "經歷",
                element: <經歷 />,
            },
            {
                path: "作品集",
                element: <作品集 />,
            },
            {
                path: "技能",
                element: <技能 />,
            },
            {
                path: "作品介紹頁面/:id_portfolio",
                element: <作品介紹頁面 />,
            },

            
        ]
	}
])
export default router;