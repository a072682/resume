

import { useParams } from 'react-router-dom';
import './_FrontWebStructure.scss';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../../components/common/Context';


function FrontWebStructure() {

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleFrontWebStructureData(userData);
        },[userData])
    //#endregion

    //#region FrontWebStructure頁面圖片狀態宣告
        const[frontWebStructurePageImg,setFrontWebStructurePageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",FrontWebStructurePageImg);
        },[frontWebStructurePageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleFrontWebStructureData = (input) => {
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
                                    detailItem.pageDetailData.tabData.map((frontWebStructure)=>{
                                        if(frontWebStructure.key === "前端架構"){
                                            frontWebStructure.frontWebImg.map((frontWebStructureImg)=>{
                                                setFrontWebStructurePageImg(frontWebStructureImg.img);
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
        <div className="FrontWebStructure"> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='img-box'>
                            <img className="img-set" src={frontWebStructurePageImg} alt="img" />
                        </div>
                        {/* <img src="/images/desktop/圖片/專案架構/前端專案模組架構圖2.png" alt="" /> */}
                        
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default FrontWebStructure

