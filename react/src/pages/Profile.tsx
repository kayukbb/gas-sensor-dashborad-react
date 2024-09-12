import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import myIcon from '../images/user/myIcon.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img
                src={myIcon}
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              Lee Ka Yuk
            </h3>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">
                I am Ka Yuk Lee, a dedicated and detail-oriented individual
                pursuing a Bachelor's degree in Electronic Engineering at The
                Chinese University of Hong Kong. With hands-on experience as a
                part-time software engineer, I have developed both frontend and
                backend functionalities for IoT devices, collaborating with
                major hospitals and enhancing project efficiency. This is the
                demo website that I develop by using react and nodeJs. My
                technical skills include strong problem-solving abilities and
                excellent communication skills, proven through my roles in both
                technical and customer-facing environments. I am passionate
                about technology and eager to contribute to innovative projects
                in a dynamic team setting.
              </p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Programming Languages
              </h4>
              <p className="mt-4.5">
                NodeJs, React, MySQL, Python, Express.Js, VueJs, Linux,
                JavaScript, C/C++, Matlab, Arduino, Solid work, Pads logic
              </p>
              <br />
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Skills
              </h4>
              <p className="mt-4.5">photoshop, lightroom</p>

              <br />
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Contact
              </h4>
              <p className="mt-4.5">+852 62223701, leekayuk@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
