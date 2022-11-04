import React from "react";


function ArtworkImage({
    artworkData
}) {
  return (
    <div style={{display : "flex"}}>
       <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "450px",
            width: "70vw",
          }}
        >
         <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 40px 10px 10px ",
              height: "100%",
            }}
          >
            <img
              style={{ objectFit: "contain" }}
              src={artworkData?.imageUrl}
              alt={"Mainimage"}
            ></img>
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding:"0px 40px 0px 0px" }}>
            <div
              style={{
                alignItems: "center",
                paddingTop: "10px",
                display: "flex",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p
                style={{
                  fontSize: "14px",
                  paddingLeft: "10px",
                  fontWeight: 500,
                }}
              >
                VIEW IN A ROOM
              </p>
            </div>
            <div
              style={{
                alignItems: "center",
                paddingTop: "10px",
                display: "flex",
                marginLeft: "20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p
                style={{
                  fontSize: "14px",
                  paddingLeft: "10px",
                  fontWeight: 500,
                }}
              >
                AR VIEW
              </p>
            </div>
          </div>
        </div>
        </div>
  
  );
}

export default ArtworkImage;
