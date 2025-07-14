import React from 'react'
import { useLanguage } from '../components/LanguageContext';
import '../index.css';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="footer-contact">
                                        <h2 style={{ color: '#0099B1' }}>{t('ourAddress')}</h2>
                                        <a href=" ">
                                            <p style={{ color: '#333' }}>
                                                <i className="fa fa-map-marker" style={{ fontSize: '18px', color: '#0099B1' }}></i>
                                                г Алматы, Казахстан
                                            </p>
                                        </a>
                                        <p style={{ color: '#333' }}>
                                            <i className="fa fa-phone" style={{ fontSize: '20px', color: '#0099B1' }}></i>
                                            +7 778 7575075
                                        </p>
                                        <p style={{ color: '#333' }}>
                                            <i className="fa fa-envelope" style={{ color: '#0099B1' }}></i>
                                            info@sattiorganization.com
                                        </p>
                                        <div className="footer-social">
                                            <a href="" style={{ color: '#0099B1' }}>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.facebook.com" style={{ color: '#0099B1' }}>
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.youtube.com/channel" style={{ color: '#0099B1' }}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                            <a href="https://www.instagram.com" style={{ color: '#0099B1' }}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-link">
                                        <h2 style={{ color: '#0099B1' }}>{t('mainLinks')}</h2>
                                        <a href="/" style={{ color: 'white', display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                                            {t('home')}
                                        </a>
                                        <a href="/boxgenie" style={{ color: 'white', display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                                            {t('quickOrder')}
                                        </a>
                                        <a href="/contact" style={{ color: 'white', display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                                            {t('contacts')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="footer-newsletter">
                                <h2 style={{ color: '#0099B1' }}>{t('improveBetter')}</h2>
                                <div className="form">
                                    <p style={{ color: '#333' }}>
                                        {t('dontHesitate')}{' '}
                                        <a href="/contact">
                                            <button style={{
                                                backgroundColor: '#0099B1',
                                                color: 'white',
                                                border: 'none',
                                                padding: '8px 16px',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}>
                                                {t('contactUs')}
                                            </button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <p style={{ color: 'white' }}>
                            Copyright &copy; <a href="/" style={{ color: '#D9B075', textDecoration: 'none' }}>Sátti Organization</a>, All Rights Reserved.
                        </p>
                        <p style={{ color: 'white' }}>Designed By KassymNur</p>
                    </div>
                </div>
            </div>
        </div>
    )
}