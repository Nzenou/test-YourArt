import React, { useState, useEffect } from "react";
import ArtworkInfo from "./ArtworkInfo";
import Carousel from "./Carousel";
import Collapser from "./Collapser";
import ArtworkImage from "./ArtworkImage";

function Artwork() {
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [artworkData, setArtworkData] = useState({});
  const [collapserData, setCollapserData] = useState([]);
  const getId = () => {
    const url = window.location.pathname;
    const id = url.split("/")[2];
    return id;
  };

  useEffect(() => {
    const fetchData = async (artWorkId) => {
      const data = await fetch(`/artworkData/artwork${artWorkId}.json`)
        .then((res) => res.json())
        .catch((error) => console.log("fetch error: ", error));

      if (data) {
        setArtworkData(data);
        setCollapserData([
          {
            title: "SUBJECT",
            description: data?.subjects,
          },
          {
            title: "STYLE",
            description: data?.styles,
          },
          {
            title: "MEDIUM",
            description: data?.mediums,
          },
          {
            title: "MATERIALS",
            description: data?.materials,
          },
        ]);
      }
    };

    const artWorkId = getId();

    if (artWorkId) {
      fetchData(artWorkId);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ fontWeight: 600,  color:"grey", marginTop:"10px" }}>
          {"Home > painting > Madeleine Eister Artwork >  "}
        </p>
        <p style={{marginTop:"10px" }}>{"View of NYC"}</p>
      </div>
      <div style={{ display: "flex", marginTop: "60px" }}>
        <ArtworkImage artworkData={artworkData} />
        <div style={{ flexDirection: "column", width: "250px" }}>
          <ArtworkInfo artworkData={artworkData} />
        </div>
      </div>
      <div style={{ width: "60vw", marginLeft: "15px" }}>
        <Collapser
          collapse={collapse}
          setCollapse={setCollapse}
          title={"Description"}
        >
          {artworkData?.description}
        </Collapser>

        <Collapser
          collapse={collapse2}
          setCollapse={setCollapse2}
          title={"SUBJECT,STYLE,MEDIUM,MATERIALS"}
        >
          <div
            style={{ display: collapse2 ? "block" : "none" }}
          >
            <div style={{ display: "block", flexDirection: "column" }}>
              {collapserData?.length &&
                collapserData.map((data, id) => (
                  <div style={{ display: "flex" }} key={id}>
                    <div style={{ width: "100px" }}>
                      <p>{data?.title}</p>{" "}
                    </div>
                    <p style={{ marginLeft: "25px", fontWeight: 400 }}>
                      {data?.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </Collapser>
      </div>
      {artworkData?.otherArtworkImages && (
        <Carousel images={artworkData?.otherArtworkImages} />
      )}
    </div>
  );
}

export default Artwork;
