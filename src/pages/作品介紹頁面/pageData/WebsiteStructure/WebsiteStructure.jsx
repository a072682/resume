

import { useParams } from 'react-router-dom';
import './_WebsiteStructure.scss';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../components/common/Context';
import { useSelector } from 'react-redux';




function WebsiteStructure() {

    //#region 資料來源

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

        useEffect(()=>{
            //console.log("框架資料:",frameData);
            //setOrderListData(allOrderData);
        },[frameData])
        //#endregion

        //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        //#endregion

    //#endregion

    //#region 處理顯示資料
        useEffect(()=>{
            handleWebsiteStructureData(userData);
            // console.log("單頁資料",userData);
        },[frameData]);
    //#endregion

    //#region websiteStructure頁面圖片狀態宣告
        const[websiteStructureImg,setWebsiteStructureImg]=useState(null);
        useEffect(()=>{
            //console.log("圖片資料:",websiteStructureImg);
        },[websiteStructureImg]);
    //#endregion

    //#region websiteStructure頁面圖片狀態宣告
        const[websiteStructureText,setWebsiteStructureText]=useState(null);
        useEffect(()=>{
            console.log("文字資料:",websiteStructureText);
        },[websiteStructureText]);
    //#endregion
        
    //#region 處理顯示資料函式
    const handleWebsiteStructureData = (input) => {
        let results = {};

        if(!input){
            console.log("來源資料為空");
            return;
        }

        input.navItem.map((item) => {
            if (item.title === "作品集") {
                item.portfolio.map((itemIn) => {
                    if (itemIn.title === id_portfolio) {
                        itemIn.framework.map((workData)=>{
                            if(workData.frameName === frameData){
                                workData.detail.map((detailPage)=>{
                                    if(detailPage.key === "作品整體架構"){
                                        results = {...detailPage};
                                        setWebsiteStructureImg(detailPage.pageDetailData.pageImg);
                                        setWebsiteStructureText(detailPage.pageDetailData.detailData);
                                    }else{
                                        console.log("作品整體架構頁面未搜尋到");
                                        return;
                                    }
                                })
                            }
                        })
                    }
                });
            }
        });

        return results;
    };
    //#endregion

    return (
        <>
            <div className="WebsiteStructure">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='structureImg-box mt-40'>
                                <img className='img-set' src={websiteStructureImg} alt="專案整體架構圖" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            websiteStructureText?.map((item)=>{
                                return(
                                    <div key={item.sectionId} className="col-12 col-lg-4 mx-auto">
                                        <div className='content-box mt-40'>
                                            <div className='title-box'>
                                                {
                                                    item.pageTitleContent?.map((title)=>{
                                                        return(
                                                            <h5 key={title} className='title-set'>{title}</h5>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <ul className='text-box'>
                                                {
                                                    item.pageTextContent?.map((text)=>{
                                                        return(
                                                            <li key={text.id} className='text-set'>{text.content}</li>
                                                        )
                                                    })
                                                }
                                            </ul> 
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}

export default WebsiteStructure

//說明搞
// 這個專案主要分成三個部分：前端網站、伺服器端、和 資料庫端。
// 使用者與管理者透過前端網站進行操作，前端使用 React 搭配 Vite 建構，版面以 HTML、SCSS、JavaScript (ES6+) 組成，並以 JSON 作為資料交換格式。
// 前端透過 Axios 發送請求，與伺服器端（Express）進行資料溝通。伺服器端以 Node.js 為執行環境，Express 負責 API 路由與邏輯實作，開發階段使用 Postman 測試 API，部署則使用 Render。
// 後端的資料則存放在 PostgreSQL 資料庫中，日常管理與查詢我使用 DBeaver 介面工具，資料庫同樣托管在 Render 上。
// 整體而言，這是一個典型的 React + Express + PostgreSQL 全端架構，前後端分離，並以雲端平台 Render 做部署與維運。