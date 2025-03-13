import React from "react";
// import logo from "../../assets/image/logo2.png"; 
// import img from "/publicAssets/1.png";

const AcheivementCard = ({ name="Default name", imageSrc="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" }) => {
  return (
    // <div style={{ 
    //   width: "100%", 
    //   maxWidth: "400px", 
    //   margin: "auto", 
    //   backgroundColor: "white", 
    //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
    //   borderRadius: "10px", 
    //   padding: "20px", 
    //   position: "relative",
    //   textAlign: "center"
    // }}>
    //   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    //     <div>
    //       <img src="/tcs-logo.png" alt="TCS Logo" style={{ width: "50px", height: "50px" }} />
    //       <img src="/brainiacs-logo.png" alt="Brainiacs Logo" style={{ width: "50px", height: "50px" }} />
    //       <img src="/zolo-logo.png" alt="Zolo Logo" style={{ width: "50px", height: "50px" }} />
    //     </div>
    //     <div className="absolute right-[-50%] top-[-50%]">
    //       <img src={logo} alt="YA logo" width="200px" height="200px"/>
    //     </div>
    //   </div>
    //   <div style={{ marginTop: "20px" }}>
    //     <div style={{ width: "150px", height: "150px", borderRadius: "10px", overflow: "hidden", margin: "auto" }}>
    //       <img src={imageSrc} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    //     </div>
    //   </div>
    //   <div style={{ marginTop: "20px" }}>
    //     <p style={{ color: "#333", fontWeight: "bold" }}>
    //       Heartiest Congratulations to {name}, student of IEM, BCA department who has got three jobs in these respective companies as mentioned above (via on-campus). She has taken training from our training cell and has achieved the impossible. We aspired her to be the best version of herself.
    //     </p>
    //   </div>
    // </div>
    <img src="/publicAssets/1.png" alt="" className="w-[15rem] h-auto rounded-md shadow-xl"/>

  );
};

export default AcheivementCard;