import "./Cards.scss"

import SVGPortraitDaniel from "../images/image-daniel.jpg"
import SVGPortraitWalter from "../images/image-jonathan.jpg"
import SVGPortraitJeanette from "../images/image-jeanette.jpg"
import SVGPortraitPatrick from "../images/image-patrick.jpg"
import SVGPortraitWhittle from "../images/image-kira.jpg"

import Card from "./Card"

const Cards = () => {
  return (
    <div className="cards">
      <Card 
          hasQuoteImage={true}
          size={2}
          image={SVGPortraitDaniel}
          color1="white"
          color2="var(--secondary-color)"
          bgColor="#a775f3"
          name="Daniel Clifford"
          message="I received a job offer mid-course, and the subject I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
          testimonial="I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signup for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most gruelling - time of my life. Since completing the course, I've successfully switched careers, wokring as s Software Engineer at a VR Startup."
        />

        <Card
          size={1}
          image={SVGPortraitWalter}
          color1="white"
          color2="var(--secondary-color)"
          bgColor="#49556b"
          name="Jonathan Walters"
          message="The time was very supportiveand kept me motivated"
          testimonial="I started as a total newbie with virtually no coding skills. I now work as a mobile engineeer for a big company. This one of the best investments I've made in myself."
        />

        <Card
          size={1}
          image={SVGPortraitJeanette}
          color1="#18202d"
          color2="#49556b"
          bgColor="white"
          name="Jeanette Harmon"
          message="An overall wonderful and rewarding experience"
          testimonial='"Thank you the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."'
        />

        <Card
          size={2}
          image={SVGPortraitPatrick}
          color1="white"
          color2="var(--secondary-color)"
          bgColor="#18202d"
          name="Patrick Abrams"
          message="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
          testimonial="The staff seem genuinely concerned about my progress which I findreally refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personnal attention you need from a incredible community of smart and amazing people."
        />

        <Card
          size={2}
          image={SVGPortraitWhittle}
          color1="#18202d"
          color2="#49556b"
          bgColor="white"
          name="Kira Whittle"
          message="Such a life-changing experience. Highly recommended!"
          testimonial="Before joining the bootcamp, I've never writing a line of code. I needed some strcuture from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can say wonderful things about the program. The entire curriculum and staf did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to my next level in a way that no tutorial could ever have. In fact, I've often reffered to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
        />
      
    </div>
  )
}

export default Cards