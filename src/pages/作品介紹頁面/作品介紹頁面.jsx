import { useEffect, useState } from 'react'
import { Tab, Nav, Dropdown } from 'react-bootstrap';//宣告元件
import './_PortfolioDetail.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserData } from '../../components/common/Context';





function 作品介紹頁面 () {

    //#region 
    //#endregion

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{
            console.log("取得的id:",id_portfolio);
        },[id_portfolio]);
    //#endregion

    //#region 傳送網頁前置宣告
        const navigate = useNavigate();
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
    //#endregion

    //#region 桌面版相關函式
        
        //#region 作品資料狀態宣告
            const[portfolioDetail,setPortfolioDetail]=useState(null);
            useEffect(()=>{
                console.log("作品資料內容:",portfolioDetail);
            },[portfolioDetail]);
        //#endregion

        //#region 過濾出單一作品資料函式
            const handlePortfolioDetailData = (input) => {
                const results = [];

                if(!input){
                    console.log("來源資料為空");
                    return;
                }

                input.navItem.map((item) => {
                    if (item.title === "作品集") {
                        item.portfolio.map((itemIn) => {
                            if (itemIn.title === id_portfolio) {
                                results.push(itemIn);
                            }
                        });
                    }
                });

                return results;
            };
        //#endregion

        //#region tab相關函式

            //#region tab控制狀態宣告
                const [portfolioDetailTab, setPortfolioDetailTab] = useState('作品整體架構');//預設開啟的頁面
                useEffect(()=>{
                    if(portfolioDetailTab === "返回目錄"){
                        navigate("/");
                    }
                },[portfolioDetailTab])
            //#endregion

            //#region 宣告tabListData狀態
                const [tabListData,setTabListData] = useState([]);
                useEffect(()=>{},[tabListData]);
            //#endregion

            //#region 宣告處理tabData資料函式
                const handleTabData = (input)=>{
                    let tabListData = [];

                    input?.map((item) => {
                        item.detail.map((itemIn)=>{
                            tabListData.push(itemIn);
                        })
                    });
                    
                    return tabListData;
                };
            //#endregion

        //#endregion

        //#region 處理顯示資料
            useEffect(()=>{
                console.log("全部資料:",userData);
                const user = handlePortfolioDetailData(userData);
                setPortfolioDetail(user);
                const listData = handleTabData(user);
                setTabListData(listData);
            },[userData]);
        //#endregion

    //#endregion

    //#region 手機版相關函式

        //#region 手機板tab選項狀態宣告

            //#region Dropdown元件顯示內容狀態
            const [selectedValue, setSelectedValue] = useState("作品整體架構");
            //#endregion

            //#region 控制Dropdown元件是否下拉
            const [show, setShow] = useState(false);
            //#endregion

            useEffect(()=>{},[show])
        //#endregion

    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <section className="portfolioDetail">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* 桌面板標題區塊 */}
                            <div className='portfolio-title-box d-none d-sm-block'>
                                {/* <h2 className='title-set bottom-line'>{`作品資訊 ${portfolioDetail?.[0].title}`}</h2> */}
                            </div>
                            {/* 桌面板標題區塊 */}

                            {/* 手機板標題區塊 */}
                            <div className='portfolio-title-mb-box d-block d-sm-none'>
                                <h2 className='title-set'>作品資訊</h2>
                                {/* <h2 className='title-set bottom-line'>{portfolioDetail?.[0].title}</h2> */}
                            </div>
                            {/* 手機板標題區塊 */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* 內容區塊 */}
                            <div className="portfolioDetailContentBox">
                                <Tab.Container activeKey={portfolioDetailTab} onSelect={(key) => setPortfolioDetailTab(key)}>
                                    {/* Tab 桌面板選單區 */}
                                    <Nav className='tab-box d-none d-sm-flex'>
                                    {
                                        tabListData?.map((item)=>{
                                            return(   
                                                <Nav.Item key={item.key} className='tab-item'>
                                                    <Nav.Link   className={`tab-link ${item.disabled ? 'is-disabled' : ''}`} 
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
                                    <Nav className='tab-sm-box d-flex d-sm-none'>
                                        
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
                                                        tabListData?.map((item)=>{
                                                            return(
                                                                <Nav.Item key={item.key} className='menu-btn'>
                                                                    <Nav.Link   className={`tab-link${item.disabled ? 'is-disabled' : ''}`} 
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

                                    {/* Tab 內容區 */}
                                    <Tab.Content className='h-100'>
                                        {
                                            tabListData?.map((item)=>{
                                                return(
                                                    
                                                    <Tab.Pane key={item.key} eventKey={item.key}>
                                                        {item.pageData}
                                                    </Tab.Pane>
                                                    
                                                )
                                            })
                                        }
                                    </Tab.Content>
                                    {/* Tab 內容區 */}
                                </Tab.Container>
                            </div>
                            {/* 內容區塊 */}
                        </div>
                    </div>  
                </div>
            </section>
            {/* 元件最外圍 */}
        </>
    )
  
}

export default 作品介紹頁面;


