import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './_RWDData.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUserData } from '../../../../../components/common/Context';
import { useSelector } from 'react-redux';


function RWDData() {

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
            handleRWDData(userData);
        },[frameData])
    //#endregion

    //#region RWDData頁面標題狀態宣告
        const[RWDDataPageTitle,setRWDDataPageTitle]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",RWDDataPageTitle);
        },[RWDDataPageTitle]);
    //#endregion

    //#region RWDData頁面文字狀態宣告
        const[RWDDataPageText,setRWDDataPageText]=useState(null);
        useEffect(()=>{
            // console.log("圖片資料:",RWDDataPageTitle);
        },[RWDDataPageText]);
    //#endregion

    //#region RWDData頁面圖片狀態宣告
        const[RWDDataPageImg,setRWDDataPageImg]=useState(null);
        useEffect(()=>{
            
        },[RWDDataPageImg]);
    //#endregion

    //#region 處理顯示資料函式
        const handleRWDData = (input) => {
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
                                            detailItem.pageDetailData.tabData.map((rwdData)=>{
                                                if(rwdData.key === "RWD功能"){
                                                    setRWDDataPageTitle(rwdData.frontWebPageTitle);
                                                    setRWDDataPageText(rwdData.frontWebPageText);
                                                    setRWDDataPageImg(rwdData.frontWebImg);
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
            <div className="RWDData"> 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='title-box'>
                                <h5 className='title-set'>{RWDDataPageTitle}</h5>
                            </div>
                            <div className='text-box'>
                                <p className='text-set mb-12'>{RWDDataPageText}</p>
                                <p className='text-set'>以下為部分頁面範例:</p>
                            </div>
                            <Swiper
                                className='h-100'
                                modules={[Navigation]}
                                slidesPerView={1}
                                centeredSlides={true}
                                loop={true}
                                spaceBetween={8}
                                navigation={{
                                    //左右頁按鈕
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                >
                                {
                                    RWDDataPageImg?.map((item,index) => (
                                        <SwiperSlide key={index}>
                                            <div className='w-100'>
                                                <div className="slide-item px-16 px-lg-0 d-flex flex-lg-column">
                                                    <div className='img-box'>
                                                        <img className="img-set" src={item.img} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                                {/* 左右頁按鈕 */}
                                <button className="swiper-button-prev d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                                    <span className="material-symbols-outlined">
                                        arrow_back
                                    </span>
                                </button>
                                <button className="swiper-button-next d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button >
                            </Swiper>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default RWDData

