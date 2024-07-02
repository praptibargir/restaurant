import "./Home.css"
import { siteDetails,features } from "./../../data"

function Home() {
  return (
    <div>
      <h1>{siteDetails.title}</h1>
      <p>{siteDetails.description}</p>
      <div className="features">
        {
          features.map((feature,i)=>
          {
            const {title,img}= feature

            return(
                  <div key={i}>
                    <img src={img} alt={title}/>
                    <p>{title}</p>
                  </div>
                )
            }
            )
          }
        </div>
    </div>
  )
}

export default Home