import "./Home.css"
import { siteDetails,features } from "../../data"

function Home() {
  return (
    <div>
        <h1>
            {siteDetails.title}
        </h1>
        <p>{siteDetails.description}</p>
    </div>
  )
}

export default Home