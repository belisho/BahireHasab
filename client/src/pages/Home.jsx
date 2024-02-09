import {React} from "react"
import Card from './Card'

function Home(){
    return(
        <div className="Home">
            <Card 
                imageUrl="Images/logo.png"
                title="የኢትዮጵያ ዘመን አቆጣጠር"
                description="This is an example card."
            />
        </div>
    )
}

export default Home;