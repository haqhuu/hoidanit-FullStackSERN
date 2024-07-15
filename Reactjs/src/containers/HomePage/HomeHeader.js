import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content red'>
                        <div className='left-content brown'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content green'>
                            <div className='child-content'>
                                <div className='text'>Chuyên khoa</div>
                                <div className='subscript'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div className='text'>Cơ sở y tế</div>
                                <div className='subscript'>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div className='text'>Bác sĩ</div>
                                <div className='subscript'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div className='text'>Gói khám</div>
                                <div className='subscript'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content blue'>
                            <i className="fas fa-question-circle"></i>
                            <span className='help-text'>Hỗ trợ</span>
                            <span>|</span>
                            <div className='language'>VN</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
