import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import mypic from '../public/fulllength.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home: NextPage = () => {
  return (
    <div>
      <div className={`col-md ${styles.rightcol} row d-flex justify-content-center align-items-center`}>
        <div className={`leftsec col-md ${styles.leftsec} lh-1 fs-1 fw-semibold ms-5 mt-5`}>
          <p className={styles.header}>Hello, I am <b>Rashik</b>.<br /> Welcome to my porfolio.</p>
          {/* <div className="skills fs-5 row mt-4">
            <div className="skill col-md-3 border border-primary mx-2 text-center rounded bg-primary text-light p-2">Web development</div>
            <div className="skill col-md-3 border border-primary mx-2 text-center rounded bg-primary text-light p-2">Data science</div>
            <div className="ski col-md-3 border border-primary mx-2 text-center rounded bg-primary text-light p-2">App development</div>
          </div> */}
          <div className="links row mt-4 fs-5 w-50 text-center d-flex" style={{alignItems: 'center'}}>
          <a href='about:blank' className=' col-md-1 text-dark'><i className="bi bi-whatsapp"></i></a>
          <a href='about:blank' className=' col-md-1 text-dark'><i className="bi bi-twitter"></i></a>
          <a href='about:blank' className=' col-md-1 text-dark'><i className="bi bi-envelope"></i></a>
          <a href='about:blank' className="col-md-5 bg-primary mx-4 border border-primary rounded p-2 text-light"
            style={{textDecoration: 'none'}}
          >Hire me</a>
          </div>
        </div>
        <div className={`rightsec col-md-5 ${styles.rightsec}`}>
          <Image
            src={mypic}
            alt="Profile picture"
            className={styles.profilepic}
            width={300}
            height={450}
          />
        </div>

        <div className="row text-center fs-5 lh-1">
          <p>Scroll down to see more</p>
          <i className="bi bi-arrow-down-circle-fill"></i>
        </div>

      </div>
    </div>
  )
}

export default Home
