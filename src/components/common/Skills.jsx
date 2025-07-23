import React from 'react'
import './_Skills.scss';


function Skills({userData,activeTab}){

  return(
    <>
      <section id="skills" className="my-24">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='skills-title'>
                <h2 className='col-0027D5'>技能</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {
              userData.navItem.find(item => item.title === activeTab).Skills.map((item) => {
                return(
                  <>
                    <div key={item.title} className="col-12 col-lg-3">
                      <div className="skill-group1 mt-12 px-12">
                        <h3 className="skill-title">{item.title}</h3>
                        <ul className="skill-list my-12">
                          {
                            item.item.map((itemIn)=>{
                              return(
                                <>
                                  <li key={itemIn}>{itemIn}</li>
                                </>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>  
        </div> 
      </section>
    </>
  )
  
}

export default Skills