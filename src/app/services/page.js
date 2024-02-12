import Banner from "../../components/assets/Banner/Banner"
import Section1 from "../../components/services/section1"
import Choose from "@/components/services/choosesection"
import Engagement from "@/components/services/engagement"
export default function services( params ) {
    return (
        <div>
            <div className="h-screen">

                <Banner />
                <Section1 />
                <Choose />
                <Engagement/>
            </div>
        </div>
    )
}
