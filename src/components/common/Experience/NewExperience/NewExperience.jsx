

import { useEffect } from 'react';
import { useUserData } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './_NewExperience.scss';



function NewExperience (){

    //#region 
    //#endregion
    
    //#region 
        const navigate = useNavigate();
    //#endregion

    //#region 解構userData
        const { userData } = useUserData();
    //#endregion

    //#region 更新userData資料
        useEffect(()=>{console.log("新經歷資料:",userData)});
    //#endregion

    return(
        <>
            <div className='NewExperience-bg'>
                <div className='experienceContent-box'>
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
                    {/* 桌面板作品集列表 */}
                    <div className='card-item-box d-none d-lg-flex'>
                        {
                            userData?.navItem.find(item => item.title === '作品集').portfolio.map((item,index) => {
                                return(
                                    <div key={index} className='card-item'>
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
                                                <button className='card-btn-set' onClick={()=>{navigate(`/Portfolio/${item.title}`);}}>
                                                    <p className='btn-text-set'>作品介紹</p>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='bottomSpace d-none d-lg-block'>
                                            <div className='line'></div>
                                            <div className='circle'></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* 桌面板作品集列表 */}

                    {/* 手機板作品集列表 */}
                    <div className="card-item-mg-box centered-swiper d-lg-none">
                        <Swiper
                            className='swiper'
                            modules={[Navigation]}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            spaceBetween={8}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            >
                            {
                                userData?.navItem.find(item => item.title === '作品集').portfolio.map((item,num) => (
                                    <SwiperSlide key={num}>
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
                                                    <button className='card-btn-set' onClick={()=>{navigate(`/Portfolio/${item.title}`);}}>
                                                        <p className='btn-text-set'>作品介紹</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='bottomSpace'>
                                                <div className='line'></div>
                                                <div className='circle'></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>))
                            }
                               
                                <button className="swiper-button-prev d-flex border-0 p-0 d-lg-none justify-content-center align-items-center">
                                    <span className="material-symbols-outlined">
                                        arrow_back
                                    </span>
                                </button>
                                <button className="swiper-button-next d-flex border-0 p-0 d-lg-none justify-content-center align-items-center">
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button >
                                
                        </Swiper>
                    </div>
                    {/* 手機板作品集列表 */}
                </div>
            </div>
        </>
    )
}
export default NewExperience;



