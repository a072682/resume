

import './_OldExperience.scss';

// 



function 過去經歷 (){

    const userData = [
        {   
            id:1,
            img:`/images/經歷/過去經歷/ExperienceImg01.jpg`,
            time:"2015/6",
            place:"國立臺北科技大學",
            position:"畢業",
        },
        {   
            id:2,
            img:`/images/經歷/過去經歷/ExperienceImg02.jpg`,
            time:"2013/7 ~ 2016/10",
            place:"唐碩科技",
            position:"電子安規工程師",
        },
        {   
            id:3,
            img:`/images/經歷/過去經歷/ExperienceImg03.jpg`,
            time:"2018/10 ~ 2023/8",
            place:"中研科技",
            position:"EMC測試工程師",
        },
        {   
            id:4,
            img:`/images/經歷/過去經歷/ExperienceImg04.jpg`,
            time:"2023/8 ~ 2023/11",
            place:"東研信超",
            position:"EMC測試工程師",
        },
        {   
            id:5,
            img:`/images/經歷/過去經歷/ExperienceImg05.jpg`,
            time:"2024/4 ~ 2025/3",
            place:"環球認證",
            position:"EMC測試工程師",
        },
        {   
            id:6,
            img:`/images/經歷/過去經歷/ExperienceImg06.jpg`,
            time:"2024/3 ~ 2025/6",
            place:"六角學院",
            position:"前端線上受訓",
        },
    ]

    return(
        <>
            {/* 元件最外圍 */}
            <div className='過去經歷'>
                {/* 內容區塊 */}
                <div className='experience-line-box'>
                    {/* 主要線段設定 */}
                    <div className='experience-line1'>
                    {
                        userData.map((item) => (
                            // 圓圈設定
                            <div key={item.id} className='experience-circle'>
                                {/* 橫線設定 */}
                                <div className={`${Number(item.id) % 2 === 0 ? 'experience-straightline2' : 'experience-straightline1'}`}>
                                    {/* 圖片設定 */}
                                    <div className={`${Number(item.id) % 2 === 0 ? 'experience-img-box2' : 'experience-img-box1'}`}>
                                        <img
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    {/* 圖片設定 */}
                                </div>
                                {/* 橫線設定 */}

                                {/* 文字設定 */}
                                <div className={`${Number(item.id) % 2 === 0 ? 'experience-text2' : 'experience-text1'}`}>
                                    <time className='time' dateTime={item.time}>{item.time}</time>
                                    <p className='text-place'>{item.place}</p>
                                    <p className='text-position'>{item.position}</p>
                                </div>
                                {/* 文字設定 */}

                            </div>
                            // 圓圈設定
                        ))
                    }
                    </div>
                    {/* 主要線段設定 */}

                    {/* 尾段線段設定 */}
                    <div className='experience-line2'></div>
                    <div className='experience-line3'></div>
                    <div className='experience-line4'></div>
                    {/* 尾段線段設定 */}
                </div>
                {/* 內容區塊 */}
            </div>
            {/* 元件最外圍 */}
        </>
    )
}
export default 過去經歷;



