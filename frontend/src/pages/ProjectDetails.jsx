import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { facilityIcons, standardIcons } from '../utils/iconMap';

import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    title: '',
    description: '',
    mainImage: '',
    sideImage1: '',
    sideImage2: '',
    rating: 0,
    reviews: 0,
    facilities: [],
    sonderStandard: []
  });

  const [mainImage, setMainImage] = useState('');
  const [currentSideImageIndex, setCurrentSideImageIndex] = useState(0);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://aradhya-infra-e57v.vercel.app/api/projects/${id}`);
        setProject(res.data);
        if (res.data.images && res.data.images.length > 0) {
          setMainImage(res.data.images[0]);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    const fetchAllProjects = async () => {
      try {
        const res = await axios.get('https://aradhya-infra-e57v.vercel.app/api/projects');
        const others = res.data.filter((proj) => proj._id !== id); // Exclude current
        setOtherProjects(others.slice(0, 3)); // Only 3 other cards
      } catch (error) {
        console.error('Error fetching other projects:', error);
      }
    };

    fetchProject();
    fetchAllProjects();
  }, [id]);


  // Swap main image with clicked side image
  const handleImageSwap = (clickedIndex) => {
    setProject((prev) => {
      const newImages = [...prev.images]; // copy array
      // Swap main (index 0) with clicked image
      [newImages[0], newImages[clickedIndex]] = [newImages[clickedIndex], newImages[0]];
      return { ...prev, images: newImages };
    });
    setMainImage(project.images[clickedIndex]); // optional, ensures mainImage updates instantly
  };



  return (
    <>
      <div className=''>
        <div className='bg-black h-[100px] md:h-[130px] '>
        </div>
        <Navbar />  {/* className='bg-[#34363c80]' */}
        <div>
          {/* Images */}
          <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5 md:py-15 bg-[#F3ECDC] relative'>
            <img
              src={mainImage || "https://via.placeholder.com/870x413?text=No+Image"}
              alt="Main"
              className='border mx-auto md:mx-0 w-[300px] md:w-[870px] h-[150px] md:h-[413px] object-cover rounded-lg'
            />

            <div className="flex flex-row md:flex-col gap-5 overflow-x-auto md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent max-h-[413px]">
              {project.images &&
                project.images.slice(1).map((image, index) => {
                  const realIndex = index + 1; // actual index in images array
                  return (
                    <img
                      key={realIndex}
                      src={image || "https://via.placeholder.com/348x196?text=No+Image"}
                      alt={`Side ${realIndex}`}
                      className="w-[140px] md:w-[348px] h-[80px] md:h-[196px] object-cover rounded-lg shadow cursor-pointer hover:border hover:opacity-90 transition-opacity flex-shrink-0"
                      onClick={() => handleImageSwap(realIndex)}
                    />
                  );
                })}
            </div>
          </div>


          {/* Detials Content */}
          <div className='px-5 md:px-28 py-8 md:py-15 text-[#073937]'>
            <p className='text-[28px] md:text-[45px] font-[abril] font-bold '>{project.title} </p>
            <div className='flex flex-col md:flex-row gap-10 md:gap-40 '>
              <div className='md:w-1/2'>
                <p className='text-[12px] md:text-[16px]'>⭐{project.rating}/5 Superb ({project.reviews} reviews) </p>
                <p className=' text-[13px] md:text-[16.88px] py-2'>Description</p>
                <div className='text-[12px] m-5 flex gap-4 md:gap-10 '>
                  <p className='bg-[#F3ECDC] text-[#050810] px-3'>Retail</p><p className='bg-[#F3ECDC] px-3'> Office Space</p>
                </div>
                <p className='text-[12px] md:text-[17.44px] md:pt-5'>
                  {project.description}
                </p>
              </div>
              <div className='md:w-1/2'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                  <div className='flex flex-col gap-3 md:gap-5'>
                    <p className='text-[13.34px]'>Facilities Offered</p>
                    <ul className='text-[12px] md:text-[15.5px] flex flex-col gap-1 md:gap-4'>
                      {project.facilities?.map((item, i) => (
                        <li key={i} className='flex items-center gap-2'>
                          <span className='text-md text-[#073937]'>{facilityIcons[item] || "🏢"}</span>
                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                  <div className='flex flex-col gap-3 md:gap-5'>
                    <p className='text-[13.34px]'>The Sonder standard</p>
                    <ul className='text-[12px] md:text-[15.5px] flex flex-col gap-1 md:gap-4'>
                      {project.sonderStandard?.map((item, i) => (
                        <li key={i} className='flex items-center gap-2'>
                          <span className='text-md text-[#073937]'>{standardIcons[item] || "📌"}</span>
                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>
                <p className='text-[11px] md:text-[13.45px] mt-6 md:mt-15 mb-8 md:mb-35'>Explore more facilities</p>
                <a href='/enquiry'>
                  <button className='text-[14px] md:text-[18px] w-full md:w-[590px] h-[40px] md:h-[60px] bg-black text-[#F3ECDC] cursor-pointer '>ENQUIRY</button>
                </a>
              </div>
            </div>
          </div>
        </div>


        {otherProjects.length > 0 && (
          <div className='px-5 md:px-20 py-10 bg-[#F3ECDC]'>
            <h2 className='text-[20px] md:text-[25px] font-[abril] font-bold text-[#073937] mb-5'>
              Explore More Projects
            </h2>
            <div className='flex flex-wrap gap-5 justify-center'>
              {otherProjects.map((project) => (
                <ProductCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        )}



        <Footer />
      </div>
    </>
  )
}

export default ProjectDetails
