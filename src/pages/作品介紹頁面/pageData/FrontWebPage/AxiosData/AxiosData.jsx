

import { useParams } from 'react-router-dom';
import './_AxiosData.scss';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../../components/common/Context';
import { useSelector } from 'react-redux';


function AxiosData() {

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
        useEffect(()=>{
            handleAxiosData(userData);
        },[frameData])
    //#endregion

    //#region AxiosData頁面標題狀態宣告
        const[axiosDataPageTitle,setAxiosDataPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",AxiosDataPageTitle);
        },[axiosDataPageTitle]);
    //#endregion

    //#region AxiosData頁面文字狀態宣告
        const[axiosDataPageText,setAxiosDataPageText]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",AxiosDataPageTitle);
        },[axiosDataPageText]);
    //#endregion

    //#region AxiosData頁面圖片狀態宣告
        const[axiosDataPageImg,setAxiosDataPageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",AxiosDataPageImg);
        },[axiosDataPageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleAxiosData = (input) => {
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
                                            detailItem.pageDetailData.tabData.map((axiosData)=>{
                                                if(axiosData.key === "axios(資料傳輸)"){
                                                    setAxiosDataPageTitle(axiosData.frontWebPageTitle);
                                                    setAxiosDataPageText(axiosData.frontWebPageText);
                                                    axiosData.frontWebImg.map((axiosDataImg)=>{
                                                        setAxiosDataPageImg(axiosDataImg.img);
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
        <div className="AxiosData"> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='title-box'>
                            <h5 className='title-set'>{axiosDataPageTitle}</h5>
                        </div>
                        <div className='text-box'>
                            <p className='text-set'>{axiosDataPageText}</p>
                        </div>
                        <div className='img-box'>
                            <img className="img-set" src={axiosDataPageImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default AxiosData

