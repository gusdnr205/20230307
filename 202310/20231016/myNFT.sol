//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract MyNFT is ERC721{
  constructor(string memory _name,string memory _symbol) ERC721(_name,_symbol){}

//  mapping(uint256 token_id=>string tokenuri) _tokenuris;
    mapping(uint256 => string) private _tokenURIs;


  function minting(uint256 _tokenId,string memory tokenURI) public{
   _tokenURIs[_tokenId] = tokenURI;
      _mint(msg.sender,_tokenId);
  }

     function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return _tokenURIs[_tokenId];
    }

    function urlmaker(string memory  _url) public view returns (string memory) {
        string memory baseURI = _baseURI();
        return string(abi.encodePacked(baseURI, _url));
    }
  function _baseURI()internal view override returns (string memory){
    return "https://coral-dear-gibbon-930.mypinata.cloud/ipfs/";
  }


// NFT에 관련된 메서드는 여기에
// NFT의 판매 권한을 줄 함수를 여기에 작성을해서 
    function setAppAll(address owner, address operator, bool approved) public {
        _setApprovalForAll(owner, operator, approved);
    }

  // NFT의 
}
