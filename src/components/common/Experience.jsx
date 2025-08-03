import React from 'react'
import './_Experience.scss';



function Experience ({userData,activeTab}){

    return(
        <>
            <div className='experience py-24'>
                <div className="container">
                    <div className='row'>
                        <div className='col'>
                            <div className='experience-title-box'>
                                <h2 className='title'>經歷</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='experience-bg'>
                                <div className='experience-line-box'>
                                    <div className='experience-line1'>
                                    {
                                        userData.navItem.find(item => item.title === activeTab).experience.map((item) => (
                                            <div key={item.id} className='experience-circle'>
                                                <div className={`${Number(item.id) % 2 === 0 ? 'experience-straightline2' : 'experience-straightline1'}`}>
                                                    <div className={`${Number(item.id) % 2 === 0 ? 'experience-img-box2' : 'experience-img-box1'}`}>
                                                    <img
                                                        src={item.img}
                                                        alt=""
                                                    />
                                                    </div>
                                                </div>
                                                <div className={`${Number(item.id) % 2 === 0 ? 'experience-text2' : 'experience-text1'}`}>
                                                    <time className='time' dateTime={item.time}>{item.time}</time>
                                                    <p className='text-place'>{item.place}</p>
                                                    <p className='text-position'>{item.position}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                    <div className='experience-line2'></div>
                                    <div className='experience-line3'></div>
                                    <div className='experience-line4'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Experience