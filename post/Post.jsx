import "./post.css"

export default function Post() {
    return(
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">Music</span>
                    <span className="postCats">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Praesentium aspernatur incidunt soluta cumque repudiandae est magni illum fugit possimus consequuntur, 
               aliquid, dolor quam ducimus nesciunt, nostrum necessitatibus rerum minus reiciendis.
               </p>
        </div>
    )
}
