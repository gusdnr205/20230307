import React from "react";

function NFTList({ nftData }) {
  const nftListStyle = {
    display: "flex", // flex 스타일 적용
    flexWrap: "wrap", // 필요에 따라 줄 바꿈
  };

  const nftItemStyle = {
    flex: "0 0 calc(33.33% - 20px)", // NFT 항목의 너비를 조절, 여기서는 3개를 한 줄에 표시합니다.
    margin: "10px", // 각 NFT 항목 간의 간격
  };

  return (
    <div style={nftListStyle}>
      {nftData.map((item, index) => (
        <div key={index} style={nftItemStyle}>
          <h2>Name: {item.data.name}</h2>
          <p>Description: {item.data.description}</p>
          <img
            src={item.data.image}
            style={{ width: "200px", height: "auto" }}
            alt="NFT Image"
          />
          <p>Attributes: {JSON.stringify(item.data.attributes)}</p>
        </div>
      ))}
    </div>
  );
}

export default NFTList;
