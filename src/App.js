import React from "react";
import PropTypes from "prop-types";


const scooters=[
  {
    id : 1,
    rating : 1.0,
    name : "Benly",
    image : "https://kr.e-scooter.co/i/89/9b/02/7fe33bc7c074d44d23598bdd22.jpg"
  },
  {
    id : 2,
    rating : 2.3,
    name : "SuperCub",
    image : "https://lh3.googleusercontent.com/proxy/I_J9knj7gzYFf5F0gLWxP-pGZWDSkSBG3StQiVNPOVFUjJ8SnhlkPHTeIZHqrWLb_2GkQrBn4TY0j2lolfdQ6ubdPRDKpCVIIWGPOjC8aBGzWUpttE78k5WQ" 
  },
  {
    id : 3,
    rating : 4.4,
    name : "Vespa",
    image : "https://bd.gaadicdn.com/processedimages/piaggio/piaggio-vespa-125/source/piaggio-vespa-1255ed09ba4a5485.jpg?tr=w-360" 
  },
  {
    id : 4,
    rating : 3.9,
    name : "Wolf Classic",
    image : "https://lh3.googleusercontent.com/proxy/MTmU9fWPsSUB2rvb7RzcIU-nJpXUDCMMoP10Nnatifju1DxG6zsdDX_PhOtkYXpPysYEfyyRQnFmTh5Q0I6Bw_sc_eZOIQXEtuzMS43DUHxHy1loRA__8Rq3OthoxQ8dzSxIyDAtNXte2KtopRfi039Md0N1ACTJ3FwYAco2_tOBvnN1WLPWCX6ndxS_LA4ejMkeN8yCbDjdweQNWzq5VC2Bd56LsqX1lCMp3pipuC9Hs5SKAOiCFkmb5AhiW4SyKJvUNSQF37I_dhRt-4ZgEqwdyuBMCD8KI7pV3R4" 
  }
  
]

function Cars({name, image, score}){
  return <div>
    <h1>{name}</h1>
    <h2>{score} / 5.0</h2>
    <img src={image} alt={name} />
  </div>
}

Cars.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App(){
  return <div>{scooters.map(item=>(<Cars name={item.name} key={item.id} image={item.image} score={item.rating} />))}</div>
}

export default App;
