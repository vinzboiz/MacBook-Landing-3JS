import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Showcase = () => {

    const isTablet = useMediaQuery({query:'(max-width: 1024px)'});

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({ 
                scrollTrigger:{
                    trigger:'#showcase',
                    start:'top top',
                    end:'bottom top',
                    scrub:true, 
                    markers:true,
                    pin:true,
                }
             });

             timeline
             .to('.mask img', {
               transform:'scale(1.1)',
             }).to('.content',{opacity:1, y:0, ease:'power1.in'})
               

        }
    }, [isTablet])


    return (
        <section id="showcase">
            <div className="media">
               <video src="/videos/game.mp4" autoPlay muted loop playsInline  />
               <div className="mask">
                <img src="/mask-logo.svg"/>          
            </div>
        </div>


            <div className="content">
                <div className="wrapper">
                   <div className="lg:max-w-md">

                    <h2>Rocket Chip</h2>
                   </div>
                    <div className="space-y-5 mt-7 pe-10">
                         <p>
                            Introducing {" "}
                            <span className="text-white">
                                M4, the next generation of Apple silicon
                            </span>
                            . M4 powers
                         </p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Showcase;