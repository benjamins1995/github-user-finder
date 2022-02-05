import { Link } from 'react-router-dom';

function About() {
  const beni_login = 'benjamins1995';
  const beni_name = 'beni saadon';
  const beni_avatar_URL = `https://avatars.githubusercontent.com/u/88382856?v=4`;

  return (
    <>
      <h1 className='text-6xl mb-4'>GitHub Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.1</span>
      </p>
      <div className='card shadow-md compact side bg-base-100 my-20'>
        <div className='flex-row items-center space-x-4 card-body'>
          <div>
            <div className='avatar'>
              <div className='rounded-full shadow w-14 h-14'>
                <img src={beni_avatar_URL} alt='Profile' />
              </div>
            </div>
          </div>
          <div>
            <h2 className='card-title'>{beni_name}</h2>
            <Link
              className='text-base-content text-opacity-40'
              to={`/user/${beni_login}`}
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
