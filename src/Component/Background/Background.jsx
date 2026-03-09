import video1 from '../Assets/video1.mp4'
import img1 from '../Assets/image1.png'
import img2 from '../Assets/image2.png'
import img3 from '../Assets/image3.png'
import '../Background/Bg.css'

const Background = ({playStatus,heroCount}) => {
    if(playStatus) {
        return (
            <video className='bg' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if (heroCount===0)
    {
        return <img src={img1} className='bg' alt=''/>
    }
     else if (heroCount===1)
    {
        return <img src={img2} className='bg' alt=''/>
    }
     else if (heroCount===2)
    {
        return <img src={img3} className='bg' alt=''/>
    }
}
export default Background;