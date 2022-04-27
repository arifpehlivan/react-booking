import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/xphoto/600x400/140018091.webp?k=44707a4527076d3221a320af07e4c24fc71a78f9b13325f2684a8af123b80c6e&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Amsterdam Hollanda</h1>
                    <h2>564 </h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/xphoto/600x400/140034794.webp?k=20530a9fa1d82117d937081392845f3f8979b95299437466e09a7131c496f863&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Soa Paulo</h1>
                    <h2>123 </h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/xphoto/600x400/140023882.webp?k=95d1ce496ac042be45621fa086c5765cdbd805b7e5a715aebc624b2e0cd4a7b9&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Sidney Avusturalia</h1>
                    <h2>784 </h2>
                </div>
            </div>
        </div>
    )
}

export default Featured