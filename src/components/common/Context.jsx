import { createContext, useContext, useState } from "react";
import WebsiteStructure from "../../pages/PortfolioDetail/pageData/WebsiteStructure/WebsiteStructure";
import FrontWeb from "../../pages/PortfolioDetail/pageData/FrontWebPage/FrontWeb";
import ServerPage from "../../pages/PortfolioDetail/pageData/ServerPage/ServerPage";
import PostgreSQLPage from "../../pages/PortfolioDetail/pageData/PostgreSQLPage/PostgreSQLPage";
import DemoPage from "../../pages/PortfolioDetail/pageData/DemoPage/DemoPage";
import FrontWebStructure from "../../pages/PortfolioDetail/pageData/FrontWebPage/FrontWebStructure/FrontWebStructure";
import FrontWebDetailStructure from "../../pages/PortfolioDetail/pageData/FrontWebPage/FrontWebDetailStructure/FrontWebDetailStructure";
import LayoutSkills from "../../pages/PortfolioDetail/pageData/FrontWebPage/LayoutSkills/LayoutSkills";
import ReactRouterDOM from "../../pages/PortfolioDetail/pageData/FrontWebPage/ReactRouterDOM/ReactRouterDOM";
import AxiosData from "../../pages/PortfolioDetail/pageData/FrontWebPage/AxiosData/AxiosData";
import RWDData from "../../pages/PortfolioDetail/pageData/FrontWebPage/RWDData/RWDData";
import GitHubData from "../../pages/PortfolioDetail/pageData/FrontWebPage/GitHubData/GitHubData";
import UserSide from "../../pages/PortfolioDetail/pageData/DemoPage/UserSide/UserSide";
import ManagerSide from "../../pages/PortfolioDetail/pageData/DemoPage/ManagerSide/ManagerSide";



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
                        projectType:"個人專案",
                        title:"Vivre旅遊資訊網頁",
                        img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/web-img01-02.png`,
                        detail:[
                            {
                                title: "作品整體架構",
                                key: "作品整體架構",
                                pageData:<WebsiteStructure />,
                                pageDetailData: {
                                    pageImg: `${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/整體專案架構/整體專案架構圖.png`,
                                    detailData: [
                                        {
                                            sectionId: "frontend-site", 
                                            pageTitleContent: ["前端網站", "使用者/管理者端"],
                                            pageTextContent: [
                                                { id: "frontend-site-text-01", content: "技術：HTML、CSS/SCSS、JavaScript (ES6+)、React、Vite" },
                                                { id: "frontend-site-text-02", content: "功能：建立互動式介面、路由分頁、表單驗證、資料顯示與操作" },
                                                { id: "frontend-site-text-03", content: "資料交換格式：JSON" },
                                                { id: "frontend-site-text-04", content: "角色：使用者端（操作網站）" }
                                            ]
                                        },
                                        {
                                            sectionId: "server",
                                            pageTitleContent: ["伺服器端(前端Redux模擬)"],
                                            pageTextContent: [
                                                { id: "server-text-01", content: "功能：處理前端請求、驗證資料、回傳結果" },
                                                { id: "server-text-02", content: "角色：儲存原始資料" },
                                            ]
                                        },
                                    ]
                                },
                                disabled: false
                            },
                            {
                                title: "前端介紹",
                                key: "前端介紹",
                                pageData:<FrontWeb />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"前端架構",
                                            key:"前端架構",
                                            frontWebPageData:<FrontWebStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/前端架構/前端網站架構圖.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"專案架構",
                                            key:"專案架構",
                                            frontWebPageData:<FrontWebDetailStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/專案架構/專案模組架構圖.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"切版能力",
                                            key:"切版能力",
                                            frontWebPageData:<LayoutSkills />,
                                            frontWebPageTitle:"切版設計稿",
                                            frontWebPageLink:"https://www.figma.com/design/zpJK5cEuejmXdd2Dyth3PC/2024-%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD-W6---%E5%85%A7%E5%AE%B9%E8%A8%82%E9%96%B1%E7%B6%B2%E7%AB%99?node-id=279-1094&t=Sf0xEFJNB5GYWUyl-0",
                                            frontWebPageLinkName:"Figma設計稿內容",
                                            frontWebPageText:"本網站頁面以 HTML + SCSS 為基礎進行切版，採用模組化、響應式、語義化的設計原則，確保畫面在不同裝置上都能維持良好的排版與一致的視覺體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/切版能力/01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/切版能力/02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/切版能力/03.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/切版能力/04.png`,
                                                },

                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"路由系統",
                                            key:"路由系統",
                                            frontWebPageData:<ReactRouterDOM />,
                                            frontWebPageTitle:"路由與資訊架構（React Router DOM）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 React Router DOM v6 進行頁面導向與資訊架構設計，將網站分為多個主題頁面（首頁、線上估價、新手指南、關於我們等），以提升可維護性與使用者體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/路由系統/路由系統.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"RWD功能",
                                            key:"RWD功能",
                                            frontWebPageData:<RWDData />,
                                            frontWebPageTitle:"響應式網頁設計（Responsive Web Design）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"本網站採用 RWD 響應式設計，確保在桌機、平板與手機等不同螢幕尺寸下皆能自適應顯示，維持一致的視覺體驗與操作邏輯。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/RWD/rwd01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/RWD/rwd02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/RWD/rwd03.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false
                            },
                            {
                                title:"Demo",
                                key:"Demo",
                                pageData:<DemoPage />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"使用者端",
                                            key:"使用者端",
                                            DemoPage:<UserSide />,
                                            DemoPageTitle:"Come_Buy",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:null,
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/Vivre旅遊資訊網頁/web-img01-02.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/HomeWork-Week-6",
                                            DemoPageDemo:"https://a072682.github.io/HomeWork-Week-6/",
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false,
                            },
                            {
                                title:"返回目錄",
                                key:"返回目錄",
                                pageData:"",
                                disabled: false,
                            },
                        ],
                    },
                    {
                        tag:"WEB",
                        projectType:"個人專案",
                        title:"LEARNING線上平台",
                        img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/web-img02-02.png`,
                        detail:[
                            {
                                title: "作品整體架構",
                                key: "作品整體架構",
                                pageData:<WebsiteStructure />,
                                pageDetailData: {
                                    pageImg: `${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/整體專案架構/整體專案架構圖.png`,
                                    detailData: [
                                        {
                                            sectionId: "frontend-site", 
                                            pageTitleContent: ["前端網站", "使用者/管理者端"],
                                            pageTextContent: [
                                                { id: "frontend-site-text-01", content: "技術：HTML、CSS/SCSS、JavaScript (ES6+)、React、Vite" },
                                                { id: "frontend-site-text-02", content: "功能：建立互動式介面、路由分頁、表單驗證、資料顯示與操作" },
                                                { id: "frontend-site-text-03", content: "資料交換格式：JSON" },
                                                { id: "frontend-site-text-04", content: "角色：使用者端（操作網站）" }
                                            ]
                                        },
                                        {
                                            sectionId: "server",
                                            pageTitleContent: ["伺服器端(前端Redux模擬)"],
                                            pageTextContent: [
                                                { id: "server-text-01", content: "功能：處理前端請求、驗證資料、回傳結果" },
                                                { id: "server-text-02", content: "角色：儲存原始資料" },
                                            ]
                                        },
                                    ]
                                },
                                disabled: false
                            },
                            {
                                title: "前端介紹",
                                key: "前端介紹",
                                pageData:<FrontWeb />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"前端架構",
                                            key:"前端架構",
                                            frontWebPageData:<FrontWebStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/前端架構/前端網站架構圖.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"專案架構",
                                            key:"專案架構",
                                            frontWebPageData:<FrontWebDetailStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/專案架構/專案模組架構圖.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"切版能力",
                                            key:"切版能力",
                                            frontWebPageData:<LayoutSkills />,
                                            frontWebPageTitle:"切版設計稿",
                                            frontWebPageLink:"https://www.figma.com/design/Dw2s5UO0VnMz587q1k1ytp/%E5%85%AD%E8%A7%92%EF%BD%9CLearning----%E7%B7%9A%E4%B8%8A%E8%AA%B2%E7%A8%8B%E7%B6%B2%E7%AB%99?node-id=204-116&t=LWxNzHh7zWAr3QTk-0",
                                            frontWebPageLinkName:"Figma設計稿內容",
                                            frontWebPageText:"本網站頁面以 HTML + SCSS 為基礎進行切版，採用模組化、響應式、語義化的設計原則，確保畫面在不同裝置上都能維持良好的排版與一致的視覺體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/切版能力/01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/切版能力/02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/切版能力/03.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/切版能力/04.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"路由系統",
                                            key:"路由系統",
                                            frontWebPageData:<ReactRouterDOM />,
                                            frontWebPageTitle:"路由與資訊架構（React Router DOM）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 React Router DOM v6 進行頁面導向與資訊架構設計，將網站分為多個主題頁面（首頁、線上估價、新手指南、關於我們等），以提升可維護性與使用者體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/路由系統/路由系統.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"RWD功能",
                                            key:"RWD功能",
                                            frontWebPageData:<RWDData />,
                                            frontWebPageTitle:"響應式網頁設計（Responsive Web Design）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"本網站採用 RWD 響應式設計，確保在桌機、平板與手機等不同螢幕尺寸下皆能自適應顯示，維持一致的視覺體驗與操作邏輯。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/RWD/rwd01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/RWD/rwd02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/RWD/rwd03.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false
                            },
                            {
                                title:"Demo",
                                key:"Demo",
                                pageData:<DemoPage />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"使用者端",
                                            key:"使用者端",
                                            DemoPage:<UserSide />,
                                            DemoPageTitle:"Come_Buy",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:null,
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/LEARNING線上學習平台/web-img02-02.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/HomeWork-Week-8",
                                            DemoPageDemo:"https://a072682.github.io/HomeWork-Week-8/",
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false,
                            },
                            {
                                title:"返回目錄",
                                key:"返回目錄",
                                pageData:"",
                                disabled: false,
                            },
                        ],
                    },
                    {
                        tag:"WEB",
                        projectType:"個人專案",
                        title:"品牌形象網站",
                        img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/web-img03-02.png`,
                        detail:[
                            {
                                title: "作品整體架構",
                                key: "作品整體架構",
                                pageData:<WebsiteStructure />,
                                pageDetailData: {
                                    pageImg: `${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/整體專案架構/整體專案架構圖.png`,
                                    detailData: [
                                        {
                                            sectionId: "frontend-site", 
                                            pageTitleContent: ["前端網站", "使用者/管理者端"],
                                            pageTextContent: [
                                                { id: "frontend-site-text-01", content: "技術：HTML、CSS/SCSS、JavaScript (ES6+)、React、Vite" },
                                                { id: "frontend-site-text-02", content: "功能：建立互動式介面、路由分頁、資料顯示與操作" },
                                                { id: "frontend-site-text-03", content: "資料交換格式：JSON" },
                                                { id: "frontend-site-text-04", content: "角色：使用者端（操作網站）" }
                                            ]
                                        },
                                    ]
                                },
                                disabled: false
                            },
                            {
                                title: "前端介紹",
                                key: "前端介紹",
                                pageData:<FrontWeb />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"前端架構",
                                            key:"前端架構",
                                            frontWebPageData:<FrontWebStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/前端架構/前端網站架構圖.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"專案架構",
                                            key:"專案架構",
                                            frontWebPageData:<FrontWebDetailStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/專案架構/專案模組架構圖.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"切版能力",
                                            key:"切版能力",
                                            frontWebPageData:<LayoutSkills />,
                                            frontWebPageTitle:"切版設計稿",
                                            frontWebPageLink:"https://www.figma.com/design/bBHUp0TeM0yjAlkjtyxQJI/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?node-id=236-1109&t=OakMe9FxmhnUHTgy-0",
                                            frontWebPageLinkName:"Figma設計稿內容",
                                            frontWebPageText:"本網站頁面以 HTML + SCSS 為基礎進行切版，採用模組化、響應式、語義化的設計原則，確保畫面在不同裝置上都能維持良好的排版與一致的視覺體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/切版能力/01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/切版能力/02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/切版能力/03.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"路由系統",
                                            key:"路由系統",
                                            frontWebPageData:<ReactRouterDOM />,
                                            frontWebPageTitle:"路由與資訊架構（React Router DOM）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 React Router DOM v6 進行頁面導向與資訊架構設計，將網站分為多個主題頁面（首頁、線上估價、新手指南、關於我們等），以提升可維護性與使用者體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/路由系統/路由系統.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"RWD功能",
                                            key:"RWD功能",
                                            frontWebPageData:<RWDData />,
                                            frontWebPageTitle:"響應式網頁設計（Responsive Web Design）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"本網站採用 RWD 響應式設計，確保在桌機、平板與手機等不同螢幕尺寸下皆能自適應顯示，維持一致的視覺體驗與操作邏輯。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/RWD/rwd01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/RWD/rwd02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/RWD/rwd03.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false
                            },
                            {
                                title:"Demo",
                                key:"Demo",
                                pageData:<DemoPage />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"使用者端",
                                            key:"使用者端",
                                            DemoPage:<UserSide />,
                                            DemoPageTitle:"Come_Buy",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:null,
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/品牌形象網站/web-img03-02.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/2025ExperienceCampHomeWork02",
                                            DemoPageDemo:"https://a072682.github.io/2025ExperienceCampHomeWork02/",
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false,
                            },
                            {
                                title:"返回目錄",
                                key:"返回目錄",
                                pageData:"",
                                disabled: false,
                            },
                        ],
                    },
                    {
                        tag:"WEB",
                        projectType:"個人專案",
                        title:"服裝購物形象網站",
                        img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/web-img04-02.png`,
                        detail:[
                            {
                                title: "作品整體架構",
                                key: "作品整體架構",
                                pageData:<WebsiteStructure />,
                                pageDetailData: {
                                    pageImg: `${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/整體專案架構/整體專案架構圖.png`,
                                    detailData: [
                                    {
                                        sectionId: "frontend-site", 
                                        pageTitleContent: ["前端網站", "使用者/管理者端"],
                                        pageTextContent: [
                                            { id: "frontend-site-text-01", content: "技術：HTML、CSS/SCSS、JavaScript (ES6+)、React、Vite" },
                                            { id: "frontend-site-text-02", content: "功能：建立互動式介面、路由分頁、表單驗證、資料顯示與操作" },
                                            { id: "frontend-site-text-03", content: "資料交換格式：JSON" },
                                            { id: "frontend-site-text-04", content: "角色：同時提供 使用者端（操作網站）與 管理者端（維護內容" }
                                        ]
                                    },
                                    {
                                        sectionId: "server",
                                        pageTitleContent: ["伺服器端"],
                                        pageTextContent: [
                                            { id: "server-text-01", content: "API為六角學院提供" },
                                            { id: "server-text-02", content: "API驗證網址:" },
                                            { id: "server-text-03", content: "https://hexschool.github.io/ec-courses-api-swaggerDoc/" },
                                        ]
                                    },
                                    ]
                                },
                                disabled: false
                            },
                            {
                                title: "前端介紹",
                                key: "前端介紹",
                                pageData:<FrontWeb />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"前端架構",
                                            key:"前端架構",
                                            frontWebPageData:<FrontWebStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/前端架構/前端網站架構圖.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"專案架構",
                                            key:"專案架構",
                                            frontWebPageData:<FrontWebDetailStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/專案架構/專案模組架構圖.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"切版能力",
                                            key:"切版能力",
                                            frontWebPageData:<LayoutSkills />,
                                            frontWebPageTitle:"切版設計稿",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"本網站頁面以 HTML + SCSS 為基礎進行切版，採用模組化、響應式、語義化的設計原則，確保畫面在不同裝置上都能維持良好的排版與一致的視覺體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/切版能力/01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/切版能力/02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/切版能力/03.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/切版能力/04.png`,
                                                },

                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"路由系統",
                                            key:"路由系統",
                                            frontWebPageData:<ReactRouterDOM />,
                                            frontWebPageTitle:"路由與資訊架構（React Router DOM）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 React Router DOM v6 進行頁面導向與資訊架構設計，將網站分為多個主題頁面（首頁、線上估價、新手指南、關於我們等），以提升可維護性與使用者體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/路由系統/路由系統.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"axios(資料傳輸)",
                                            key:"axios(資料傳輸)",
                                            frontWebPageData:<AxiosData />,
                                            frontWebPageTitle:"Redux 資料管理與 API 傳輸（State Management & Data Flow）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案使用 Redux Toolkit 作為全域資料儲存中心，搭配 Axios 與後端 API 進行資料交換，確保使用者登入狀態、會員資料與訂單資訊在整個網站中一致且可追蹤。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/資料存處&AXIOS/Redux(資料存儲).png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"RWD功能",
                                            key:"RWD功能",
                                            frontWebPageData:<RWDData />,
                                            frontWebPageTitle:"響應式網頁設計（Responsive Web Design）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"本網站採用 RWD 響應式設計，確保在桌機、平板與手機等不同螢幕尺寸下皆能自適應顯示，維持一致的視覺體驗與操作邏輯。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/RWD/rwd01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/RWD/rwd02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/RWD/rwd03.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"GIT多人協作專案",
                                            key:"GIT多人協作專案",
                                            frontWebPageData:<GitHubData />,
                                            frontWebPageTitle:"GitHub 多人協作與版本控制流程",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 Git + GitHub 分支管理機制 進行版本控制與協作。每位開發者在自己的分支上開發功能，確認無誤後再合併至主分支，確保主線穩定與可隨時部署。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/GITHUB/GitHub專案流程.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false
                            },
                            {
                                title:"Demo",
                                key:"Demo",
                                pageData:<DemoPage />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"使用者端",
                                            key:"使用者端",
                                            DemoPage:<UserSide />,
                                            DemoPageTitle:"Come_Buy",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:null,
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/web-img04.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/ReactHomeWork-8-front",
                                            DemoPageDemo:"https://a072682.github.io/ReactHomeWork-8-front/",
                                            disabled: false,
                                        },
                                        {
                                            title:"管理者端(後台)",
                                            key:"管理者端(後台)",
                                            DemoPage:<ManagerSide />,
                                            DemoPageTitle:"Come_Buy(後台)",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:"預設帳號:admin123@gmail.com/預設密碼:admin123",
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/服裝購物形象網站/web-img05.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/ReactHomeWork-8-back",
                                            DemoPageDemo:"https://a072682.github.io/ReactHomeWork-8-back/",
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false,
                            },
                            {
                                title:"返回目錄",
                                key:"返回目錄",
                                pageData:"",
                                disabled: false,
                            },
                        ],
                        gitHub:"https://github.com/a072682/ReactHomeWork-8-front",
                        demo:"https://a072682.github.io/ReactHomeWork-8-front/",
                    },
                    {
                        tag:"WEB",
                        projectType:"團隊專案",
                        title:"ComeBuy",
                        img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/web-img06-02.png`,
                        textContent:[
                            {
                            id:1,
                            text:"這是一個服裝購物形象網站(後台)。",
                            },
                        ],
                        detail:[
                            {
                                title: "作品整體架構",
                                key: "作品整體架構",
                                pageData:<WebsiteStructure />,
                                pageDetailData: {
                                    pageImg: `${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/整體專案架構/整體專案架構圖.png`,
                                    detailData: [
                                    {
                                        sectionId: "frontend-site", 
                                        pageTitleContent: ["前端網站", "使用者/管理者端"],
                                        pageTextContent: [
                                            { id: "frontend-site-text-01", content: "技術：HTML、CSS/SCSS、JavaScript (ES6+)、React、Vite" },
                                            { id: "frontend-site-text-02", content: "功能：建立互動式介面、路由分頁、表單驗證、資料顯示與操作" },
                                            { id: "frontend-site-text-03", content: "資料交換格式：JSON" },
                                            { id: "frontend-site-text-04", content: "角色：同時提供 使用者端（操作網站）與 管理者端（維護內容" }
                                        ]
                                    },
                                    {
                                        sectionId: "server",
                                        pageTitleContent: ["伺服器端"],
                                        pageTextContent: [
                                            { id: "server-text-01", content: "技術：Node.js（執行環境）、Express（API 框架）" },
                                            { id: "server-text-02", content: "工具：Postman（API 測試）、Render（雲端部署）" },
                                            { id: "server-text-03", content: "功能：處理前端請求、驗證資料、存取資料庫、回傳結果" },
                                            { id: "server-text-04", content: "角色：同時提供 使用者端（操作網站）與 管理者端（維護內容" }
                                        ]
                                    },
                                    {
                                        sectionId: "database",
                                        pageTitleContent: ["資料庫端"],
                                        pageTextContent: [
                                            { id: "database-text-01", content: "技術：PostgreSQL（主資料庫）" },
                                            { id: "database-text-02", content: "工具：DBeaver（可視化管理工具）、Render（資料庫託管）" },
                                            { id: "database-text-03", content: "功能：儲存會員、產品、訂單等核心資料，並進行查詢與分析" },
                                            { id: "database-text-04", content: "特點：具備資料約束（Unique、FK）、索引與觸發器，保證資料一致性" }
                                        ]
                                    }
                                    ]
                                },
                                disabled: false
                            },
                            {
                                title: "前端介紹",
                                key: "前端介紹",
                                pageData:<FrontWeb />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"前端架構",
                                            key:"前端架構",
                                            frontWebPageData:<FrontWebStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/前端架構/前端網站架構圖.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"專案架構",
                                            key:"專案架構",
                                            frontWebPageData:<FrontWebDetailStructure />,
                                            frontWebPageTitle:null,
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:null,
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/專案架構/專案模組架構圖.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"切版能力",
                                            key:"切版能力",
                                            frontWebPageData:<LayoutSkills />,
                                            frontWebPageTitle:"切版設計稿",
                                            frontWebPageLink:"https://www.figma.com/design/boRAjEuqesEDxFSApsTnmR/Come%26Buy%E5%AE%A2%E8%A3%BD%E5%8C%963D%E5%88%97%E5%8D%B0%E4%BB%A3%E5%B7%A5%E9%A0%90%E7%B4%84%E7%B6%B2%E7%AB%99?m=auto&t=t7JA1jBONXe8mF7y-6",
                                            frontWebPageLinkName:"Figma設計稿內容",
                                            frontWebPageText:"本網站頁面以 HTML + SCSS 為基礎進行切版，採用模組化、響應式、語義化的設計原則，確保畫面在不同裝置上都能維持良好的排版與一致的視覺體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/03.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/04.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/05.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/06.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/07.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/08.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/09.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/切版能力/10.png`,
                                                },

                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"路由系統",
                                            key:"路由系統",
                                            frontWebPageData:<ReactRouterDOM />,
                                            frontWebPageTitle:"路由與資訊架構（React Router DOM）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 React Router DOM v6 進行頁面導向與資訊架構設計，將網站分為多個主題頁面（首頁、線上估價、新手指南、關於我們等），以提升可維護性與使用者體驗。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/路由系統/路由系統.png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"axios(資料傳輸)",
                                            key:"axios(資料傳輸)",
                                            frontWebPageData:<AxiosData />,
                                            frontWebPageTitle:"Redux 資料管理與 API 傳輸（State Management & Data Flow）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案使用 Redux Toolkit 作為全域資料儲存中心，搭配 Axios 與後端 API 進行資料交換，確保使用者登入狀態、會員資料與訂單資訊在整個網站中一致且可追蹤。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/資料存處&AXIOS/Redux(資料存儲).png`,
                                                }
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"RWD功能",
                                            key:"RWD功能",
                                            frontWebPageData:<RWDData />,
                                            frontWebPageTitle:"響應式網頁設計（Responsive Web Design）",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"本網站採用 RWD 響應式設計，確保在桌機、平板與手機等不同螢幕尺寸下皆能自適應顯示，維持一致的視覺體驗與操作邏輯。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/RWD/rwd01.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/RWD/rwd02.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/RWD/rwd03.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                        {
                                            title:"GIT多人協作專案",
                                            key:"GIT多人協作專案",
                                            frontWebPageData:<GitHubData />,
                                            frontWebPageTitle:"GitHub 多人協作與版本控制流程",
                                            frontWebPageLink:null,
                                            frontWebPageLinkName:null,
                                            frontWebPageText:"專案採用 Git + GitHub 分支管理機制 進行版本控制與協作。每位開發者在自己的分支上開發功能，確認無誤後再合併至主分支，確保主線穩定與可隨時部署。",
                                            frontWebImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/GITHUB/GitHub專案流程.png`,
                                                },
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/GITHUB/01.png`,
                                                },
                                            ],
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false
                            },
                            {
                                title:"伺服器端介紹",
                                key:"伺服器端介紹",
                                pageData:<ServerPage />,
                                pageDataTitle:"Server 架構說明（Express.js + PostgreSQL）",
                                pageDataLink:null,
                                pageDataLinkName:null,
                                pageDataText:"此伺服器以 Node.js + Express 為基礎，採用模組化架構設計，將各功能依職責劃分層次。每一層都負責特定任務，讓專案在維護、除錯與擴充上更有彈性與可讀性。",
                                pageDataImg:[
                                    {
                                        img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/伺服器端/Server.png`,
                                    },
                                ],
                                disabled: false,
                            },
                            {
                                title:"資料庫端介紹",
                                key:"資料庫端介紹",
                                pageData:<PostgreSQLPage />,
                                pageDataTitle:"資料庫結構說明（PostgreSQL）",
                                pageDataLink:null,
                                pageDataLinkName:null,
                                pageDataText:"本系統以 PostgreSQL 為主要資料庫，採用關聯式設計，將使用者、訂單、購物車、訊息與會員資料清楚拆分。各資料表透過外鍵（Foreign Key）建立關聯，確保資料一致性並方便擴充查詢。",
                                pageDataImg:[
                                    {
                                        img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/資料庫端/資料庫.png`,
                                    },
                                ],
                                disabled: false,
                            },
                            {
                                title:"Demo",
                                key:"Demo",
                                pageData:<DemoPage />,
                                pageDetailData: {
                                    pageImg: null,
                                    detailData: null,
                                    tabData:[
                                        {
                                            title:"使用者端",
                                            key:"使用者端",
                                            DemoPage:<UserSide />,
                                            DemoPageTitle:"Come_Buy",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:null,
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/01.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/Come-Buy-team-work",
                                            DemoPageDemo:"https://a072682.github.io/Come-Buy-team-work/",
                                            disabled: false,
                                        },
                                        {
                                            title:"管理者端(後台)",
                                            key:"管理者端(後台)",
                                            DemoPage:<ManagerSide />,
                                            DemoPageTitle:"Come_Buy(後台)",
                                            DemoPageLink:null,
                                            DemoPageLinkName:null,
                                            DemoPageText:"預設帳號:admin123@gmail.com/預設密碼:admin123",
                                            DemoPageImg:[
                                                {
                                                    img:`${import.meta.env.BASE_URL}images/desktop/作品/ComeBuyTeamWork/管理者端頁面.png`,
                                                },
                                            ],
                                            DemoPageGitHub:"https://github.com/a072682/Come-Buy-Back-team-work",
                                            DemoPageDemo:"https://a072682.github.io/Come-Buy-Back-team-work/",
                                            disabled: false,
                                        },
                                    ],
                                },
                                disabled: false,
                            },
                            {
                                title:"返回目錄",
                                key:"返回目錄",
                                pageData:"",
                                disabled: false,
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
