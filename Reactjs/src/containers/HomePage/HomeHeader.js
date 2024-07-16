import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo-container'>
                                <div className='header-logo'></div>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='header-option'>
                                <div className='text-up'> <FormattedMessage id='home-header.specialty' /> </div>
                                <div className='subscript'><FormattedMessage id='home-header.search-doctor' /></div>
                            </div>
                            <div className='header-option'>
                                <div className='text-up'><FormattedMessage id='home-header.facility' /></div>
                                <div className='subscript'><FormattedMessage id='home-header.select-room' /></div>
                            </div>
                            <div className='header-option'>
                                <div className='text-up'><FormattedMessage id='home-header.doctor' /></div>
                                <div className='subscript'><FormattedMessage id='home-header.select-good-doctor' /></div>
                            </div>
                            <div className='header-option'>
                                <div className='text-up'><FormattedMessage id='home-header.fee' /></div>
                                <div className='subscript'><FormattedMessage id='home-header.check-health' /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <i className="fas fa-question-circle"></i>
                            <span className='help-text'><FormattedMessage id='home-header.help' /></span>
                            <span>|</span>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='text1'>
                            <span> <FormattedMessage id='banner.text1' /></span>
                        </div>
                        <div className='text2'>
                            <span> <FormattedMessage id='banner.text2' /></span>
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input className='search-input'

                                placeholder="tìm gói khám"
                            />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='down-option'>
                            <div className='option-icon'>
                                <i className="fas fa-hospital"></i>
                            </div>
                            <div className='option-subscript'>
                                <FormattedMessage id='banner.professional-diagnosis' />
                            </div>
                        </div>
                        <div className='down-option'>
                            <div className='option-icon'>
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className='option-subscript'>
                                <FormattedMessage id='banner.far-diagnosis' />
                            </div>
                        </div>
                        <div className='down-option'>
                            <div className='option-icon'>
                                <i className="fas fa-hospital-alt"></i>
                            </div>
                            <div className='option-subscript'>
                                <FormattedMessage id='banner.general-check' />
                            </div>
                        </div>
                        <div className='down-option'>
                            <div className='option-icon'>
                                <i className="fas fa-vial"></i>
                            </div>
                            <div className='option-subscript'>
                                <FormattedMessage id='banner.laboratory-medicine' />
                            </div>
                        </div>
                        <div className='down-option'>
                            <div className='option-icon'>
                                <i className="fas fa-skull"></i>
                            </div>
                            <div className='option-subscript'>
                                <FormattedMessage id='banner.mental-health' />
                            </div>
                        </div>
                        <div className='down-option'>
                            <div className='option-icon'>
                                <i className="fas fa-user-md"></i>
                            </div>
                            <div className='option-subscript'>
                                <FormattedMessage id='banner.professional-diagnosis' />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
