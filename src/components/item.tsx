const Item = ({
                  url,
                  title,
                  shareBy,
                  like,
                  dislike,
                  description
              }: any) => {
    return (
        <div className="item-wrapper flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="preview-wrapper flex-auto basis-1/3">
                <img src={`https://img.youtube.com/vi/${url}/hqdefault.jpg`} alt=""/>
            </div>
            <div className="description-wrapper basis-2/3">
                <div className="font-bold text-red-500">{title}</div>
                <div>Shared by {shareBy}</div>
                <div>
                    <span>{like} 👍</span>
                    &nbsp;
                    <span>{dislike} 👎</span>
                </div>
                <div>
                    Description: <br/>
                    <span className="ml-4">{description}</span>
                </div>
            </div>
        </div>
    )
}

export default Item
