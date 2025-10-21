import { useEffect, useState } from 'react'
import { Tab, Nav, Dropdown } from 'react-bootstrap';//宣告元件
import './_PortfolioDetail.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserData } from '../../components/common/Context';





function PortfolioDetail () {

    //#region 
    //#endregion

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 傳送網頁前置宣告
        const navigate = useNavigate();
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
    //#endregion

    //#region 儲存顯示資料狀態宣告
        const[portfolioDetail,setPortfolioDetail]=useState(null);
        useEffect(()=>{},[portfolioDetail]);
    //#endregion

    //#region 處理顯示資料
        useEffect(()=>{
            // console.log("全部資料:",userData);
            const user = handlePortfolioDetailData(userData);
            setPortfolioDetail(user);
            const listData = handleTabData(user);
            setTabData(listData);
        },[userData]);
    //#endregion
    
    //#region 處理顯示資料函式
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

    //#region 宣告portfolioDetail頁面tab狀態
        const [portfolioDetailTab, setPortfolioDetailTab] = useState('作品整體架構');//預設開啟的頁面
        useEffect(()=>{
            if(portfolioDetailTab === "返回目錄"){
                navigate("/");
            }
        },[portfolioDetailTab])
    //#endregion

    //#region 宣告tabData狀態
        const [tabData,setTabData] = useState([]);
        useEffect(()=>{},[tabData]);
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

    //#region 手機板tab選項狀態宣告
        const [selectedValue, setSelectedValue] = useState("作品整體架構");
        const [show, setShow] = useState(false);
        useEffect(()=>{},[show])
    //#endregion



  return(
    <>
      <section className="portfolioDetail my-24">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='portfolio-title-box d-none d-sm-block'>
                <h2 className='title-set bottom-line'>{`作品資訊 ${portfolioDetail?.[0].title}`}</h2>
              </div>
              <div className='portfolio-title-mb-box d-block d-sm-none'>
                <h2 className='title-set'>作品資訊</h2>
                <h2 className='title-set bottom-line'>{portfolioDetail?.[0].title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
                <div className="portfolioDetail-tabs">
                    <Tab.Container activeKey={portfolioDetailTab} onSelect={(key) => setPortfolioDetailTab(key)}>
                        {/* Tab 桌面板選單區 */}
                        <Nav className='tab-box d-none d-sm-flex'>
                            {
                                tabData?.map((item)=>{
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
                        <Nav className='tab-sm-box d-flex d-sm-none'>
                            
                            <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>

                                <Dropdown.Toggle as="div" onClick={() => {setShow(!show);}}> 
                                    <span className='title-dropdown' >
                                        {selectedValue}
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_down
                                        </span>
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="triple-dropdown-menu">
                                    <div className="menu-column main-menu">
                                        {
                                            tabData?.map((item)=>{
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

                        {/* Tab 內容區 */}
                        <Tab.Content className='h-100'>
                            {
                                tabData?.map((item)=>{
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
            </div>
          </div>  
        </div>
      </section>
    </>
  )
  
}

export default PortfolioDetail;


