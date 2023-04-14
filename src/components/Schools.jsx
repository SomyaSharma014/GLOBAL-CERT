// import fblogo from "../assets/image/logos/facebook.svg";
// import glogo from "../assets/image/logos/google.svg";
// import ibmlogo from "../assets/image/logos/ibm.svg";
// import mlogo from "../assets/image/logos/microsoft.svg";

// import fblogo from "../assets/image/logos/PGS.jpg";
// import glogo from "../assets/image/logos/SKV.jpeg";
// import ibmlogo from "../assets/image/logos/TMS.png";
// import mlogo from "../assets/image/logos/BKE.png";

const Schools = () => {
  return (
    <div className="pb-20">
        <h1 className='font-bold text-4xl text-center pt-20 tracking-wider'>CORPORATE INITIATION PROGRAM PARTICIPATING SCHOOLS</h1>
        {/*<h3 className='text-gray-500 text-center text-md pt-4 italic'>Lorem ipsum dolor sit amet consectetur.</h3>*/}
        <section className='schools pt-8'>
            {/*<img src={mlogo} alt="fb-pic" width={200} className="block my-0 mx-auto"/>
            <img src={glogo} alt="g-pic"  width={200} className="block my-0 mx-auto"/>
            <img src={fblogo} alt="ibm-pic"  width={200} className="block my-0 mx-auto"/>
            <img src={ibmlogo} alt="micro-pic"  width={100} className="block my-0 mx-auto"/>*/}
            <img src={require("../assets/image/logos/PGS.jpg")} alt="fb-pic" width={200} className="block my-0 mx-auto"/>
            <img src={require("../assets/image/logos/SKV.jpeg")} alt="g-pic"  width={200} className="block my-0 mx-auto"/>
            <img src={require("../assets/image/logos/TMS.png")} alt="ibm-pic"  width={200} className="block my-0 mx-auto"/>
            <img src={require("../assets/image/logos/BKE.png")} alt="micro-pic"  width={100} className="block my-0 mx-auto"/>
        </section>
    </div>
  )
}

export default Schools;