import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div >
                <img className='w-300 ' src={logo} alt="" />
            </div>
              
                  <h2 className='text-gray-400'>Jurnalism without fear or Favour </h2>
                  <p>{moment().format('MMMM Do YYYY,')}</p>
              
        </div>
    );
};

export default Header;