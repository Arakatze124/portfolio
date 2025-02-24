import "../styles/default.css"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Home1 from "../media/home2.jpg"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

export default function Home() {
    const [textIndex, setTextIndex] = useState(0)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const [counter, setCounter] = useState(0)

    const subtitles = [
        "Developer",
        "Athlete",
        "Student",
        "Musician",
        "Biker",
    
    ]

    const startCarousel = () => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
        
        tl.fromTo(subtitleRef.current, { opacity: 0, x: -100 }, { x: 0, opacity: 1, duration: 1, ease: "sine" }) // Step 2: Slide in subtitle
          .to(subtitleRef.current, { x: 100, opacity: 0, duration: 1, delay: 3, ease: "sine" }) // Step 4: Slide out subtitle
          .call(() => {
              // Step 5: Change text
              setTextIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
          })
    };
   
    useEffect(() => {
        gsap.fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay:1 });
       gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 1, onComplete: () => {
        startCarousel()} });
    }, [])

    return(
        <div>
            <Layout active={"home"}>
                <Banner
                    img={Home1}
                    title={"Dean Opara"}
                    titleRef={titleRef}
                    subtitle={subtitles[textIndex]}
                    subtitleRef={subtitleRef}
                />
            </Layout>
        </div>
    )
}
