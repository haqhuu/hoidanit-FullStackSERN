import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <>
                <div className='section-share section-about '>
                    <div className='section-about-header'>
                        Truyền thông nói gì về Hahaha
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px"
                                src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
                                title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>

                            </iframe>
                        </div>
                        <div className='content-right'>
                            <p> Ăn hại đái khai, không hòng có ny mãi ế à ? Nay có cơ hội làm lại cuộc đời, nghe lời miệng lưỡi thế gian. Làm giám đốc gia đình và trờ thành một ông chủ tồi. Thật đáng tiếc cho thân chủ phi phàm, thời xưa còn đâu...</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default (About);
