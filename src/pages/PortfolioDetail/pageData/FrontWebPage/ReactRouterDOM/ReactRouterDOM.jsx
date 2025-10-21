

import { useParams } from 'react-router-dom';
import './_ReactRouterDOM.scss';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../../components/common/Context';


function ReactRouterDOM() {

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleRouterDOMData(userData);
        },[userData])
    //#endregion

    //#region RouterDOM頁面標題狀態宣告
        const[routerDOMPageTitle,setRouterDOMPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",RouterDOMPageTitle);
        },[routerDOMPageTitle]);
    //#endregion

    //#region RouterDOM頁面文字狀態宣告
        const[routerDOMPageText,setRouterDOMPageText]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",RouterDOMPageTitle);
        },[routerDOMPageText]);
    //#endregion

    //#region RouterDOM頁面圖片狀態宣告
        const[routerDOMPageImg,setRouterDOMPageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",RouterDOMPageImg);
        },[routerDOMPageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleRouterDOMData = (input) => {
            // const results = null;

            if(!input){
                console.log("來源資料為空");
                return;
            }

            input.navItem.map((navItem) => {
                if (navItem.title === "作品集") {
                    navItem.portfolio.map((itemIn) => {
                        if (itemIn.title === id_portfolio) {
                            itemIn.detail.map((detailItem)=>{
                                if(detailItem.key === "前端介紹"){
                                    detailItem.pageDetailData.tabData.map((routerDOM)=>{
                                        if(routerDOM.key === "路由系統"){
                                            setRouterDOMPageTitle(routerDOM.frontWebPageTitle);
                                            setRouterDOMPageText(routerDOM.frontWebPageText);
                                            routerDOM.frontWebImg.map((routerDOMImg)=>{
                                                setRouterDOMPageImg(routerDOMImg.img);
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });

            // return results;
        };
    //#endregion



  return (
    <>
        <div className="ReactRouterDOM"> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='title-box'>
                            <h5 className='title-set'>{routerDOMPageTitle}</h5>
                        </div>
                        <div className='text-box'>
                            <p className='text-set'>{routerDOMPageText}</p>
                        </div>
                        <div className='img-box'>
                            <img className="img-set" src={routerDOMPageImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default ReactRouterDOM

