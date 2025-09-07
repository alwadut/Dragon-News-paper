import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold ">Find US On </h1>
      <div className="join flex join-vertical ">
        <button className="btn join-item justify-start"><FaFacebook/>Connet With FaceBook</button>
        <button className="btn join-item justify-start"><FaInstagram/>Connet With Instagram </button>
        <button className="btn join-item justify-start"><FaTwitter/>Connet With Twiter</button>
      </div>
    </div>
  );
};

export default FindUs;
