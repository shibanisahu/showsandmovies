const Addfavourites = () => {
    return (
        <div className="addfavourites">
            <div className="form">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
                <form action="" >
                    <form action="" >
                        <input type="text" placeholder="title"/>
                        <input type="text" placeholder="genre"/>
                        <input type="text" placeholder="language"/>
                        <input type="number" min="0" max="10" placeholder="rating"/>
                        <button>Add</button>
                    </form>
                </form>
            </div>
            <div className="content">
                <h1>Add your favourite movies and TV shows.</h1>
            </div>
        </div>
    );
}

export default Addfavourites;