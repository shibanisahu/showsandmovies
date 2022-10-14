const Home = () => {
    let images = [
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3669/593669-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v"}
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img width="1260" height="500" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4090/1254090-h-96b6e85c7859" alt="" />
            </div>
            <div className="movies_list">
                { images.map((data)=>{
                    return(
                        <img height="375" width="230" src={data.img} alt="" /> 
                    )
                })} 
            </div>
        </div>
     );
}
 
export default Home;

// https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9535/1359535-h-f8efab96fbb8