import { Parallax } from 'react-parallax';
import Astro from '../img/nasa3.jpg'

const ImageThree = () => (
    <Parallax className="image" bgImage={Astro} strength={800}>
        <div className="content">
            <span className="img-txt">Travel</span>
        </div>
    </Parallax>
);

export default ImageThree