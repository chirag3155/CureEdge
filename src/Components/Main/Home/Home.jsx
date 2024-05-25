import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <SectionWrapper id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="w-full md:w-1/2 max-w-xs lg:max-w-xl">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Your Health Is Our Top Priority
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            Securely share your comprehensive medical history with doctors and
            loved ones, for better communication and care.
          </p>
          <Button className="transition duration-300 ease-in-out bg-teal-400 hover:bg-teal-600 text-white py-2 px-4 rounded">
            Appointment Now
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <Carousel
            className="rounded-xl"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={true}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
