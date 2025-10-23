import './_Experience.scss';
import { Tab, Nav } from 'react-bootstrap';//宣告元件
import { useState } from 'react';//宣告狀態
import OldExperience from './OldExperience/OldExperience';
import NewExperience from './NewExperience/NewExperience';


function Experience ({userData,activeTab}){

    
const [experienceActiveTab, setExperienceActiveTab] = useState('目前經歷');//預設開啟的頁面


    const tabdata = [ //將資料分離讓程式碼可以用.map讓程式碼更加簡潔
        {
            title:"過去經歷",
            key:"過去經歷",
            pageData:<OldExperience userData={userData} activeTab={activeTab}/>,
            disabled: false,
        },
        {
            title:"目前經歷",
            key:"目前經歷",
            pageData:<NewExperience />,
            disabled: false,
        },
    ]

    return(
        <>
            <div className='experience py-24'>
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
            </div>
        </>
    )
    
}

export default Experience