import React, { Component } from 'react';
import './Specialty.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Specialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 5
        };
        return (
            <>
                <div className='specialty-section '>
                    <div className='specialty-container '>

                        <div className='specialty-header'>

                            <span className='title-section'>Chuyên khoa phổ biến</span>

                            <button className='btn-section'> Xem thêm</button>
                        </div>
                        <div className='specialty-body'>
                            <Slider {...settings}>
                                <div className='specialty-customize'>
                                    <div className='bg-img '></div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 1</span>
                                    </div>
                                </div>

                                <div className='specialty-customize'>
                                    <div className='bg-img '>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 2</span>
                                    </div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-img '>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 3</span>
                                    </div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-img '>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 4</span>
                                    </div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-img '>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 5</span>
                                    </div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bg-img '>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 6</span>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default (Specialty);
