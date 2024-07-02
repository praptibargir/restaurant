import "./Home.css"
import { siteDetails,features,theme } from "./../../data"
import FeatureCard from "../../components/FeatureCard/FeatureCard"

function Home() {
  return (
    <div>
      <h1 className="heading" style={{color:theme.primary}}>{siteDetails.title}</h1>
      <p className="desc">{siteDetails.description}</p>
      <div className="features">
        {
          features.map((feature,i)=>
          {
            const {title,img}= feature

            return(
                  <FeatureCard key={i} title={title} img={img} />
                )
            }
            )
          }
        </div>
    </div>
  );
}

export default Home