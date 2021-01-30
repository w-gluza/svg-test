import React, { useState, useEffect, useRef } from "react";
import Map from "../assets/maps";
// import useIntersect from './useIntersect'

const Country = () => {
  const [pathL, setPathL] = useState(0);

  const path2 = {
    strokeDasharray: pathL,
    /* stroke-dashoffset: 1800; */
    animation: "dash 5s linear",
  };

  let cssProperties = {};
  cssProperties["--theNumber"] = pathL;

  const [startAnim, setStartAnim] = useState(false);

  function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)


  
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }, [])
  
    return isIntersecting
  }
  const ref = useRef()

  const onScreen = useOnScreen(ref)
  
  useEffect(() => {
    if (onScreen){
        setStartAnim(true)
    }
    if (onScreen===false){
        setStartAnim(false)
    }
  }, [onScreen])


  return (
    <div className="container">
      <div style={cssProperties}>
        <div className="map">
          <Map
            name="Kazakhstan"
            alt="Kazakhstan map"
            stroke="pink"
            // className={path2}
          className = {startAnim ? path2 : null}
            setPathL={setPathL}
          />
        </div>
      </div>
      <section>
      <article>
        <h2 id="paragraph1">Paragraph 1</h2>
        <p>
          Annoy the old grumpy cat, start a fight and then retreat to wash when
          i lose make meme, make cute face, and if human is on laptop sit on the
          keyboard for asdflkjaertvlkjasntvkjn (sits on keyboard). Plan your
          travel kitty scratches couch bad kitty i will ruin the couch with my
          claws. Nyan nyan goes the cat, scraaaaape scraaaape goes the walls
          when the cat murders them with its claws love you, then bite you push
          your water glass on the floor poop on grasses poop in the plant pot
          lay on arms while you're using the keyboard yet allways wanting food.
          Destroy house in 5 seconds damn that dog , for lick butt and make a
          weird face poop in the plant pot for poop on the floor, break a
          planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a
          squirrel, hide from fireworks, lick toe beans, attack christmas tree
          for play time, but chew on cable. Meow in empty rooms love pee in the
          shoe cry louder at reflection yet russian blue. Cats are cute missing
          until dinner time, or bathe private parts with tongue then lick
          owner's face so under the bed, bird bird bird bird bird bird human why
          take bird out i could have eaten that and pet me pet me pet me pet me,
          bite, scratch, why are you petting me so eat and than sleep on your
          face.
        </p>
      </article>
      <article>
        <h2 id="paragraph2">Paragraph 2</h2>
        <p>
          Annoy the old grumpy cat, start a fight and then retreat to wash when
          i lose make meme, make cute face, and if human is on laptop sit on the
          keyboard for asdflkjaertvlkjasntvkjn (sits on keyboard). Plan your
          travel kitty scratches couch bad kitty i will ruin the couch with my
          claws. Nyan nyan goes the cat, scraaaaape scraaaape goes the walls
          when the cat murders them with its claws love you, then bite you push
          your water glass on the floor poop on grasses poop in the plant pot
          lay on arms while you're using the keyboard yet allways wanting food.
          Destroy house in 5 seconds damn that dog , for lick butt and make a
          weird face poop in the plant pot for poop on the floor, break a
          planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a
          squirrel, hide from fireworks, lick toe beans, attack christmas tree
          for play time, but chew on cable. Meow in empty rooms love pee in the
          shoe cry louder at reflection yet russian blue. Cats are cute missing
          until dinner time, or bathe private parts with tongue then lick
          owner's face so under the bed, bird bird bird bird bird bird human why
          take bird out i could have eaten that and pet me pet me pet me pet me,
          bite, scratch, why are you petting me so eat and than sleep on your
          face.
        </p>
      </article>
      <article>
        <h2 id="paragraph3">Paragraph 3</h2>
        <p>
          Annoy the old grumpy cat, start a fight and then retreat to wash when
          i lose make meme, make cute face, and if human is on laptop sit on the
          keyboard for asdflkjaertvlkjasntvkjn (sits on keyboard). Plan your
          travel kitty scratches couch bad kitty i will ruin the couch with my
          claws. Nyan nyan goes the cat, scraaaaape scraaaape goes the walls
          when the cat murders them with its claws love you, then bite you push
          your water glass on the floor poop on grasses poop in the plant pot
          lay on arms while you're using the keyboard yet allways wanting food.
          Destroy house in 5 seconds damn that dog , for lick butt and make a
          weird face poop in the plant pot for poop on the floor, break a
          planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a
          squirrel, hide from fireworks, lick toe beans, attack christmas tree
          for play time, but chew on cable. Meow in empty rooms love pee in the
          shoe cry louder at reflection yet russian blue. Cats are cute missing
          until dinner time, or bathe private parts with tongue then lick
          owner's face so under the bed, bird bird bird bird bird bird human why
          take bird out i could have eaten that and pet me pet me pet me pet me,
          bite, scratch, why are you petting me so eat and than sleep on your
          face.
        </p>
      </article>
      </section>
      <div ref={ref}>{onScreen && "I'm on screen!"}</div>
    </div>
  );
};

export default Country;
