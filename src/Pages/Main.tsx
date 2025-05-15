import './Main.css';
import '../Global.css';
import { getTranslation, useLanguage } from '../Language/LanguageContext';

function Main() {
    const { language } = useLanguage();
    return (
        <div className="page-container border-radius box-shadow">
            <div className="page-header box-shadow2">
                <h1 className="name">Daniel Høyer Hare</h1>
                <img className="pfp" src="/img/pfp.png" alt="English" />
            </div>

            <div className="section">
                <h1>{getTranslation('introductionTitle', language)}</h1>
                <p className="gap">{getTranslation('introductionText', language)}</p>
            </div>

            <div className="section">
                <h1>{getTranslation('workTitle', language)}</h1>
                <div className="item-container">

                    <div className="work box-shadow2">
                        <h3>{getTranslation('work3Title', language)}</h3>
                        <div className="item-container">
                            <h6>{getTranslation('work3Place', language)}</h6>
                            <h6>{getTranslation('work3Date', language)}</h6>
                        </div>
                        <h4>{getTranslation('tasksTitle', language)}:</h4>
                        <p>{getTranslation('work3Tasks', language)}</p>
                        <h4>{getTranslation('skillsTitle', language)}:</h4>
                        <p>{getTranslation('work3Skills', language)}</p>
                    </div>

                    <div className="work box-shadow2">
                        <h3>{getTranslation('work2Title', language)}</h3>
                        <div className="item-container">
                            <h6>{getTranslation('work2Place', language)}</h6>
                            <h6>{getTranslation('work2Date', language)}</h6>
                        </div>
                        <h4>{getTranslation('tasksTitle', language)}:</h4>
                        <p>{getTranslation('work2Tasks', language)}</p>
                        <h4>{getTranslation('skillsTitle', language)}:</h4>
                        <p>{getTranslation('work2Skills', language)}</p>
                    </div>

                    <div className="work box-shadow2">
                        <h3>{getTranslation('work1Title', language)}</h3>
                        <div className="item-container">
                            <h6>{getTranslation('work1Place', language)}</h6>
                            <h6>{getTranslation('work1Date', language)}</h6>
                        </div>
                        <h4>{getTranslation('tasksTitle', language)}:</h4>
                        <p>{getTranslation('work1Tasks', language)}</p>
                        <h4>{getTranslation('skillsTitle', language)}:</h4>
                        <p>{getTranslation('work1Skills', language)}</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h1>{getTranslation('educationTitle', language)}</h1>
                <div className="education">
                    <h3>{getTranslation('educationTitle2', language)}</h3>
                    <h6>{getTranslation('educationPlace', language)} | {getTranslation('educationDate', language)}</h6>
                    <p className="gap">{getTranslation('educationText', language)}</p>
                </div>
            </div>
        </div>
    );
}

export default Main;