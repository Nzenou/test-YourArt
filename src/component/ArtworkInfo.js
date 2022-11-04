import React from 'react'

function ArtworkInfo({
    artworkData
}) {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", color:"grey"}}>
            <p style={{ marginBottom: "1px" }}>{artworkData?.title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{height:"20px"}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

            </div>
            <p style={{ color: "rgb(213,177,139", fontWeight: 600 }}>
            {artworkData?.artistShort?.fullname}
            </p>
            <br></br>
            <p style={{ marginBottom: "1px", fontSize: "12px" }}>{artworkData?.category}, {artworkData?.creationYear}</p>
            <span style={{ marginBottom: "1px", fontSize: "12px" }}>
              {artworkData?.dimensions?.width} W x {artworkData?.dimensions?.height} H x {artworkData?.dimensions?.depth} D in
            </span>
            <p
              style={{
                paddingTop: "15px",
                paddingBottom: "15px",
                fontSize: "25px",
                fontWeight: 700,
              }}
            >
             {artworkData?.price} €
            </p>
            <a href="#" className="AcquireButton">
              Acquire
            </a>
            <a href="#" className="MakeAnOfferButton" style={{ marginTop: "10px" }}>
              Make an offer
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "10px",
              }}
            >
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
                  PRE-RESERVE FOR 24 HOURS
                </p>
              </div>
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
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p
                  style={{
                    fontSize: "10px",
                    paddingLeft: "10px",
                    fontWeight: 700,
                  }}
                >
                  131€ estimated delivery free for France
                </p>
              </div>
              <p style={{ marginTop: "10px" }}>
                in order to obtain an accurate delivery fee, please enter your
                country of residence and zip code
              </p>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    background: "#C8C8C8",
                    border: "solid",
                    borderColor: "grey",
                    width: "40%",
                  }}
                >
                  <div
                    style={{
                      background: "grey",
                      border: "solid",
                      borderColor: "grey",
                      margin: "2px",
                    }}
                  >
                   {artworkData?.artistShort?.country}
                  </div>
                </div>
                <div
                  style={{
                    background: "#C8C8C8",
                    border: "solid",
                    borderColor: "grey",
                    width: "40%",
                  }}
                >
                  <div
                    style={{
                      background: "grey",
                      border: "solid",
                      borderColor: "grey",
                      margin: "2px",
                    }}
                  >
                    {artworkData?.artistShort?.countryCode}
                  </div>
                </div>
              </div>
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
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
  
                <p
                  style={{
                    fontSize: "10px",
                    paddingLeft: "10px",
                    fontWeight: 700,
                  }}
                >
                  Delivery fees is 129€
                </p>
              </div>
              <div
                style={{
                  alignItems: "center",
                  paddingTop: "20px",
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
  
                <p
                  style={{
                    fontSize: "13px",
                    paddingLeft: "10px",
                    fontWeight: 700,
                  }}
                >
                  Free pick up in Bruxelles, Belgium
                </p>
              </div>
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
                  
                  style={{ width: "20px", height: "20px", fontSize: 600 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
  
                <p
                  style={{
                    fontSize: "13px",
                    paddingLeft: "10px",
                    fontWeight: 700,
                  }}
                >
                  Try 14 days at home for free
                </p>
              </div>
            </div>
        </div>
    )
}

export default ArtworkInfo
