function Sample(){
    return(
        <>
            <SkipComponent/>
            <WrapComponent/>
        </>
    )
}

//Skip
class SkipComponent extends React.Component {
    render(){
        return(
            <>
                <ul className="skip">
                    <li><a href="#main_image">콘텐츠바로가기</a></li>
                </ul>
            </>
        );
    }
}

//Wrap
class WrapComponent extends React.Component{
    render(){
        return(
            <>
                <MainComponent/>
            </>
        );
    }
}

//main
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <div id="onepage">
                    <section class="s1">section01</section>
                    <section class="s2">section02</section>
                    <section class="s3">section03</section>
        
                    <div style="height:2000px"></div>
                </div>
            </>
        );
    }
}

ReactDOM.render(
    <Sample />,
    document.getElementById("root")
);