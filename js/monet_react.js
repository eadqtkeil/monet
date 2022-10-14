function Sample(){
    return(
           <>
              <SkipComponent/>
              <WrapComponent/>
           </>
    )
}

// Skip
class SkipComponent extends React.Component {
render() {
    return (
        <>
            <ul className="skip">
                <li><a href="#skipcont">콘텐츠바로가기</a></li>
            </ul>
        </>
    );
}
}

// Wrap
class WrapComponent extends React.Component {
render() {
    return (
        <>

                <MainComponent/>

        </>
    );
}
}


// main
class MainComponent extends React.Component {
render() {
    return (
        <>
        <header className="header" id="skipcont">
        <div className="inner cf">
            <h1 className="site-logo"><a href="#"><img src="img/logo2.png" alt="logo"/></a></h1>
            <nav className="primary-nav">
                <ul>
                    <li className="on a"><a href="#">monet inside</a></li>
                    <li><a href="#">소개</a></li>
                    <li><a href="#">art work</a></li>
                    <li><a href="#">공연정보</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section>
        <div className="content">
            <div className="cnt01">
                <div className="textbox">
                    <h1>모네 인사이드</h1>
                    <p>찰나의 빛에 영원을 담다</p>
                    <button><a href="https://tickets.interpark.com/goods/22009615">예매하기</a></button>
                </div>
                    <div className="slideList" id="slide">
                        <div id="slide_banner" className="cf b">
                            <div className="slick-slide"><img src="img/htm_20130801045110101012.jpg" alt="수련"/></div>
                            <div className="slick-slide"><img src="img/213F5641569F170126.png" alt="수련"/></div>
                        </div>
                    </div>
                
            </div>
            <div className="cnt02">
               
                <div className="nav02">
                    <div>
                        <div className="videoWrapper">
                            <div className="videoContainer">
                                <iframe width="560" height="320" src="https://www.youtube.com/embed/0Z2_08ryoQc" title="YouTube video player"  autoplay loop muted frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                         </div>
                         
                         <div className="text02">
                            <h3><span>m</span>onet insi<span>d</span>e</h3>
                         </div>
                         <div className="descript">
                            <div>
                                <p>&lt;모네 인사이드&gt;는 빛의 화가 클로드 모네가 남긴 소중한 명작들을 현대적 감각으로 재해석해 음악과 함께 감상하는 미디어 아트 전시 입니다. </p>
                                <p>르아브르의 캐리커처 화가로 시작해 지베르니의 수련 연작 대서사시에 이르기까지, 고단한 일상의 순간에서도 한 줌의 빛을 찾아낸 클로드 모네의 찬란하고도 열정적인 여정이 펼쳐집니다.</p>
                            </div>
                            <div>
                                <p><span>관람요금 &nbsp;</span>&nbsp;<br/> 1인(성인/아동청소년/영유아 공통) 15,000원</p>
                                <p><span>전시기간 &nbsp;</span>&nbsp;<br/>  2022.09.01(목) ~ open run</p>
                                <p><span>관람시간 &nbsp;</span>&nbsp;<br/>  오전 11시 ~ 오후8시 (입장 마감 : 오후 7시)</p>
                                
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className="cnt03">
                <div className="ttimg"><img src="img/chapter.png" alt="chapter"/></div>
                <div className="slideList" id="slide2">
                    <div id="slide_banner2" className="cf b2">
                        <div className="slick-slide">
                            <img src="img/55.png" alt="카미유"/>
                            <div className="imgbox"><h2>Amour, Camille, 1866-1876</h2><p>나의 사랑, 카미유</p></div>
                        </div>
                        <div className="slick-slide">
                            <img src="img/56.png" alt="아르장퇴유"/>
                            <div className="imgbox"><h2>Argenteuil, 1871</h2><p>아르장퇴유</p></div>
                        </div>
                        <div className="slick-slide">
                            <img src="img/22009615-01.png" alt="빛"/>
                            <div className="imgbox"><h2>Les Maître De La Lumière</h2><p>빛의 마스터</p></div>
                        </div>
                        
                        <div className="slick-slide">
                            <img src="img/22009615-03.png" alt="어둠속"/>
                            <div className="imgbox"><h2>Briller Dans Les Ténèbres</h2><p>어둠 속에 빛나는</p></div>
                        </div>
                        <div className="slick-slide">
                            <img src="img/22009615-04.png" alt="푸르빌"/>
                            <div className="imgbox"><h2>Pourville, 1882</h2><p>푸르빌</p></div>
                        </div>
                    </div>
                </div>
              
                <div className="ttbtn">
                    <button className="tt"><a href="javascript:;">Chapter</a></button>
                   
                </div>
            </div>
            <div className="cnt04">
                <div>
                    <ul className="lside">
                        <li><img src="img/sunny.png" alt="목차" /><a href="#table" className="selected">Time Table</a></li>
                        <li><img src="img/sunny.png" alt="목차" /><a href="#map">오시는 길</a></li>
                        <li><img src="img/sunny.png" alt="목차" /><a href="#meong">그라운드시소 명동</a></li>
                    </ul>
                </div>
                <div className="nav04">
                    <div className="reserve">
                    
                    <div id="table">
                        <h1>Time Table</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>1회차 | </th>
                                    <td>11:00-11:50</td>
                                </tr>
                                <tr>
                                    <th>2회차 | </th>
                                    <td>12:00-12:50</td>
                                </tr>
                                <tr>
                                    <th>3회차 | </th>
                                    <td>13:00-13:50</td>
                                </tr>
                                <tr>
                                    <th>4회차 | </th>
                                    <td>14:00-14:50</td>
                                </tr>
                                <tr>
                                    <th>5회차 | </th>
                                    <td>15:00-15:50</td>
                                </tr>
                                <tr>
                                    <th>6회차 | </th>
                                    <td>16:00-16:50</td>
                                </tr>
                                <tr>
                                    <th>7회차 | </th>
                                    <td>17:00-17:50</td>
                                </tr>
                                <tr>
                                    <th>8회차 | </th>
                                    <td>18:00-18:50</td>
                                </tr>
                                <tr>
                                    <th>9회차 | </th>
                                    <td>19:00-19:50</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="tabledes">
                            <li>* 본 전시 러닝타임은 총 50분으로, 본 영상(35분)에 하이라이트 영상(15분)이 이어집니다.</li>
                            <li>* 하이라이트 영상은 본 영상 내 대표작으로 구성되어 있으며, 자유로운 이동과 사진 촬영을 권장합니다.</li>
                            <li>* 각 회차 사이 10분 가량은 인터미션 타임입니다.</li>
                            <li>* 상영 시간과 무관하게 입장/퇴장이 가능합니다.</li>
                        </ul>
                    </div>    
                   
                    <div id="map">
                       
                      
                            <p>전시장소</p>
                            <p>그라운드시소 명동<br/>(서울시 중구 남대문로 73 롯데백화점 본점 에비뉴엘 9F)</p>
                            <span>*롯데백화점 에비뉴엘 1층 샤넬 매장 옆 전용 엘리베이터 이용</span>
                        
                       <img src="img/map.png" alt="map"/>
                    </div>
                     
                    <div id="meong">
                        <h1>GROUNDSEESAW MYEONGDONG</h1>
                        <p>그라운드시소 명동은 혁신적인 몰입감을 제공하는 미디어아트 플랫폼입니다. 6M 이상의 압도적인 5면 스크린에서 펼쳐지는 멀티플렉스급 영상, 음향 환경은 관람객에게 완전히 새로운 형태의 관람방식을 제안합니다.
                            관람객조차 작품의 일부가 되는 그라운드시소 명동은 극장의 미래를 제시합니다.
                        </p>
                        <img src="img/meongdomg.png" alt="그라운드시소 명동"/>
                        <span>* 두 공간 동일한 콘탠츠가 상영됩니다.</span>
                        <span>* 본 작품은 자막과 나레이션으로 구성되어 있으니 각 존의 메인 화면을 중심으로 이야기에 집중하며 감상해주세요.</span>
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>
            
    </section>
</>
);
}
}


ReactDOM.render(
    <Sample/>,
    document.getElementById("root")
);
