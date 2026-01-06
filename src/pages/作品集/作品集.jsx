import { useEffect } from 'react'
import './_Portfolio.scss';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'
import { useUserData } from '../../components/common/Context';


function 作品集 () {

  //#region 
  //#endregion

  const navigate = useNavigate();

  const userData = [
      {
        tag:"WEB",
        title:"Vivre旅遊資訊網頁",
        img:`/images/作品集/Vivre旅遊資訊網頁/web-img01-02.png`,
        textContent:[
            {
            id:1,
            text:"這是一個靜態旅遊相關資訊平台，主要提供旅遊的相關文章。",
            },
            {
            id:2,
            text:"此Demo包含首頁、所有文章、訂閱方案、購買流程、關於我們等顯示頁面，以及會員驗證 / 註冊、資料搜尋等功能。",
            },
            {
            id:3,
            text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
            },
            {
            id:4,
            text:"主要體現在切版上以及前端的功能運行的實現能力。",
            },
            {
            id:5,
            text:"預設帳號為admin123,密碼:admin123",
            },
        ],
        gitHub:"https://github.com/a072682/HomeWork-Week-6",
        demo:"https://a072682.github.io/HomeWork-Week-6/",
      },
      {
        tag:"WEB",
        title:"LEARNING學習平台",
        img:`/images/作品集/LEARNING線上學習平台/web-img02-02.png`,
        textContent:[
            {
            id:1,
            text:"這是一個靜態線上學習平台，主要提供多種的線上課程。",
            },
            {
            id:2,
            text:"此Demo包含首頁、所有文章、課程頁面購物車、購買流程、教師資訊等顯示頁面，以及會員驗證、資料搜尋等功能。",
            },
            {
            id:3,
            text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
            },
            {
            id:4,
            text:"主要體現在切版上以及前端的功能運行的實現能力。",
            },
            {
            id:5,
            text:"預設信箱為admin123@gmail.com,密碼:admin123",
            },
        ],
        gitHub:"https://github.com/a072682/HomeWork-Week-8",
        demo:"https://a072682.github.io/HomeWork-Week-8/",
      },
      {
        tag:"WEB",
        title:"品牌形象網站",
        img:`/images/作品集/品牌形象網站/web-img03.png`,
        textContent:[
            {
            id:1,
            text:"這是一個靜態品牌形象網站。",
            },
            {
            id:2,
            text:"此Demo包含首頁、部落格、閱讀內文等顯示頁面。",
            },
            {
            id:3,
            text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
            },
            {
            id:4,
            text:"主要體現在切版上的實現能力",
            },
        ],
        gitHub:"https://github.com/a072682/2025ExperienceCampHomeWork02",
        demo:"https://a072682.github.io/2025ExperienceCampHomeWork02/",
      },
      {
        tag:"WEB",
        title:"服裝購物形象網站",
        img:`/images/作品集/服裝購物形象網站/web-img04-02.png`,
        textContent:[
            {
            id:1,
            text:"這是一個服裝購物形象網站",
            },
            {
            id:2,
            text:"與服裝購物形象網站(後台)進行聯動",
            },
            {
            id:3,
            text:"使用六角學院所提供的前後端API與後台進行連接",
            },
            {
            id:4,
            text:"此Demo包含首頁、產品頁、產品細節頁、購物車、付費頁面等顯示頁面。",
            },
            {
            id:5,
            text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
            },
            {
            id:6,
            text:"主要體現在切版上以及使用API交互的實現能力",
            },
        ],
        gitHub:"https://github.com/a072682/ReactHomeWork-8-front",
        demo:"https://a072682.github.io/ReactHomeWork-8-front/",
      },
      {
        tag:"WEB",
        title:"ComeBuyTeamWork",
        img:`/images/作品集/ComeBuyTeamWork/web-img06-02.png`,
        textContent:[
            {
            id:1,
            text:"這是一個服裝購物形象網站(後台)。",
            },
            {
            id:2,
            text:"與服裝購物形象網站(前台)進行聯動",
            },
            {
            id:3,
            text:"使用六角學院所提供的前後端API與後台進行連接",
            },
            {
            id:4,
            text:"此Demo包含產品設定、訂單設定、優惠卷設定、登入 / 燈出等顯示頁面。",
            },
            {
            id:5,
            text:"可以對產品進行新增/修改/刪除並與前台網站進行聯動",
            },
            {
            id:6,
            text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
            },
            {
            id:7,
            text:"主要體現在切版上以及使用API交互的實現能力",
            },
            {
            id:8,
            text:"預設帳號信箱為admin123@gmail.com,密碼:admin123",
            },
        ],
        gitHub:"https://github.com/a072682/ReactHomeWork-8-back",
        demo:"https://a072682.github.io/ReactHomeWork-8-back/",
      },
      {
        tag:"WEB",
        title:"異環技術複現網站",
        img:`/images/作品集/異環技術複現網站/預覽畫面.png`,
        textContent:[
            {
            id:1,
            text:"這是一個服裝購物形象網站(後台)。",
            },
            {
            id:2,
            text:"與服裝購物形象網站(前台)進行聯動",
            },
            {
            id:3,
            text:"使用六角學院所提供的前後端API與後台進行連接",
            },
            {
            id:4,
            text:"此Demo包含產品設定、訂單設定、優惠卷設定、登入 / 燈出等顯示頁面。",
            },
            {
            id:5,
            text:"可以對產品進行新增/修改/刪除並與前台網站進行聯動",
            },
            {
            id:6,
            text:"使用 React 和 bootstrap,react-router,Redux-Toolkit,SCSS,Swiper,gh-pages等套件。",
            },
            {
            id:7,
            text:"主要體現在切版上以及使用API交互的實現能力",
            },
            {
            id:8,
            text:"預設帳號信箱為admin123@gmail.com,密碼:admin123",
            },
        ],
        gitHub:"https://github.com/a072682/ReactHomeWork-8-back",
        demo:"https://a072682.github.io/ReactHomeWork-8-back/",
      },
  ]

  return(
    <>
      {/* 元件最外圍 */}
      <section id="portfolio" className="作品集 py-24">
        <div className="container">
          <div className="row ">
            <div className="col">
              {/* 標題區塊 */}
              <div className='portfolio-title-box mb-24'>
                {/* 標題設定 */}
                <h2 className='title'>作品集介紹</h2>
                {/* 標題設定 */}
              </div>
              {/* 標題區塊 */}
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
                  {userData.map((item,num) => (
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
                    userData.map((item,num) => (
                      <button key={item.title} className='portfolio-mb-btn border-0'
                              onClick={()=>{navigate(`/作品介紹頁面/${item.title}`);}}>
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
                  userData.map((item)=>{
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
                                          <button className='link-item' onClick={()=>{navigate(`/作品介紹頁面/${item.title}`);}}>
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
      {/* 元件最外圍 */}
    </>
  )
  
}

export default 作品集;

