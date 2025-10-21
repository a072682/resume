

import { useEffect, useState } from 'react';
import './_PostgreSQLPage.scss';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../../../components/common/Context';


function PostgreSQLPage() {

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{console.log("id:",id_portfolio)},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
    //#endregion

    //#region 處理顯示資料
        useEffect(()=>{
            handlePostgreSQLPageData(userData);
            // console.log("單頁資料",userData);
        },[userData]);
    //#endregion

    //#region websiteStructure頁面標題狀態宣告
        const[postgreSQLPageTitle,setPostgreSQLPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",websiteStructureImg);
        },[postgreSQLPageTitle]);
    //#endregion

    //#region websiteStructure頁面圖片狀態宣告
        const[postgreSQLPageImg,setPostgreSQLPageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",websiteStructureImg);
        },[postgreSQLPageImg]);
    //#endregion

    //#region websiteStructure頁面文字狀態宣告
        const[postgreSQLPageText,setPostgreSQLPageText]=useState(null);
        useEffect(()=>{
            // console.log("文字資料:",websiteStructureText);
        },[postgreSQLPageText]);
    //#endregion
        
    //#region 處理顯示資料函式
        const handlePostgreSQLPageData = (input) => {

            if(!input){
                console.log("來源資料為空");
                return;
            }

            input.navItem.map((item) => {
                if (item.title === "作品集") {
                    item.portfolio.map((itemIn) => {
                        if (itemIn.title === id_portfolio) {
                            itemIn.detail.map((detailPage)=>{
                                if(detailPage.key === "資料庫端介紹"){
                                    detailPage.pageDataImg?.map((imgData)=>{
                                        setPostgreSQLPageImg(imgData.img);
                                    })
                                    setPostgreSQLPageTitle(detailPage.pageDataTitle);
                                    setPostgreSQLPageText(detailPage.pageDataText);
                                }else{
                                    console.log("資料庫端介紹頁面未搜尋到");
                                    return;
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
        <div className="PostgreSQLPage"> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='title-box'>
                            <h5 className='title-set'>{postgreSQLPageTitle}</h5>
                        </div>
                        <div className='text-box'>
                            <p className='text-set'>{postgreSQLPageText}</p>
                        </div>
                        <div className='img-box'>
                            <img className="img-set" src={postgreSQLPageImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default PostgreSQLPage

