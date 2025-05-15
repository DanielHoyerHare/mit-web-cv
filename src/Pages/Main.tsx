import './Main.css';
import '../Global.css';
import { getTranslation, useLanguage } from '../Language/LanguageContext';

function Main() {
    const { language } = useLanguage();
    return (
        <div className="page-container border-radius box-shadow">
            <div className="page-header">
                <h1 className="name">Daniel Høyer Hare</h1>
                <img className="pfp" src="/img/pfp.png" alt="English" />
            </div>
            <h1>{getTranslation('introduction', language)}</h1>
            <p className="testMargin">This is a simple React application.</p>
            <p className="testMargin">Modify the code to see live changes.</p>
            <p className="testMargin">Happy coding!</p>
            <p className="testMargin">Modify the code to see live changes.</p>
            <p className="testMargin">Happy coding!</p>
        </div>
    );
}

export default Main;