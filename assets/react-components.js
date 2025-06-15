'use strict';

const { useState, useEffect, useRef, useMemo } = React;
gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 10,
  containerClassName = "",
  textClassName = "",
  rotationStart = "top center",
  rotationEnd = "bottom center",
  wordAnimationStart = "top center",
  wordAnimationEnd = "center center"
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children !== 'string') {
      return [];
    }
    const lines = children.split('\n');
    return lines.flatMap((line, lineIndex) => {
      const words = line.split(/(\s+)/).map((word, wordIndex) => {
        if (['simplicité', 'rapide', 'sécurisé', 'cryptage',].includes(word.toLowerCase().replace(/[^a-z\u00E0-\u00FC]/g, ""))) {
          return (
            <span key={`word-${lineIndex}-${wordIndex}`} className="word">
              <mark className="surligne-mark">{word}</mark>
            </span>
          );
        }
        if (word.match(/^\s+$/)) {
          return word;
        }
        return (
          <span key={`word-${lineIndex}-${wordIndex}`} className="word">
            {word}
          </span>
        );
      });
      if (lineIndex < lines.length - 1) {
        words.push(<br key={`br-${lineIndex}`} />);
      }
      return words;
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !window.gsap) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const animations = [];

    animations.push(gsap.fromTo(
      el,
      { transformOrigin: "0% 70%", rotate: baseRotation },
      { ease: "none", rotate: 0, scrollTrigger: { trigger: el, scroller, start: rotationStart, end: rotationEnd, scrub: true } }
    ));

    const wordElements = el.querySelectorAll(".word");
    
    animations.push(gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      { ease: "none", opacity: 1, stagger: 0.05, scrollTrigger: { trigger: el, scroller, start: wordAnimationStart, end: wordAnimationEnd, scrub: true } }
    ));

    if (enableBlur) {
      animations.push(gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        { ease: "none", filter: "blur(0px)", stagger: 0.05, scrollTrigger: { trigger: el, scroller, start: wordAnimationStart, end: wordAnimationEnd, scrub: true } }
      ));
    }

    return () => {
      animations.forEach(anim => anim.scrollTrigger.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationStart, rotationEnd, wordAnimationStart, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

const ScrollRevealApp = () => {
  return (
    <ScrollReveal>
      {`Découvrez la simplicité d'achat de vos recharges ItPCS en points de vente.\n\nProfitez d'un paiement rapide et sécurisé,\nsans avoir à partager vos informations bancaires.\n\nGrâce à notre technologie de cryptage avancé,\nvos transactions sont entièrement protégées.`}
    </ScrollReveal>
  );
};

const TestimonialCarousel = () => {
    const testimonials = [
        { text: "Un service exceptionnel.", author: "Mark John" },
        { text: "Une expérience d'achat en ligne facile et rapide.", author: "Jaison Warner" },
        { text: "Achat de billets très simple! Je suis très satisfait de mon expérience.", author: "Tony Antonio" },
        { text: "J'adore!", author: "John Fortnite" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 4000); // Change toutes les 4 secondes

        return () => clearInterval(intervalId);
    }, [testimonials.length]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="testimonial-viewport">
            {/* La prop 'key' force la re-création du div, ce qui relance l'animation */}
            <div key={currentIndex} className="testimonial-content">
                <p>{currentTestimonial.text}</p>
                <p><b>- {currentTestimonial.author} -</b></p>
            </div>
            <style>
              {`
                @keyframes slide-in-left {
                  0% {
                    opacity: 0;
                    transform: translateX(-30px);
                  }
                  20% {
                    opacity: 1;
                    transform: translateX(0);
                  }
                  80% {
                    opacity: 1;
                    transform: translateX(0);
                  }
                  100% {
                    opacity: 0;
                    transform: translateX(30px);
                  }
                }

                .testimonial-viewport {
                  position: relative;
                  text-align: center;
                  height: 100px; /* Hauteur fixe pour éviter les sauts de page */
                  overflow: hidden; /* Cache les éléments qui sortent */
                }

                .testimonial-content {
                  position: absolute;
                  width: 100%;
                  animation: slide-in-left 4s ease-in-out forwards;
                }
              `}
            </style>
        </div>
    );
};


const scrollRevealContainer = document.getElementById('scroll-reveal-root');
if (scrollRevealContainer) {
    const scrollRevealRoot = ReactDOM.createRoot(scrollRevealContainer);
    scrollRevealRoot.render(<ScrollRevealApp />);
}

const testimonialContainer = document.getElementById('testimonial-root');
if (testimonialContainer) {
    const testimonialRoot = ReactDOM.createRoot(testimonialContainer);
    testimonialRoot.render(<TestimonialCarousel />);
}