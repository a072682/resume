

import { useParams } from 'react-router-dom';
import './_LayoutSkills.scss';
import { useUserData } from '../../../../../components/common/Context';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function LayoutSkills() {

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
            handleLayoutSkillsData(userData);
        },[frameData])
    //#endregion

    //#region LayoutSkills頁面標題狀態宣告
        const[layoutSkillsPageTitle,setLayoutSkillsPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",LayoutSkillsPageTitle);
        },[layoutSkillsPageTitle]);
    //#endregion

    //#region LayoutSkills頁面文字狀態宣告
        const[layoutSkillsPageText,setLayoutSkillsPageText]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",LayoutSkillsPageTitle);
        },[layoutSkillsPageText]);
    //#endregion

    //#region LayoutSkills頁面文字狀態宣告
        const[figmaTitle,setFigmaTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",LayoutSkillsPageTitle);
        },[figmaTitle]);
    //#endregion

    //#region LayoutSkills頁面文字狀態宣告
        const[figmaLink,setfigmaLink]=useState(null);
        useEffect(()=>{
            //console.log("連結資料:",figmaLink);
        },[figmaLink]);
    //#endregion

    //#region LayoutSkills頁面圖片狀態宣告
        const[layoutSkillsPageImg,setLayoutSkillsPageImg]=useState(null);
        useEffect(()=>{
            // console.log("Layout圖片資料:",layoutSkillsPageImg);
        },[layoutSkillsPageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleLayoutSkillsData = (input) => {
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
                                            detailItem.pageDetailData.tabData.map((layoutSkills)=>{
                                                if(layoutSkills.key === "切版能力"){
                                                    setLayoutSkillsPageTitle(layoutSkills.frontWebPageTitle);
                                                    setLayoutSkillsPageText(layoutSkills.frontWebPageText);
                                                    setFigmaTitle(layoutSkills.frontWebPageLinkName);
                                                    setfigmaLink(layoutSkills.frontWebPageLink);
                                                    setLayoutSkillsPageImg(layoutSkills.frontWebImg);
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
        <div className="LayoutSkills"> 
            <div className="container">
                <div className="row">
                    <div className='col-12'>
                        <div className='title-box'>
                            <h5 className='title-set'>{layoutSkillsPageTitle}</h5>
                        </div>
                        <div className='link-box'>
                            <a  className='link-set' 
                                href={figmaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {figmaTitle}
                            </a>
                        </div>
                        <div className='text-box'>
                            <p className='text-set'>{layoutSkillsPageText}</p>
                        </div>
                        <div className='img-box'>
                            <img className="img-set" src={layoutSkillsPageImg?.[0].img} alt="img" />
                        </div>
                    </div>
                    {
                        layoutSkillsPageImg?.slice(1,10).map((item)=>{
                            return(
                                
                                <div key={item.img} className="col-4 mt-24 mx-auto">
                                    <div className='img-item-box'>
                                        <img className="img-set" src={item.img} alt="img" />
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

export default LayoutSkills

