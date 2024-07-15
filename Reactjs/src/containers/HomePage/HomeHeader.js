import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className='home-header-container red'>
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

                <div className='home-header-banner red'>
                    <div className='content-up red'>
                        <div className='text1 red'>
                            <span> Nền tảng y tế</span>
                        </div>
                        <div className='text2 red'>
                            <span> chăm sóc sức khỏe toàn diện</span>
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input className='search-input' placeholder='Tìm gói khám' />
                        </div>
                    </div>
                    <div className='content-down green'>
                        <div className='child-content'>
                            <div className='child-icon'>
                                <i class="fas fa-hospital"></i>
                            </div>
                            <div className='subscript'>
                                Khám chuyên khoa
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'>
                                <i class="fas fa-phone"></i>
                            </div>
                            <div className='subscript'>
                                Khám <br />từ xa
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'>
                                <i class="fas fa-hospital-alt"></i>
                            </div>
                            <div className='subscript'>
                                Khám tổng quát
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'>
                                <i class="fas fa-vial"></i>
                            </div>
                            <div className='subscript'>
                                Xét nghiệm y học
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'>
                                <i class="fas fa-skull"></i>
                            </div>
                            <div className='subscript'>
                                Sức khỏe tinh thần
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'>
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div className='subscript'>
                                Khám nha khoa
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
