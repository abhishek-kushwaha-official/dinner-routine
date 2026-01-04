import { Link } from 'react-router-dom';
import hmImg from '../asset/images/hm.png';
import formImg from '../asset/images/form.svg';
import './MainNavigation.css';

export default function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <div className='imgdiv'>
                        <li>
                            <div>
                                <img src={hmImg} alt="home image" className='imge' />
                                <Link to="/">Home</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={formImg} alt="form image" className='imge' />
                                <Link to="/form-page">Form Application</Link>
                            </div>

                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}