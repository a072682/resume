import React from 'react'
import './_Skills.scss';


function 技能(){

  const userData = [
      {
          title:"Website",
          item:[
              "Html","CSS","JavaScript ES6+","React","Bootstrap5","Scss","Axios"
          ],
      },
      {
          title:"Tools",
          item:[
              "VisualStudioCode","PostgreSQL","DBeaver","Postman","Docker","Vite","GitHub"
          ],
      },
      {
          title:"Office",
          item:[
              "Word","Excel","PowerPoint",
          ],
      },
      {
          title:"語言",
          item:[
              "中文","英文(初級)","日文(N5)",
          ],
      },    
  ]

  return(
    <>
      <section id="skills" className="技能 py-24">
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
              userData.map((item) => {
                return(
                  
                  <div key={item.title} className="col-12 col-lg-3">
                    <div className="skill-group1 mt-12 px-12">
                      <h3 className="skill-title">{item.title}</h3>
                      <ul className="skill-list my-12">
                        {
                          item.item.map((itemIn)=>{
                            return(
                              
                              <li key={itemIn}>{itemIn}</li>
                              
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                  
                )
              })
            }
          </div>  
        </div> 
      </section>
    </>
  )
  
}

export default 技能

