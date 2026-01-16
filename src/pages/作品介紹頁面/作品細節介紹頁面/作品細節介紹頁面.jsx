
import { Tab, Nav, Dropdown } from 'react-bootstrap';//宣告元件
import { useUserData } from '../../../components/common/Context';
import './_作品細節介紹頁面.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';





function 作品細節介紹頁面 () {

    //#region 
    //#endregion

    //#region 資料源頭

        //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{
            //console.log("取得的id:",id_portfolio);
        },[id_portfolio]);
        //#endregion

        //#region 取得框架資料
        const frameData = useSelector((state)=>{
            return(
                state.data.data
            )
        })
        //#endregion

        //#region 解構userData 獲取來源資料
        const { userData } = useUserData() ?? { userData: null };
        //#endregion

    //#endregion
    
    //#region 傳送網頁前置宣告
    const navigate = useNavigate();
    //#endregion

    //#region 作品介紹選項設定
    const [introduceItemData,setIntroduceItemData] = useState('作品整體架構');
    useEffect(()=>{
        if(introduceItemData === "返回目錄"){
            navigate("/");
        }
    },[introduceItemData]);
    //#endregion

    //#region 宣告選項列表狀態
    const [introduceListData,setIntroduceListData] = useState([]);
    useEffect(()=>{
        //console.log("過濾後資料:",introduceListData);
    },[introduceListData]);
    //#endregion

    //#region 過濾作品資料函式
    const handleProjectData = (input) => {

        const results = [];

        if(!input){
            console.log("來源資料為空");
            return;
        }
        input.navItem.map((item) => {
            if (item.title === "作品集") {
                item.portfolio.map((itemIn) => {
                    if (itemIn.title === id_portfolio) {
                        itemIn.framework.map((framework)=>{
                            if(framework.frameName === frameData){
                                console.log("過濾後資料01:",framework.detail);
                                results.push(...framework.detail);
                            }
                        })
                    }
                });
            }
        });

        return results;
    }

    //#region 處理顯示資料
    useEffect(()=>{
        //console.log("全部資料:",userData);
        setIntroduceListData(handleProjectData(userData));
    },[frameData]);
    //#endregion

    //#region 手機版相關函式
        //#region 控制Dropdown元件是否下拉
        const [show, setShow] = useState(false);
        //#endregion
        useEffect(()=>{},[show])
    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <section className="作品細節介紹頁面">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* 桌面板標題區塊 */}
                            <div className='portfolio-title-box d-none d-sm-block'>
                                <h2 className='title-set bottom-line'>{`作品資訊 ${id_portfolio}`}</h2>
                            </div>
                            {/* 桌面板標題區塊 */}

                            {/* 手機板標題區塊 */}
                            <div className='portfolio-title-mb-box d-block d-sm-none'>
                                <h2 className='title-set'>作品資訊</h2>
                                <h2 className='title-set bottom-line'>{id_portfolio}</h2>
                            </div>
                            {/* 手機板標題區塊 */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* 內容區塊 */}
                            <div className="portfolioDetailContentBox">
                                <Tab.Container activeKey={introduceItemData} onSelect={(key) => setIntroduceItemData(key)}>
                                    {/* Tab 桌面板選單區 */}
                                    <Nav className='tab-box d-none d-sm-flex'>
                                    {
                                        introduceListData?.map((item)=>{
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
                                                    {introduceItemData}
                                                    <span className="material-symbols-outlined">
                                                        keyboard_arrow_down
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="triple-dropdown-menu">
                                                <div className="menu-column main-menu">
                                                    {
                                                        introduceListData?.map((item)=>{
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
                                            introduceListData?.map((item)=>{
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

export default 作品細節介紹頁面;


