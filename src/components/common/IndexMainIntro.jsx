import './_IndexMainIntro.scss';
import { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';



function IndexMainIntro() {

    const [activeTab, setActiveTab] = useState('作品集');

    const userData = {
        name:"余亮言",
        img:`${import.meta.env.BASE_URL}images/desktop/USER-ID.jpg`,
        englishName:"Andy Yu",
        phone:"0968630133",
        email:"a072682@gmail.com",
        navItem:[
            {
                title:"經歷",
                experience:[
                    {   
                        id:1,
                        img:`${import.meta.env.BASE_URL}images/desktop/ExperienceImg01.jpg`,
                        time:"2015/6",
                        place:"國立臺北科技大學",
                        position:"畢業",
                    },
                    {   
                        id:2,
                        img:`${import.meta.env.BASE_URL}images/desktop/ExperienceImg02.jpg`,
                        time:"2013/7 ~ 2016/10",
                        place:"唐碩科技",
                        position:"電子安規工程師",
                    },
                    {   
                        id:3,
                        img:`${import.meta.env.BASE_URL}images/desktop/ExperienceImg03.jpg`,
                        time:"2018/10 ~ 2023/8",
                        place:"中研科技",
                        position:"EMC測試工程師",
                    },
                    {   
                        id:4,
                        img:`${import.meta.env.BASE_URL}images/desktop/ExperienceImg04.jpg`,
                        time:"2023/8 ~ 2023/11",
                        place:"東研信超",
                        position:"EMC測試工程師",
                    },
                    {   
                        id:5,
                        img:`${import.meta.env.BASE_URL}images/desktop/ExperienceImg05.jpg`,
                        time:"2024/4 ~ 2025/3",
                        place:"環球認證",
                        position:"EMC測試工程師",
                    },
                    {   
                        id:6,
                        img:`${import.meta.env.BASE_URL}images/desktop/ExperienceImg06.jpg`,
                        time:"2024/3 ~ 2025/6",
                        place:"六角學院",
                        position:"前端線上受訓",
                    },
                ]
            },
            {
                title:"作品集",
                portfolio:[
                    {
                    tag:"WEB",
                    title:"Vivre旅遊資訊網頁",
                    img:`${import.meta.env.BASE_URL}images/desktop/web-img01.png`,
                    textContent:[
                        {
                        id:1,
                        text:"這是一個靜態旅遊相關資訊平台，主要提供旅遊的相關文章。",
                        },
                        {
                        id:2,
                        text:"此作品為六角學院 2024 切版班作業六之作品。",
                        },
                        {
                        id:3,
                        text:"此Demo包含首頁、所有文章、訂閱方案、購買流程、關於我們等顯示頁面，以及會員驗證 / 註冊、資料搜尋等功能。",
                        },
                        {
                        id:4,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:5,
                        text:"主要體現在切版上以及前端的功能運行的實現能力。",
                        },
                        {
                        id:6,
                        text:"預設帳號為admin123,密碼:admin123",
                        },
                    ],
                    gitHub:"https://github.com/a072682/HomeWork-Week-6",
                    demo:"https://a072682.github.io/HomeWork-Week-6/",
                    },
                    {
                    tag:"WEB",
                    title:"LEARNING線上學習平台",
                    img:`${import.meta.env.BASE_URL}images/desktop/web-img02.png`,
                    textContent:[
                        {
                        id:1,
                        text:"這是一個靜態線上學習平台，主要提供多種的線上課程。",
                        },
                        {
                        id:2,
                        text:"此作品為六角學院 2024 切版班作業八之作品。",
                        },
                        {
                        id:3,
                        text:"此Demo包含首頁、所有文章、課程頁面購物車、購買流程、教師資訊等顯示頁面，以及會員驗證、資料搜尋等功能。",
                        },
                        {
                        id:4,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:5,
                        text:"主要體現在切版上以及前端的功能運行的實現能力。",
                        },
                        {
                        id:6,
                        text:"預設信箱為admin123@gmail.com,密碼:admin123",
                        },
                    ],
                    gitHub:"https://github.com/a072682/HomeWork-Week-8",
                    demo:"https://a072682.github.io/HomeWork-Week-8/",
                    },
                    {
                    tag:"WEB",
                    title:"品牌形象網站",
                    img:`${import.meta.env.BASE_URL}images/desktop/web-img03.png`,
                    textContent:[
                        {
                        id:1,
                        text:"這是一個靜態品牌形象網站。",
                        },
                        {
                        id:2,
                        text:"此作品為六角學院 2025 體驗切版班作業二之作品。",
                        },
                        {
                        id:3,
                        text:"此Demo包含首頁、部落格、閱讀內文等顯示頁面。",
                        },
                        {
                        id:4,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:5,
                        text:"主要體現在切版上的實現能力",
                        },
                    ],
                    gitHub:"https://github.com/a072682/2025ExperienceCampHomeWork02",
                    demo:"https://a072682.github.io/2025ExperienceCampHomeWork02/",
                    },
                    {
                    tag:"WEB",
                    title:"服裝購物形象網站(前台)",
                    img:`${import.meta.env.BASE_URL}images/desktop/web-img04.png`,
                    textContent:[
                        {
                        id:1,
                        text:"這是一個服裝購物形象網站",
                        },
                        {
                        id:2,
                        text:"與服裝購物形象網站(後台)進行聯動",
                        },
                        {
                        id:3,
                        text:"此作品為六角學院 2025 框架班作業八之作品。",
                        },
                        {
                        id:4,
                        text:"使用六角學院所提供的前後端API與後台進行連接",
                        },
                        {
                        id:5,
                        text:"此Demo包含首頁、產品頁、產品細節頁、購物車、付費頁面等顯示頁面。",
                        },
                        {
                        id:6,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:7,
                        text:"主要體現在切版上以及使用API交互的實現能力",
                        },
                    ],
                    gitHub:"https://github.com/a072682/ReactHomeWork-8-front",
                    demo:"https://a072682.github.io/ReactHomeWork-8-front/",
                    },
                    {
                    tag:"WEB",
                    title:"服裝購物形象網站(後台)",
                    img:`${import.meta.env.BASE_URL}images/desktop/web-img05.png`,
                    textContent:[
                        {
                        id:1,
                        text:"這是一個服裝購物形象網站(後台)。",
                        },
                        {
                        id:2,
                        text:"與服裝購物形象網站(前台)進行聯動",
                        },
                        {
                        id:3,
                        text:"此作品為六角學院 2025 框架班作業八之作品。",
                        },
                        {
                        id:4,
                        text:"使用六角學院所提供的前後端API與後台進行連接",
                        },
                        {
                        id:5,
                        text:"此Demo包含產品設定、訂單設定、優惠卷設定、登入 / 燈出等顯示頁面。",
                        },
                        {
                        id:6,
                        text:"可以對產品進行新增/修改/刪除並與前台網站進行聯動",
                        },
                        {
                        id:7,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:8,
                        text:"主要體現在切版上以及使用API交互的實現能力",
                        },
                    ],
                    gitHub:"https://github.com/a072682/ReactHomeWork-8-back",
                    demo:"https://a072682.github.io/ReactHomeWork-8-back/",
                    },
                ]
            },
            {
                title:"技能",
                Skills:[
                    {
                        title:"Website",
                        item:[
                            "Html","CSS","javascript","React","Bootstrap5","Vite","Scss","Axios","GitHub",
                        ],
                    },
                    {
                        title:"Tools",
                        item:[
                            "VisualStudioCode","PostgreSQL","DBeaver","Postman","DockerDesktop",
                        ],
                    },
                    {
                        title:"Office",
                        item:[
                            "Word","Excel","PowerPoint",
                        ],
                    },
                    {
                        title:"語言",
                        item:[
                            "中文","英文(初級)","日文(N5)",
                        ],
                    },
                ]
            },
        ]
    }

  return (
    <>
        <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            {/* activeKey 表示「目前要顯示哪個 Tab 頁籤」的 key，它對應到 Tab.Pane 的 eventKey */}
            {/* onSelect 當使用者點擊新的頁籤時會觸發，把被點擊的 eventKey 傳入 callback */}
            {/* (key) => setActiveTab(key)這行就是說「當某個 Tab 被點到，就把該 tab 的 key 存入 activeTab state」 */}
            <div className='main-intro w-100'>
                <div className='main-intro-bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center '>
                                    <div className='main-intro-bg1 d-flex justify-content-center align-items-center'>
                                        <div className='img-box'>
                                            <div className='box1 d-flex justify-content-center align-items-center'> 
                                                <img className='box2' src={userData.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='main-intro-bg2 ms-md-48 mt-24 mt-md-0 d-flex flex-column justify-content-center align-items-center align-items-md-start row-gap-12'>
                                        <div className='title-box'>
                                            <h1 className='title text-center text-xl-start fw-900 lh-15 fontFamily'>{userData.name} / {userData.englishName}</h1>
                                        </div>
                                        <div className='userData-box d-flex flex-column justify-content-center align-items-center align-items-md-start row-gap-12'>
                                            <a href="https://drive.google.com/file/d/1A-_f1RUlJzVmEvMZZ7e0Q6gStoEjDm3G/view" 
                                                className=' py-8 px-24
                                                            d-flex justify-content-center align-items-center
                                                            resume-link'
                                                target="_blank" rel="noopener noreferrer">
                                                <span className="material-symbols-outlined fs-24 me-12">
                                                        file_open
                                                </span>
                                                查看履歷
                                            </a>
                                            <div className='phone-box d-flex justify-content-start align-items-center gap-12'>
                                                <span className="material-symbols-outlined fs-24">
                                                    phone_enabled
                                                </span>
                                                <span className='fs-20'>{userData.phone}</span>
                                            </div>
                                            <div className='mail-box d-flex justify-content-start align-items-center gap-12'>
                                                <span className="material-symbols-outlined fs-24">
                                                    mail
                                                </span>
                                                <span className='fs-20'>{userData.email}</span>
                                            </div>
                                        </div>
                                        {/* Tab 選單區 */}
                                            <Nav className="nav-item-box ">
                                                {
                                                    userData.navItem.map((item)=>{
                                                        return(
                                                            <Nav.Item key={item.title}>
                                                                <Nav.Link className="my-tab-btn" eventKey={item.title}>{item.title}</Nav.Link>
                                                            </Nav.Item>
                                                        )
                                                    })
                                                }
                                            </Nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='main-content'>
                <div className='main-content-box'>       
                    <Tab.Content>
                        {
                            userData.navItem.map((item) => {
                                return (
                                <Tab.Pane key={item.title} eventKey={item.title}>
                                    <AnimatePresence mode="wait">
                                    {activeTab === item.title && (
                                        <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        >
                                        {
                                            (() => {
                                                switch (item.title) {
                                                    case "經歷":
                                                        return <Experience userData={userData} activeTab={activeTab}/>;
                                                    case "作品集":
                                                        return <Portfolio userData={userData} activeTab={activeTab}/>;
                                                    case "技能":
                                                        return <Skills userData={userData} activeTab={activeTab}/>;
                                                }
                                            })()//最後面加()代表馬上執行
                                        }
                                        </motion.div>
                                    )}
                                    </AnimatePresence>
                                </Tab.Pane>
                                );
                            })
                        }
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    </>
  );
}

export default IndexMainIntro;