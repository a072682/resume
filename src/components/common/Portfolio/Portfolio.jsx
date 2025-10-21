import { useEffect } from 'react'
import './_Portfolio.scss';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'
import { useUserData } from '../Context';


function Portfolio ({activeTab}) {

  //#region 
  //#endregion

  const navigate = useNavigate();

  //#region 解構userData
      const { userData } = useUserData() ?? { userData: null };
  //#endregion

  //#region 更新userData資料
      useEffect(()=>{},[userData]);
  //#endregion

  return(
    <>
      <section id="portfolio" className="portfolio py-24">
        <div className="container">
          <div className="row ">
            <div className="col">
              <div className='portfolio-title-box mb-24'>
                <h2 className='title'>作品集介紹</h2>
              </div>
            </div>
          </div>
          {/* 手機板作品集列表 */}
          <div className="row d-flex d-lg-none">
            <div className="col-12">
              <div className='portfolio-cards-mb-box'>
                <Swiper
                  className='swiper'
                  modules={[EffectCoverflow, Navigation, Autoplay]}
                  slidesPerView={1}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 3000,      
                    disableOnInteraction: false, // 使用者操作後仍繼續輪播
                  }}
                  spaceBetween={24}
                  navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  }}
                  >
                  {userData.navItem.find(item => item.title === activeTab).portfolio.map((item,num) => (
                      <SwiperSlide key={num}>
                          <button key={item.title} className='portfolio-card border-0 p-0'
                                  onClick={()=>{navigate(`/Portfolio/${item.title}`);}}>
                            <div className='card-img-box'>
                              <img className="img" src={item.img} alt={item.title} />
                            </div>
                          </button>
                      </SwiperSlide>
                  ))}
                  <button className="swiper-button-prev border-0 p-0 d-flex justify-content-center align-items-center">
                      <span className="material-symbols-outlined">
                          arrow_back_ios_new
                      </span>
                  </button>
                  <button className="swiper-button-next border-0 p-0 d-flex justify-content-center align-items-center">
                      <span className="material-symbols-outlined">
                          arrow_forward_ios
                      </span>
                  </button >
                </Swiper>
                <div className='portfolio-mb-btn-box'>
                  {
                    userData.navItem.find(item => item.title === activeTab).portfolio.map((item,num) => (
                      <button key={item.title} className='portfolio-mb-btn border-0'
                              onClick={()=>{navigate(`/Portfolio/${item.title}`);}}>
                        <p className=''>{item.title}</p>
                      </button>
                    ))
                  }
                </div>
                
              </div>
            </div>
          </div>
          {/* 手機板作品集列表 */}

          {/* 桌面板作品集列表 */}
          <div className="row row-gap-24 d-none d-lg-flex">
                {
                  userData.navItem.find(item => item.title === activeTab).portfolio.map((item)=>{
                    return(
                        <div key={item.title} className="col-4">
                          <div className='portfolio-cards-box'>
                            <div key={item.title}  className='portfolio-card'>
                                <div className="row">
                                    <div className="col-12">
                                      <div className='card-img-box'>
                                        <img className="img" src={item.img} alt={item.title} />
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className='card-text-box'>
                                        <div className='tag-box'>
                                          <p className='tag'>{item.tag}</p>
                                        </div>
                                        <div className='title-box'>
                                          <h4 className='title'>{item.title}</h4>
                                        </div>
                                        <div className='link-box'>
                                          <button className='link-item' onClick={()=>{navigate(`/Portfolio/${item.title}`);}}>
                                            <p className='text'>作品介紹</p>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    )
                  })
                }
                
          </div> 
          {/* 桌面板作品集列表 */}
        </div>
      </section>
    </>
  )
  
}

export default Portfolio;