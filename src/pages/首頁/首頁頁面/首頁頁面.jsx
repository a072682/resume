
import './_IndexMainIntro.scss';
import { Link } from 'react-router-dom';



function 首頁頁面() {

    const userData = {
        name:"余亮言",
        img:`/images/desktop/USER-ID.png`,
        imgSm:`/images/desktop/USER-ID-sm.png`,
        englishName:"Andy Yu",
        phone:"0968630133",
        email:"a072682@gmail.com",
        navItem:[
            {
                title:"經歷",
            },
            {
                title:"作品集",
            },
            {
                title:"技能",   
            },
        ]
    }


  return (
    <>
        {/* 元件最外圍 */}
        <article className='首頁頁面'>
            {/* 背景 */}
            <div className='首頁頁面-bg'></div>
            {/* 背景 */}

            {/* 內容 */}
            <div className='首頁頁面-content'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            {/* 頭貼區塊設定 */}
                            <div className='AvatarImgBox d-flex justify-content-center align-items-center'>
                                {/* 頭貼設定 */}
                                <div className='imgBox'>
                                    <div className='box1'> 
                                        <picture>
                                            <source media="(max-width: 576px)" srcSet={userData.imgSm} />
                                            <img className="box2" src={userData.img} alt="頭像圖片" />
                                        </picture>
                                    </div>
                                </div>
                                {/* 頭貼設定 */}
                            </div>
                            {/* 頭貼區塊設定 */}
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* 內容區塊 */}
                            <div className='contentBox mt-24 mt-md-0 d-flex flex-column justify-content-center align-items-center align-items-lg-start row-gap-12'>

                                {/* 姓名區塊 */}
                                <div className='nameBox'>
                                    <p className='nameSet text-center text-xl-start fw-900 lh-15 fontFamily'>{userData.name}</p>
                                    <p className='nameSet d-none d-lg-block'>/</p>
                                    <p className='nameSet text-center text-xl-start fw-900 lh-15 fontFamily'>{userData.englishName}</p>
                                </div>
                                {/* 姓名區塊 */}

                                {/* 聯絡消息區塊 */}
                                <div className='contactBox d-flex flex-column justify-content-center align-items-center align-items-md-start row-gap-12'>

                                    {/* 電話設定 */}
                                    <div className='phoneBox d-flex justify-content-start align-items-center gap-12'>
                                        <span className="material-symbols-outlined fs-24">
                                            phone_enabled
                                        </span>
                                        <span className='fs-20'>{userData.phone}</span>
                                    </div>
                                    {/* 電話設定 */}
                                    
                                    {/* 信箱設定 */}
                                    <div className='mailBox d-flex justify-content-start align-items-center gap-12'>
                                        <span className="material-symbols-outlined fs-24">
                                            mail
                                        </span>
                                        <span className='fs-20'>{userData.email}</span>
                                    </div>
                                    {/* 信箱設定 */}

                                </div>
                                {/* 聯絡消息區塊 */}

                                {/* 選單區 */}
                                <div className="itemBox">
                                    {/* 履歷連結設定 */}
                                    <a  className='resumeLinkSet'
                                        href="https://drive.google.com/file/d/1K9QXa0rN8gQHbAAoD-kJRWy4gmwM8ha_/view"
                                        target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined fs-24 me-12">
                                                file_open
                                        </span>
                                        查看履歷
                                    </a>
                                    {/* 履歷連結設定 */}
                                    {
                                        userData.navItem.map((item,index)=>{
                                            return(
                                                /* 連結設定 */
                                                <Link   key={index}
                                                            className="itemBtnSet" 
                                                            to={item.title}>
                                                    {item.title}
                                                </Link>
                                                /* 連結設定 */
                                            )
                                        })
                                    }
                                </div>
                                {/* 選單區 */}
                            </div>
                            {/* 內容區塊 */}
                        </div>
                    </div>
                </div>
                
            </div>
            {/* 內容 */}
        </article>
        {/* 元件最外圍 */}
    </>
  );
}

export default 首頁頁面;