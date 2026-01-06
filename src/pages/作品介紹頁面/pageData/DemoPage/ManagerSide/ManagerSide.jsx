

import { useEffect, useState } from 'react';
import './_ManagerSide.scss';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../../../../components/common/Context';


function ManagerSide() {

    //#region 取得id
        const { id_portfolio } = useParams();
        useEffect(()=>{},[id_portfolio]);
    //#endregion

    //#region 解構userData
        const { userData } = useUserData() ?? { userData: null };
        useEffect(()=>{
            handleManagerSideData(userData);
        },[userData])
    //#endregion

    //#region ManagerSide頁面標題狀態宣告
        const[managerSidePageTitle,setManagerSidePageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",ManagerSidePageTitle);
        },[managerSidePageTitle]);
    //#endregion

    //#region ManagerSide頁面圖片狀態宣告
        const[managerSidePageImg,setManagerSidePageImg]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",ManagerSidePageImg);
        },[managerSidePageImg]);
    //#endregion

    //#region ManagerSide頁面文字狀態宣告
        const[managerSidePageText,setManagerSidePageText]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",ManagerSidePageImg);
        },[managerSidePageText]);
    //#endregion

    //#region ManagerSide頁面GitHub狀態宣告
        const[managerSidePageGitHub,setManagerSidePageGitHub]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",ManagerSidePageImg);
        },[managerSidePageGitHub]);
    //#endregion

    //#region ManagerSide頁面Demo連結狀態宣告
        const[managerSidePageDemoLink,setManagerSidePageDemoLink]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",ManagerSidePageTitle);
        },[managerSidePageDemoLink]);
    //#endregion

    //#region 處理顯示資料函式
        const handleManagerSideData = (input) => {
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
                                    detailItem.pageDetailData.tabData.map((managerSide)=>{
                                        if(managerSide.key === "管理者端(後台)"){
                                            setManagerSidePageTitle(managerSide.DemoPageTitle);
                                            setManagerSidePageText(managerSide.DemoPageText);
                                            setManagerSidePageGitHub(managerSide.DemoPageGitHub);
                                            setManagerSidePageDemoLink(managerSide.DemoPageDemo);
                                            managerSide.DemoPageImg.map((managerSideImg)=>{
                                                setManagerSidePageImg(managerSideImg.img);
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
            <div className="ManagerSide">
                
                <div className='title-box'>
                    <h5 className='title-set'>{managerSidePageTitle}</h5>
                </div>
                <div className='text-box'>
                    <p className='text-set'>{managerSidePageText}</p>
                </div>
                <div className='img-box'>
                    <img className="img-set" src={managerSidePageImg} alt="img" />
                </div>
                <div className='link-box'>
                    <a href={managerSidePageGitHub} className='link-item' target="_blank" rel="noopener noreferrer">
                        <img className='link-icon-img' src={`${import.meta.env.BASE_URL}images/desktop/icon/github.png`} alt="" />
                        <p className='text'>GitHub</p> 
                    </a>
                    <a href={managerSidePageDemoLink} className='link-item' target="_blank" rel="noopener noreferrer">
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

export default ManagerSide

