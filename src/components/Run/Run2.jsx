import React from 'react';
import { useState } from "react";
import {Modal7,Modal8,Modal9,Modal10,Modal11,Modal12} from "../Modals/Modals"


const Run2 = () => {
  const [showMyModal7 , setShowMyModal7] = useState(false);
  const [ showMyModal8 , setShowMyModal8] = useState(false);
  const [ showMyModal9 , setShowMyModal9] = useState(false);
  const [ showMyModal10 , setShowMyModal10] = useState(false);
  const [ showMyModal11 , setShowMyModal11] = useState(false);
  const [ showMyModal12 , setShowMyModal12] = useState(false);
  const handleOnClose = (e) => {
    setShowMyModal7(false);
    setShowMyModal8(false);
    setShowMyModal9(false);
    setShowMyModal10(false);
    setShowMyModal11(false);
    setShowMyModal12(false);
  };
  return (
    <div id="run1" className='run1 bg-gray-100'>
        {/* Run2 component */}
        <div className='photo flex flex-row flex-wrap justify-center gap-6 p-6'>
          <section>
          < Modal7 visible={showMyModal7} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/run2-pc1.png")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal7(true)}/>
            <p>Threads</p>
            <p className='text-gray-500'>Illustration</p>
          </section>
          <section>
          < Modal8 visible={showMyModal8} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/run2-pc2.png")} alt="pic"  width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal8(true)}/>
            <p>Explore</p>
            <p className='text-gray-500'>Graphic Design</p>
          </section>
          <section>
          < Modal9 visible={showMyModal9} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/run2-pc3.png")} alt="pic"  width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal9(true)}/>
            <p>Finish</p>
            <p className='text-gray-500'>Identity</p>
          </section>
          <section>
          < Modal10 visible={showMyModal10} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/run2-pc4.png")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal10(true)}/>
            <p>Lines</p>
            <p className='text-gray-500'>Branding</p>
          </section>
          <section>
          < Modal11 visible={showMyModal11} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/run2-pc5.png")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal11(true)}/>
            <p>Southwest</p>
            <p className='text-gray-500'>Web Design</p>
          </section>
          <section>
          < Modal12 visible={showMyModal12} onClose={handleOnClose}/>
            <img src={require("../../assets/image/portfolio/run2-pc6.png")} alt="pic" width={400} className="pic rounded-lg cursor-pointer" onClick={() => setShowMyModal12(true)} />
            <p>Window</p>
            <p className='text-gray-500'>Photography</p>
          </section>
        </div>
    </div>
  )
}

export default Run2;