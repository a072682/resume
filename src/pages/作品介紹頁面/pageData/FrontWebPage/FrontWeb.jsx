
import { useEffect, useState } from 'react'
import { Tab, Nav, Dropdown } from 'react-bootstrap';//宣告元件
import './_FrontWeb.scss';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../../../components/common/Context';
import { useSelector } from 'react-redux';


function FrontWeb() {

    const [frontWebTab, setFrontWebTab] = useState('前端架構');//預設開啟的頁面

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 取得框架資料
        const frameData = useSelector((state)=>{
            return(
                state.data.data
            )
        })
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handlefrontWebTabData(userData);
        },[frameData])
    //#endregion

    //#region 儲存顯示資料狀態宣告
        const[frontWebTabData,setFrontWebTabData]=useState(null);
        useEffect(()=>{
            console.log("看看結果",frontWebTabData);
        },[frontWebTabData]);
    //#endregion

    //#region 處理顯示資料函式
        const handlefrontWebTabData = (input) => {
            // const results = null;

            if(!input){
                console.log("來源資料為空");
                return;
            }

            input.navItem.map((navItem) => {
                if (navItem.title === "作品集") {
                    navItem.portfolio.map((itemIn) => {
                        if (itemIn.title === id_portfolio) {
                            itemIn.framework.map((workData)=>{
                                if(workData.frameName === frameData){
                                    workData.detail.map((detailItem)=>{
                                        if(detailItem.key === "前端介紹"){
                                            setFrontWebTabData(detailItem.pageDetailData.tabData);
                                            // results = detailItem.pageDetailData.tabData;
                                        }
                                    })
                                }
                            })
                        }
                    });
                }
            });

            // return results;
        };
    //#endregion

    //#region 手機板tab選項狀態宣告
        const [selectedValue, setSelectedValue] = useState("前端架構");
        const [show, setShow] = useState(false);
        useEffect(()=>{},[show])
    //#endregion

    return (
        <>
            <div className="FrontWeb">
                <div className="FrontWeb-tabs">
                    <Tab.Container activeKey={frontWebTab} onSelect={(key) => setFrontWebTab(key)}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-3">
                                    {/* Tab 桌面板選單區 */}
                                    <Nav className='tab-box d-none d-sm-flex'>
                                        {
                                            frontWebTabData?.map((item)=>{
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
                                    {/* Tab 桌面板選單區 */}

                                    {/* Tab 手機板選單區 */}
                                    <Nav className='FrontWeb-tab-sm-box d-flex d-sm-none'>

                                        <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>

                                            <Dropdown.Toggle as="div" onClick={() => {setShow(!show);}}> 
                                                <span className='title-dropdown' >
                                                    {selectedValue}
                                                    <span className="material-symbols-outlined">
                                                        keyboard_arrow_down
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="triple-dropdown-menu">
                                                <div className="menu-column main-menu">
                                                    {
                                                        frontWebTabData?.map((item)=>{
                                                            return(
                                                                <Nav.Item key={item.key} className='menu-btn'>
                                                                    <Nav.Link   className={`
                                                                                            tab-link
                                                                                            ${item.disabled ? 'is-disabled' : ''}
                                                                                            `} 
                                                                                aria-disabled={item.disabled} 
                                                                                eventKey={item.key}
                                                                                onClick={() => {setShow(!show);}}
                                                                    >
                                                                        {item.title}
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav>
                                    {/* Tab 手機板選單區 */}
                                </div>
                                
                                <div className="col-12 col-sm-9 mt-24 mt-sm-0">
                                    {/* Tab 內容區 */}
                                    <Tab.Content className='h-100 p-0'>
                                        {
                                            frontWebTabData?.map((item)=>{
                                                return(
                                                    
                                                    <Tab.Pane key={item.key} eventKey={item.key}>
                                                        {item.frontWebPageData}
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

export default FrontWeb

