

import { useEffect, useState } from 'react';
import './_UserSide.scss';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../../../../components/common/Context';


function UserSide() {

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleUserSideData(userData);
        },[userData])
    //#endregion

    //#region UserSide頁面標題狀態宣告
        const[userSidePageTitle,setUserSidePageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",userSidePageTitle);
        },[userSidePageTitle]);
    //#endregion

    //#region UserSide頁面圖片狀態宣告
        const[userSidePageImg,setUserSidePageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",userSidePageImg);
        },[userSidePageImg]);
    //#endregion

    //#region UserSide頁面GitHub狀態宣告
        const[userSidePageGitHub,setUserSidePageGitHub]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",userSidePageImg);
        },[userSidePageGitHub]);
    //#endregion

    //#region UserSide頁面Demo連結狀態宣告
        const[userSidePageDemoLink,setUserSidePageDemoLink]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",userSidePageTitle);
        },[userSidePageDemoLink]);
    //#endregion

    //#region 處理顯示資料函式
        const handleUserSideData = (input) => {
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
                                if(detailItem.key === "Demo"){
                                    detailItem.pageDetailData.tabData.map((userSide)=>{
                                        if(userSide.key === "使用者端"){
                                            setUserSidePageTitle(userSide.DemoPageTitle);
                                            setUserSidePageGitHub(userSide.DemoPageGitHub);
                                            setUserSidePageDemoLink(userSide.DemoPageDemo);
                                            userSide.DemoPageImg.map((userSideImg)=>{
                                                setUserSidePageImg(userSideImg.img);
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
            <div className="UserSide">
                
                <div className='title-box'>
                    <h5 className='title-set'>{userSidePageTitle}</h5>
                </div>
                <div className='img-box'>
                    <img className="img-set" src={userSidePageImg} alt="img" />
                </div>
                <div className='link-box'>
                    <a href={userSidePageGitHub} className='link-item' target="_blank" rel="noopener noreferrer">
                        <img className='link-icon-img' src={`${import.meta.env.BASE_URL}images/desktop/icon/github.png`} alt="" />
                        <p className='text'>GitHub</p> 
                    </a>
                    <a href={userSidePageDemoLink} className='link-item' target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined link-icon">
                                file_open
                        </span>
                        <p className='text'>Demo</p>
                    </a>
                </div>
                         
            </div>
        </>
    )
}

export default UserSide

