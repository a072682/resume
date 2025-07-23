import React from 'react'
import './_Portfolio.scss';
import { Link } from 'react-router-dom';


function Portfolio ({userData,activeTab}) {

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
              <div className='portfolio-cards-box'>

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
                                    <img className='link-icon-img' src="/images/desktop/icon/github.png" alt="" />
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
            </div>
          </div>  
        </div>
      </section>
    </>
  )
  
}

export default Portfolio;