import { Outlet } from "react-router-dom";
import 首頁 from "../pages/首頁/首頁";


function FrontLayout(){
    return(
        <>         
            <首頁 />
            <Outlet />          
        </>
    )
}
export default FrontLayout;