import React, { Component, Fragment } from 'react';

import {getUserName} from '../connect/getUser';
import Slider from "react-slick";
import '../style/mainPage.css';

class mainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData:'nodata',
            postData:'nodata',
            keyData: ''
        }
    }

    /**
     * 키이벤트를 받는 함수
     */
    keyevent = (evt) => {
        // 코드값
        console.info('event code : ', evt.keyCode);
        // 입력값
        console.info('event code : ', evt.key);

        // 활용예 입력받은 값을 하단 span 태그에 출력
        // 수정할 부분으로는 삭제버튼(del / 뒤로가기) 선택 시 삭제 코드 필요
        // 값이 없을 경우는 빈값으로 처리.
        // 위 두가지 숙제!!
        this.keyData += evt.key;
        this.setState({
            keyData: this.keyData
        })
        
    }
    

    render(){


        const settings = {
            dots: true, // 버튼페이징 생성 여부
            infinite: true, // 반복여부( false 일 경우 스크롤 끝나고 더이상 움직이지 않아욘 )
            speed: 500, // 슬라이드 이동 속도
            slidesToShow: 1, // 한번에 보여지는 슬라이드 갯수
            slidesToScroll: 1, // 한번에 넘어가는 갯수(2로 쓰면 2번째 4번째 아이템은 지나친다요)
            autoplay: true, // 자동으로 이동 여부
            autoplaySpeed: 2000, // 자동으로 이동 속도
          };
        return(
            
            <Fragment>
                 <div class="main-slick">
                    <Slider {...settings}>
                        <div>
                            <h3>리엑트 실습 예제 입니다</h3>
                        </div>
                        <div>
                            <h3>슬릭 슬라이더 있습니다</h3>
                        </div>
                        <div>
                            <h3>소스는 mainPage.js 입니다.</h3>
                        </div>
                        <div>
                            <h3>이미지도 올릴 수 있어요</h3>
                        </div>
                        <div>
                            <h3>기존 메인에 있던 소스들은 없앨게요</h3>
                        </div>
                        <div class="slick-img">
                            <img src="./node.png"/>
                        </div>
                        
                        
                    </Slider>
                </div>
                {
                    /* 여기부터 키보드 입력 받기 시작 */
                }
                <input type="text" onKeyUp={this.keyevent} />
                {
                    /* 여기부터 키보드 입력 받기 끝 */
                }
                {
                    /* 여기부터 키보드 입력 받은 정보 출력 시작 */
                }
                <span>{this.keyData}</span>
                {
                    /* 여기부터 키보드 입력 받은 정보 출력 끝 */
                }
                {/* <div className="App">
                    <h1>React Sample!!</h1>
                    <br/>
                    <span>getData : {this.state.getData}</span>
                    <br/>
                    <button type="button" onClick={this.getData}>getData!! </button>
                    <button type="button" onClick={this.postDta}>postDta!! </button>
                </div> */}
            </Fragment>
        )
      }

    // getData = async() => {
    //     await getUserName().then((res) => {
    //       console.info('axios : ', res);
    //       this.setState({
    //           ...this.state,
    //           getData:res.data.result.user_name
    //       })
    //     })
    // }
  
    // postDta = async() => {
    //     console.info('만드는중...');
    // }
}
export default mainPage;