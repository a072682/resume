

import { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';//宣告元件
import './_DemoPage.scss';
import UserSide from './UserSide/UserSide';
import ManagerSide from './ManagerSide/ManagerSide';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../../../components/common/Context';



function DemoPage() {

    //#region 
    //#endregion

    const [demoPageTab, setDemoPageTab] = useState('使用者端');//預設開啟的頁面

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleDemoTabData(userData);
        },[userData])
    //#endregion

    //#region 儲存顯示資料狀態宣告
        const[demoTabData,setDemoTabData]=useState(null);
        useEffect(()=>{},[demoTabData]);
    //#endregion

    //#region 處理顯示資料函式
        const handleDemoTabData = (input) => {
            // const results = null;

            if(!input){
                console.log("來源資料為空");
                return;
            }

            input.navItem.map((navItem) => {
                if (navItem.title === "作品集") {
                    navItem.portfolio.map((itemIn) => {
                        if (itemIn.title === id_portfolio) {
                            itemIn.detail.map((detailItem)=>{
                                if(detailItem.key === "Demo"){
                                    setDemoTabData(detailItem.pageDetailData.tabData);
                                    // results = detailItem.pageDetailData.tabData;
                                }
                            })
                        }
                    });
                }
            });

            // return results;
        };
    //#endregion


  return (
    <>
        <div className="DemoPage">
            <div className="DemoPage-tabs">
                <Tab.Container activeKey={demoPageTab} onSelect={(key) => setDemoPageTab(key)}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Tab 選單區 */}
                                <Nav className='tab-box'>
                                    {
                                        demoTabData?.map((item)=>{
                                            return(
                                                
                                                <Nav.Item key={item.key} className='tab-item'>
                                                    <Nav.Link   className={`
                                                                            tab-link
                                                                            ${item.disabled ? 'is-disabled' : ''}
                                                                            `} 
                                                                aria-disabled={item.disabled} 
                                                                eventKey={item.key}>
                                                        {item.title}
                                                    </Nav.Link>
                                                </Nav.Item>
                                                
                                            )
                                        })
                                    }
                                </Nav>
                                {/* Tab 選單區 */}
                            </div>
                            
                            <div className="col-12">
                                {/* Tab 內容區 */}
                                <Tab.Content className='h-100 p-0'>
                                    {
                                        demoTabData?.map((item)=>{
                                            return(
                                                
                                                <Tab.Pane key={item.key} eventKey={item.key}>
                                                    {item.DemoPage}
                                                </Tab.Pane>
                                                
                                            )
                                        })
                                    }
                                </Tab.Content>
                                {/* Tab 內容區 */}
                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>
    </>
  )
}

export default DemoPage

