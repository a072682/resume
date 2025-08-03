import { createContext, useContext, useState } from "react";

// 1. 建立 Context 物件
const ContextData = createContext();

// 2. 建立 Provider 元件
// ContextProvider是main.jsx所使用的名稱
export const ContextProvider = ({ children }) => {
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
                        text:"此Demo包含首頁、所有文章、訂閱方案、購買流程、關於我們等顯示頁面，以及會員驗證 / 註冊、資料搜尋等功能。",
                        },
                        {
                        id:3,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:4,
                        text:"主要體現在切版上以及前端的功能運行的實現能力。",
                        },
                        {
                        id:5,
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
                        text:"此Demo包含首頁、所有文章、課程頁面購物車、購買流程、教師資訊等顯示頁面，以及會員驗證、資料搜尋等功能。",
                        },
                        {
                        id:3,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:4,
                        text:"主要體現在切版上以及前端的功能運行的實現能力。",
                        },
                        {
                        id:5,
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
                        text:"此Demo包含首頁、部落格、閱讀內文等顯示頁面。",
                        },
                        {
                        id:3,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:4,
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
                        text:"使用六角學院所提供的前後端API與後台進行連接",
                        },
                        {
                        id:4,
                        text:"此Demo包含首頁、產品頁、產品細節頁、購物車、付費頁面等顯示頁面。",
                        },
                        {
                        id:5,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:6,
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
                        text:"使用六角學院所提供的前後端API與後台進行連接",
                        },
                        {
                        id:4,
                        text:"此Demo包含產品設定、訂單設定、優惠卷設定、登入 / 燈出等顯示頁面。",
                        },
                        {
                        id:5,
                        text:"可以對產品進行新增/修改/刪除並與前台網站進行聯動",
                        },
                        {
                        id:6,
                        text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
                        },
                        {
                        id:7,
                        text:"主要體現在切版上以及使用API交互的實現能力",
                        },
                        {
                        id:8,
                        text:"預設帳號信箱為admin123@gmail.com,密碼:admin123",
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
                            "Html","CSS","JavaScript ES6+","React","Bootstrap5","Scss","Axios"
                        ],
                    },
                    {
                        title:"Tools",
                        item:[
                            "VisualStudioCode","PostgreSQL","DBeaver","Postman","Docker","Vite","GitHub"
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
    };
  return (
    // 被UserContext.Provider包住的就是可以傳送資料的
    // value為要傳送的資料
    <ContextData.Provider value={{ userData }}> 
      {children}
    </ContextData.Provider>
  );
};

// 3. 建立自定義 Hook，讓使用更簡潔
//在別的頁面需要呼叫檔案時import { useUserData } from '../components/common/Context'
//接著進行解構const { username, setUsername } = useUserData()
export const useUserData = () => useContext(ContextData);
