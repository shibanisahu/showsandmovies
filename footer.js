const Footer = () => {
    let footer_links = [
        {link:"Terms and Privacy Notice"},
        {link:"Send us Feedback"},
        {link:"Help"}]
    return ( 
        <div className="footer">
            <div className="footer_logo">
                <img width="200" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
            </div>
            <div className="footer_links">
                {footer_links.map((data)=>{
                    return(
                        <a href="">{data.link}</a>
                    )
                })}
            </div>
            <div className="footer_desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
     );
}
 
export default Footer;