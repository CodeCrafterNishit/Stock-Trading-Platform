import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';

function HeroPage() {
    return ( 
        <div>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </div>
     );
}

export default HeroPage;