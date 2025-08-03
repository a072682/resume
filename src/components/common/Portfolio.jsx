import React from 'react'
import './_Portfolio.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'

function Portfolio ({userData,activeTab}) {

  const navigate = useNavigate();

  return(
    <>
      <section id="portfolio" className="portfolio my-24">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='portfolio-title-box'>
                <h2 className='title'>作品集</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className='portfolio-cards-box d-none d-lg-block'>
                {
                  userData.navItem.find(item => item.title === activeTab).portfolio.map((item)=>{
                    return(
                      <div key={item.title} className='portfolio-card'>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                              <div className='card-img-box'>
                                <img className="img" src={item.img} alt={item.title} />
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className='card-text-box'>
                                <div className='tag-box'>
                                  <p className='tag'>{item.tag}</p>
                                </div>
                                <div className='title-box'>
                                  <h4 className='title'>{item.title}</h4>
                                </div>
                                <div className='content-box'>
                                  {
                                    item.textContent.map((itemIn)=>{
                                      return(
                                        <p key={itemIn.id} className='content'>{itemIn.text}</p>
                                      )
                                    })
                                  }
                                </div>
                                <div className='link-box'>
                                  <a href={item.gitHub} className='link-item' target="_blank" rel="noopener noreferrer">
                                    <img className='link-icon-img' src={`${import.meta.env.BASE_URL}images/desktop/icon/github.png`} alt="" />
                                    <p className='text'>GitHub</p> 
                                  </a>
                                  <a href={item.demo} className='link-item' target="_blank" rel="noopener noreferrer">
                                    <span className="material-symbols-outlined link-icon">
                                            file_open
                                    </span>
                                    <p className='text'>Demo</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    )
                  })

                }
              </div>
              <div className='portfolio-cards-mb-box d-block d-lg-none'>
                <Swiper
                  className='h-100'
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
                      <span class="material-symbols-outlined">
                          arrow_back_ios_new
                      </span>
                  </button>
                  <button className="swiper-button-next border-0 p-0 d-flex justify-content-center align-items-center">
                      <span class="material-symbols-outlined">
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
        </div>
      </section>
    </>
  )
  
}

export default Portfolio;