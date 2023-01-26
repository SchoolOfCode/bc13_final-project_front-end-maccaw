import Link from "next/link";
import Image from "next/image";
import img from "../../public/illustrations/youtube.png";
import faq from '../../public/icons/FAQ.png'

export default function Footer() {
  return (
    <footer className="footer">
    
      <p> Copyright © 2023 Home Grown </p>
      <Link
        className="youtube-icon"
        href="https://www.youtube.com/channel/UClkUASDfMSOhMKJIbe2tl7Q"
        aria-label="link to youtube"
      >
       
        <Image alt="icon" src={img} height={25} />
      </Link>
      <Link
        className="youtube-icon"
        href="/faq"
        aria-label="link to faq"
      >
      
        <Image alt="icon" src={faq} height={25} />
      </Link>
    </footer>
  );
}

/* <div className="team-members">

        <div className="team-member">
          <a
            className="icon-link"
            href="http://www.linkedin.com/in/alex-chappell-developer/"
          >
            Alex
          </a>
        </div>

        <div className="team-member">
          <a
            className="icon-link"
            href="http://www.linkedin.com/in/amina-edmunds"
          >
            <p>Amina</p>
          </a>
        </div>

        <div className="team-member">
          <a
            className="icon-link"
            href="http://www.linkedin.com/in/chetanjogia/"
          >
            <p>Chetan</p>
          </a>
        </div>

        <div className="team-member">
          <a
            className="icon-link"
            href="http://www.linkedin.com/in/julio-camargo-developer/"
          >
            <p>Julio</p>
          </a>
        </div>

        <div className="team-member">
          <a
            className="icon-link"
            href="http://www.linkedin.com/in/marwa-dawood/"
          >
            <p>Marwa</p>
          </a>
        </div>

        <div className="team-member">
          <a
            className="icon-link"
            href="http://www.linkedin.com/in/will-byrne-developer"
          >
            <p>Will</p>
          </a>
        </div>


        */

// </div>
//     </footer>
//   );
// }
