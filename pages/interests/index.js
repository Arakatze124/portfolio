
import Carousel from "../../components/carousel";
import Animals from "./animals";
import Aviation from "./aviation";
import Bikes from "./bikes";
import Cooking from "./cooking";
import Media from "./media";
import Sports from "./sports";

export default function Root() {
  const items = [Animals, Aviation, Bikes, Cooking, Media, Sports];
   
    return (
        <>
      <div id="interests" className="title1 center gridi-center">Interests</div>
          <Carousel items={items}/>
        </>
    );
    }