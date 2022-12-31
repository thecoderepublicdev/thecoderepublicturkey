import Image from 'next/image';

export default function TeamMemberCard({...props}) {
    return(
      <div itemscope itemType="https://schema.org/Person" className="w-full md:w-1/2 xl:w-1/4 px-4">
         <div className="w-full mx-auto mb-10">
            <div className="relative rounded-lg overflow-hidden">
               <Image
                     itemprop="image"
                     src={props.photo}
                     alt={props.photoAlt}
                     className="w-full"
                     unoptimized={true}
                     priority 
                  />
               <div className="absolute w-full bottom-5 left-0 text-center">
                  <div className="bg-black text-white relative rounded-lg overflow-hidden mx-5 py-5 px-3">
                     <div className="z-10">
                        <p itemprop="jobTitle" className="text-sm text-body-color">
                              {props.title}
                        </p>
                        <h2 itemprop="name" className="text-lg font-semibold text-dark">
                           {props.name}
                        </h2>
                        <a className="text-white text-sm hover:text-violet-900" href={"mailto:" + props.mail}>
                           {props.mail}
                        </a>
                     </div>
                     <div>
                        <span className="absolute left-0 bottom-0">
                           <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="white"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <circle
                                 cx="16"
                                 cy="45"
                                 r="45"
                                 fill="white"
                                 fill-opacity="0.11"
                                 />
                           </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                           <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="white"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <circle
                                 cx="0.706257"
                                 cy="24.3533"
                                 r="0.646687"
                                 transform="rotate(-90 0.706257 24.3533)"
                                 fill="white"
                                 />
                              <circle
                                 cx="6.39669"
                                 cy="24.3533"
                                 r="0.646687"
                                 transform="rotate(-90 6.39669 24.3533)"
                                 fill="white"
                                 />
                              <circle
                                 cx="12.0881"
                                 cy="24.3533"
                                 r="0.646687"
                                 transform="rotate(-90 12.0881 24.3533)"
                                 fill="white"
                                 />
                              <circle
                                 cx="17.7785"
                                 cy="24.3533"
                                 r="0.646687"
                                 transform="rotate(-90 17.7785 24.3533)"
                                 fill="white"
                                 />
                              <circle
                                 cx="0.706257"
                                 cy="18.6624"
                                 r="0.646687"
                                 transform="rotate(-90 0.706257 18.6624)"
                                 fill="white"
                                 />
                              <circle
                                 cx="6.39669"
                                 cy="18.6624"
                                 r="0.646687"
                                 transform="rotate(-90 6.39669 18.6624)"
                                 fill="white"
                                 />
                              <circle
                                 cx="12.0881"
                                 cy="18.6624"
                                 r="0.646687"
                                 transform="rotate(-90 12.0881 18.6624)"
                                 fill="white"
                                 />
                              <circle
                                 cx="17.7785"
                                 cy="18.6624"
                                 r="0.646687"
                                 transform="rotate(-90 17.7785 18.6624)"
                                 fill="white"
                                 />
                              <circle
                                 cx="0.706257"
                                 cy="12.9717"
                                 r="0.646687"
                                 transform="rotate(-90 0.706257 12.9717)"
                                 fill="white"
                                 />
                              <circle
                                 cx="6.39669"
                                 cy="12.9717"
                                 r="0.646687"
                                 transform="rotate(-90 6.39669 12.9717)"
                                 fill="white"
                                 />
                              <circle
                                 cx="12.0881"
                                 cy="12.9717"
                                 r="0.646687"
                                 transform="rotate(-90 12.0881 12.9717)"
                                 fill="white"
                                 />
                              <circle
                                 cx="17.7785"
                                 cy="12.9717"
                                 r="0.646687"
                                 transform="rotate(-90 17.7785 12.9717)"
                                 fill="white"
                                 />
                              <circle
                                 cx="0.706257"
                                 cy="7.28077"
                                 r="0.646687"
                                 transform="rotate(-90 0.706257 7.28077)"
                                 fill="white"
                                 />
                              <circle
                                 cx="6.39669"
                                 cy="7.28077"
                                 r="0.646687"
                                 transform="rotate(-90 6.39669 7.28077)"
                                 fill="white"
                                 />
                              <circle
                                 cx="12.0881"
                                 cy="7.28077"
                                 r="0.646687"
                                 transform="rotate(-90 12.0881 7.28077)"
                                 fill="white"
                                 />
                              <circle
                                 cx="17.7785"
                                 cy="7.28077"
                                 r="0.646687"
                                 transform="rotate(-90 17.7785 7.28077)"
                                 fill="white"
                                 />
                              <circle
                                 cx="0.706257"
                                 cy="1.58989"
                                 r="0.646687"
                                 transform="rotate(-90 0.706257 1.58989)"
                                 fill="white"
                                 />
                              <circle
                                 cx="6.39669"
                                 cy="1.58989"
                                 r="0.646687"
                                 transform="rotate(-90 6.39669 1.58989)"
                                 fill="white"
                                 />
                              <circle
                                 cx="12.0881"
                                 cy="1.58989"
                                 r="0.646687"
                                 transform="rotate(-90 12.0881 1.58989)"
                                 fill="white"
                                 />
                              <circle
                                 cx="17.7785"
                                 cy="1.58989"
                                 r="0.646687"
                                 transform="rotate(-90 17.7785 1.58989)"
                                 fill="white"
                                 />
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
     </div> 
    );
}