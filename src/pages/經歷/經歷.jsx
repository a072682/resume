import './_Experience.scss';
import { Tab, Nav } from 'react-bootstrap';//宣告元件
import { useState } from 'react';//宣告狀態
import 過去經歷 from './過去經歷/過去經歷';
import 目前經歷 from './目前經歷/目前經歷';


function 經歷 (){

    
const [experienceActiveTab, setExperienceActiveTab] = useState('目前經歷');//預設開啟的頁面


    const tabdata = [ 
        {
            title:"過去經歷",
            key:"過去經歷",
            pageData:<過去經歷 />,
            disabled: false,
        },
        {
            title:"目前經歷",
            key:"目前經歷",
            pageData:<目前經歷 />,
            disabled: false,
        },
    ]

    return(
        <>
            {/* 元件最外圍 */}
            <section className='經歷 py-24'>
                <div className="container">
                    <div className='row'>
                        <div className='col'>
                            <div className='experience-title-box'>
                                <h2 className='title'>經歷</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="experience-tabs">
                                <Tab.Container activeKey={experienceActiveTab} onSelect={(key) => setExperienceActiveTab(key)}>
                                    {/* Tab 選單區 */}
                                    <Nav className='d-flex flex-row tab-box'>
                                        {
                                            tabdata?.map((item)=>{
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
                                    {/* Tab 內容區 */}
                                    <Tab.Content className='h-100'>
                                        {
                                            tabdata?.map((item)=>{
                                                return(
                                                    
                                                    <Tab.Pane key={item.key} eventKey={item.key}>
                                                        {item.pageData}
                                                    </Tab.Pane>
                                                    
                                                )
                                            })
                                        }
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* 元件最外圍 */}
        </>
    )
    
}

export default 經歷