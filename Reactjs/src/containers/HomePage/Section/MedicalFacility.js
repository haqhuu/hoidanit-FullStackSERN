import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {
        return (
            <>
                <div className='section-share section-medical-facility '>
                    <div className='section-container '>

                        <div className='section-header'>

                            <span className='title-section'>Cơ sở y tế nổi bật</span>

                            <button className='btn-section'> Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='bg-img section-medical-facility'></div>
                                    <div className='text-customize  '>
                                        <span> Bệnh viện Thu Cúc 1</span>
                                    </div>
                                </div>

                                <div className='section-customize'>
                                    <div className='bg-img section-medical-facility'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Bệnh viện Thu Cúc 2</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-medical-facility'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Bệnh viện Thu Cúc 3</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-medical-facility'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Bệnh viện Thu Cúc 4</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-medical-facility'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Bệnh viện Thu Cúc 5</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-medical-facility'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Bệnh viện Thu Cúc 6</span>
                                    </div>
                                </div>
                            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
