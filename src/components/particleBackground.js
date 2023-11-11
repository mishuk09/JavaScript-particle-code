
import Particles from 'react-tsparticles';
import particlesConfig from './config/particle.config';

const particleBackground = () => {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>
            {/* <Particles params={particlesConfig}></Particles> */}
        </div>
    );
};

export default particleBackground;