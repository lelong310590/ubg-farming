import {FC, useState, useEffect} from 'react'
import {Element} from 'react-scroll'
import language from './../../../../lang/lang.json'
import {useStore} from 'react-redux'
import {useSelector} from '../../../AppStores'
import {AppService} from "../../../services";

export const SectionHead: FC = () => {

    const store = useStore();
    const lang = useSelector(state => state.app.lang)

    const changeLang = (selectedLang) => {
        if (selectedLang === 'en') {
            AppService.setLang(language.en, store)
        } else {
            AppService.setLang(language.vi, store)
        }

        sessionStorage.setItem('language', selectedLang);
    }

    useEffect(() => {
        let sessionLang = sessionStorage.getItem('language');
        if (sessionLang !== null) {
            if (sessionLang === 'en') {
                AppService.setLang(language.en, store)
            } else {
                AppService.setLang(language.vi, store)
            }
        }
    })

    return (
        <Element name="SectionHead">
            <section className="SectionHead">
                <div className="container">
                    <div className="banner">
                        <div className="info">
                            <div className="info-change-language">
                                <a onClick={() => changeLang('en')}>English</a>
                                <a onClick={() => changeLang('vi')}>Vietnamese</a>
                            </div>
                            <h1 className="sectionTitle">{lang.hero_title}</h1>
                            <p className="sectionExcerpt" dangerouslySetInnerHTML={{ __html: lang.hero_excerpt }}/>
                        </div>
                        <img src="/images/head.png" alt=""/>
                    </div>
                </div>
            </section>
        </Element>
    )
}