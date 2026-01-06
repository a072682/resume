

import { useEffect } from 'react';
import { useUserData } from '../../../components/common/Context';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './_NewExperience.scss';



function 目前經歷 (){

    //#region 
    //#endregion
    
    //#region 
        const navigate = useNavigate();
    //#endregion

    const userData = [
        {   
            id:1,
            projectType:"個人專案",
            title:"Vivre旅遊資訊網頁",
            img:`/images/作品集/Vivre旅遊資訊網頁/web-img01-02.png`,
        },
        {   
            id:2,
            projectType:"個人專案",
            title:"LEARNING學習平台",
            img:`/images/作品集/LEARNING線上學習平台/web-img02-02.png`,
        },
        {   
            id:3,
            projectType:"個人專案",
            title:"品牌形象網站",
            img:`/images/作品集/品牌形象網站/web-img03.png`,
        },
        {   
            id:4,
            projectType:"個人專案",
            title:"服裝購物形象網站",
            img:`/images/作品集/服裝購物形象網站/web-img04-02.png`,
        },
        {   
            id:5,
            projectType:"團隊專案",
            title:"ComeBuyTeamWork",
            img:`/images/作品集/ComeBuyTeamWork/web-img06-02.png`,
        },
        {   
            id:6,
            projectType:"個人專案",
            title:"異環技術複現網站",
            img:`/images/作品集/異環技術複現網站/預覽畫面.png`,
        },
    ]

    return(
        <>
            {/* 作品最外圍 */}
            <div className='目前經歷'>
                {/* 內容區塊 */}
                <div className='contentBox'>

                    {/* 左邊裝飾區塊 */}
                    <div className='firstItem'>
                        <div className='itemBox'>
                            <div className='firstTextSet'>目前經歷</div>
                            <div className='firstBigCircle'>
                                <div className='firstBigCircleIn'></div>
                            </div>
                            <div className='firstXLine'></div>
                            <div className='firstLittleCircle'></div>
                            <div className='firstYLine'></div>
                        </div>
                    </div>
                    {/* 左邊裝飾區塊 */}

                    {/* 作品集列表 */}
                    <div className="card-item-box centered-swiper">
                        {/* 輪播本體 */}
                        <Swiper
                            className='swiper'
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            //centeredSlides={true}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            breakpoints={{
                                992: {
                                    spaceBetween: 0,
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            {
                                userData?.map((item,num) => (
                                    <SwiperSlide key={num}>
                                        {/* 輪播頁面設定 */}
                                        <div className='card-item'>
                                            <div className='card-box'>
                                                <div className='card-bg'>
                                                    <div className='card-tag'>
                                                        <p className='tag-set'>{item.projectType}</p>
                                                    </div>
                                                    <div className='img-box'>
                                                        <img    className='img-set' 
                                                                src={item.img}
                                                                alt="專案圖片" />
                                                    </div>
                                                    <div className='card-title'>
                                                        <p className='title-set'>{item.title}</p>
                                                    </div>
                                                    <button className='card-btn-set' onClick={()=>{navigate(`/作品介紹頁面/${item.title}`);}}>
                                                        <p className='btn-text-set'>作品介紹</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='bottomSpace'>
                                                <div className='line'></div>
                                                <div className='circle'></div>
                                            </div>
                                        </div>
                                        {/* 輪播頁面設定 */}
                                    </SwiperSlide>
                                ))
                            }
                                {/* 左右頁按鈕 */}
                                <button className="swiper-button-prev">
                                    <span className="material-symbols-outlined">
                                        arrow_back
                                    </span>
                                </button>
                                <button className="swiper-button-next">
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button >
                                {/* 左右頁按鈕 */}
                                
                        </Swiper>
                        {/* 輪播本體 */}
                    </div>
                    {/* 作品集列表 */}
                </div>
                {/* 內容區塊 */}
            </div>
            {/* 作品最外圍 */}
        </>
    )
}
export default 目前經歷;



