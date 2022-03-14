import { Parallax } from 'react-parallax';
import Space from '../img/nasa2.jpg'

const ImageTwo = () => (
    <Parallax className="image" bgImage={Space} strength={800}>
        <div className="content">
            <span className="img-txt">Space</span>
        </div>
    </Parallax>
);

export default ImageTwo