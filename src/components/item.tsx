const Item = () => {
    return (
        <div className="item-wrapper">
            <div className="preview-wrapper">
                <img src="https://img.youtube.com/vi/4jn-62WVQH4/hqdefault.jpg" alt=""/>
            </div>
            <div className="description-wrapper">
                <div>Title Movie</div>
                <div>Shared by ...</div>
                <div>Like Dislike</div>
                <div>
                    Description: <br/>
                    blabla
                </div>
            </div>
        </div>
    )
}

export default Item