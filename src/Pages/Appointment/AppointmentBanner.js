
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header>
            <div className="p-12 my-12 hero bg-[url('/src/assets/images/bg.png')]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='ml-4'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;