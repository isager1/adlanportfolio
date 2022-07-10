import { FaDownload } from 'react-icons/fa';
import pdf from './components/download/AdlanCV.pdf';
import './components/css/download.css';

const Mycv = (props) => {
return (
    <div className="downCont">
            <a href={pdf} download="AdlanCV.pdf"><FaDownload className='download' /></a>
    </div>

)

}

export default Mycv;