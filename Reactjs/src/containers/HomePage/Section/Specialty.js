import React, { Component } from 'react';
import './Specialty.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Specialty extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 5
        };
        return (
            <>
                <div className='specialty-section green'>
                    <div className='specialty-container red'>
                        <Slider {...settings}>
                            <div className='specialty-body'>
                                <div className='img-customize  red'>
                                </div>
                                <div className='text-customize  red'>
                                    <span> Cơ xương khớp 1</span>
                                </div>
                            </div>

                            <div className='specialty-body'>
                                <div className='img-customize  red'>
                                </div>
                                <div className='text-customize  red'>
                                    <span> Cơ xương khớp 2</span>
                                </div>
                            </div>
                            <div className='specialty-body'>
                                <div className='img-customize  red'>
                                </div>
                                <div className='text-customize  red'>
                                    <span> Cơ xương khớp 3</span>
                                </div>
                            </div>
                            <div className='specialty-body'>
                                <div className='img-customize  red'>
                                </div>
                                <div className='text-customize  red'>
                                    <span> Cơ xương khớp 4</span>
                                </div>
                            </div>
                            <div className='specialty-body'>
                                <div className='img-customize  red'>
                                </div>
                                <div className='text-customize  red'>
                                    <span> Cơ xương khớp 5</span>
                                </div>
                            </div>
                            <div className='specialty-body'>
                                <div className='img-customize  red'>
                                </div>
                                <div className='text-customize  red'>
                                    <span> Cơ xương khớp 6</span>
                                </div>
                            </div>
                        </Slider>
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

export default (Specialty);
