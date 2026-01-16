

import { useParams } from 'react-router-dom';
import './_FrontWebDetailStructure.scss';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../../components/common/Context';
import { useSelector } from 'react-redux';


function FrontWebDetailStructure() {

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
        },[frameData])
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleFrontWebDetailData(userData);
        },[frameData])
    //#endregion

    //#region FrontWebDetail頁面圖片狀態宣告
        const[frontWebDetailPageImg,setFrontWebDetailPageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",FrontWebDetailPageImg);
        },[frontWebDetailPageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleFrontWebDetailData = (input) => {
            // const results = null;

            if(!input){
                console.log("來源資料為空");
                return;
            }

            input.navItem.map((navItem) => {
                if (navItem.title === "作品集") {
                    navItem.portfolio.map((itemIn) => {
                        if (itemIn.title === id_portfolio) {
                            itemIn.framework.map((workData)=>{
                                if(workData.frameName === frameData){
                                    workData.detail.map((detailItem)=>{
                                        if(detailItem.key === "前端介紹"){
                                            detailItem.pageDetailData.tabData.map((frontWebDetail)=>{
                                                if(frontWebDetail.key === "專案架構"){
                                                    frontWebDetail.frontWebImg.map((frontWebDetailImg)=>{
                                                        setFrontWebDetailPageImg(frontWebDetailImg.img);
                                                    });
                                                }
                                            });
                                        }
                                    })
                                }
                            }) 
                        }
                    });
                }
            });

            // return results;
        };
    //#endregion


  return (
    <>
        <div className="FrontWebDetailStructure"> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='img-box'>
                            <img className="img-set" src={frontWebDetailPageImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default FrontWebDetailStructure

