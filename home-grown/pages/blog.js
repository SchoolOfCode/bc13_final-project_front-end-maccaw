import styles from "../styles/Blog.module.css"
import Image from 'next/image';
import blog from "../public/illustrations/blog-image.png"
import BlogPosts from "../components/BlogPage/BlogPosts";
import Sidebar from "../components/BlogPage/SideBar";


export default function Blog() {

return (
    <>
<div>
<Image src={blog} height={500}/>


<div className={styles["main-container"]}>
<BlogPosts/>
<Sidebar/>
</div>


</div>
    </>
)

}




