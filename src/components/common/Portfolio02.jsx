import React, { useEffect, useState } from 'react'
import './_Portfolio02.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserData } from './Context';

function Portfolio02 () {

    const navigate = useNavigate();

    const { userData } = useUserData();

    const[portfolio02Data,setPortfolio02Data]=useState(null);

    useEffect(()=>{
       setPortfolio02Data(handlePortfolio02Data(userData));
    },[userData]);

    const { id_portfolio } = useParams();
    
    useEffect(()=>{},[id_portfolio]);

    useEffect(()=>{
       console.log("目前得到資料:",portfolio02Data);
    },[portfolio02Data]);

    const handlePortfolio02Data = (input) => {
        const results = [];

        input.navItem.map((item) => {
            if (item.title === "作品集") {
            item.portfolio.map((itemIn) => {
                if (itemIn.title === id_portfolio) {
                results.push(itemIn);
                }
            });
            }
        });

        return results;
    };

  return(
    <>
      <section id="portfolio02" className="portfolio02 my-24">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='portfolio-title-box'>
                <h2 className='title'>作品資訊</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className='portfolio-cards-box'>
                {
                  portfolio02Data?.map((item)=>{
                    return(
                      <div key={item.title} className='portfolio-card'>
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
                                    <button type='button' className='link-item border-0 me-auto' onClick={()=>{navigate("/");}}>
                                        <p className='text'>作品集列表</p>
                                    </button>
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
            </div>
          </div>  
        </div>
      </section>
    </>
  )
  
}

export default Portfolio02;