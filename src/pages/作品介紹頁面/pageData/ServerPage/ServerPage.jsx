

import { useEffect, useState } from 'react';
import './_ServerPage.scss';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../../../components/common/Context';
import { useSelector } from 'react-redux';


function ServerPage() {

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

    //#region 處理顯示資料
        useEffect(()=>{
            handleServerPageData(userData);
            // console.log("單頁資料",userData);
        },[frameData]);
    //#endregion

    //#region websiteStructure頁面圖片狀態宣告
        const[serverPageTitle,setServerPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",websiteStructureImg);
        },[serverPageTitle]);
    //#endregion

    //#region websiteStructure頁面圖片狀態宣告
        const[serverPageImg,setServerPageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",websiteStructureImg);
        },[serverPageImg]);
    //#endregion

    //#region websiteStructure頁面圖片狀態宣告
        const[serverPageText,setServerPageText]=useState(null);
        useEffect(()=>{
            // console.log("文字資料:",websiteStructureText);
        },[serverPageText]);
    //#endregion
        
    //#region 處理顯示資料函式
        const handleServerPageData = (input) => {

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
                                        if(detailPage.key === "伺服器端介紹"){
                                            detailPage.pageDataImg?.map((imgData)=>{
                                                setServerPageImg(imgData.img);
                                            })
                                            setServerPageTitle(detailPage.pageDataTitle);
                                            setServerPageText(detailPage.pageDataText);
                                        }else{
                                            console.log("伺服器端介紹頁面未搜尋到");
                                            return;
                                        }
                                    })
                                }
                            })
                        }
                    });
                }
            });

        };
    //#endregion



    return (
        <>
            <div className="ServerPage"> 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='title-box'>
                                <h5 className='title-set'>{serverPageTitle}</h5>
                            </div>
                            <div className='text-box'>
                                <p className='text-set'>{serverPageText}</p>
                            </div>
                            <div className='img-box'>
                                <img className="img-set" src={serverPageImg} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
  )
}

export default ServerPage

