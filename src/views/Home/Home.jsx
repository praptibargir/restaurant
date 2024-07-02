import "./Home.css"
import { siteDetails } from "../../data"

function Home() {
  return (
    <div>
        <h1>
            {siteDetails.title}
        </h1>
    </div>
  )
}

export default Home