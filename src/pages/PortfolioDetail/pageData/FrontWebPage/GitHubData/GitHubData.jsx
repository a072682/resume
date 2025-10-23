

import { useParams } from 'react-router-dom';
import './_GitHubData.scss';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../../components/common/Context';


function GitHubData() {

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleGitHubData(userData);
        },[userData])
    //#endregion

    //#region GitHubData頁面標題狀態宣告
        const[gitHubDataPageTitle,setGitHubDataPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",GitHubDataPageTitle);
        },[gitHubDataPageTitle]);
    //#endregion

    //#region GitHubData頁面文字狀態宣告
        const[gitHubDataPageText,setGitHubDataPageText]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",GitHubDataPageTitle);
        },[gitHubDataPageText]);
    //#endregion

    //#region GitHubData頁面圖片狀態宣告
        const[gitHubDataPageImg,setGitHubDataPageImg]=useState(null);
        useEffect(()=>{
            // console.log("git圖片資料:",gitHubDataPageImg);
        },[gitHubDataPageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleGitHubData = (input) => {
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
                                    detailItem.pageDetailData.tabData.map((gitHubData)=>{
                                        if(gitHubData.key === "GIT多人協作專案"){
                                            setGitHubDataPageTitle(gitHubData.frontWebPageTitle);
                                            setGitHubDataPageText(gitHubData.frontWebPageText);
                                            setGitHubDataPageImg(gitHubData.frontWebImg);
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
        <div className="GitHubData"> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='title-box'>
                            <h5 className='title-set'>{gitHubDataPageTitle}</h5>
                        </div>
                        <div className='text-box'>
                            <p className='text-set'>{gitHubDataPageText}</p>
                        </div>
                        <div className='img-box mt-24'>
                            {
                                gitHubDataPageImg?.map((img,index)=>{
                                    return(
                                        <img key={index} className="img-set" src={img.img} alt="img" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default GitHubData

