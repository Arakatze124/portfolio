
import Carousel from "../../components/carousel";
import * as Animals from "./animals";
import * as Aviation from "./aviation";
import * as Bikes from "./bikes";
import * as Cooking from "./cooking";
import * as Media from "./media";
import * as Sports from "./sports";

export default function Root() {
  function resolve(mod) {
    if (mod && typeof mod.getData === "function") return mod.getData();
    if (mod && typeof mod.default === "function") {
      try {
        const v = mod.default();
        if (v && v.title && v.img && v.details) return v;
      } catch (e) {
        // default might be a React component that cannot be called here
      }
    }
    return null;
  }

  const items = [
    resolve(Animals),
    resolve(Aviation),
    resolve(Bikes),
    resolve(Cooking),
    resolve(Media),
    resolve(Sports),
  ].filter(Boolean);
   
    return (
        <>
      <div id="interests" className="title1 center gridi-center">Interests</div>
          <Carousel items={items}/>
        </>
    );
    }