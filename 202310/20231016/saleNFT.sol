//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import "./myNFT.sol";

contract SaleNFT{
  // 상호작용할 CA의 주소필요하다.
  MyNFT public _nft;
  // CA 상호작용할 컨트랙트를 담을 상태변수

  constructor(address _nftCA){
    _nft =MyNFT(_nftCA);
    // 상호작용할 CA 인스턴스 생성
  }
  function _saleNFTmint(string memory url)public {
    // CA에서 CA로 메세지 전송 메서드 실행
    _nft.minting(url);
  }
  // 판매에 대한 내용의 함수를 작성하고
  // saleNFT에서 myNFT 메시지를 보내서 NFT 권한을 위이받는 함수를 실행해보자.
  // 컨트랙트를 법인처럼 생각하면 편하고 
  // 위임기능이 사람간의 거래뿐아니라
  // 컨트랙트간의 계약이라 생각하는게 더맞을듯하다 연게를 위해 위임과정이 많이 일어나는듯하다.dsddd
    function setApprovalForAll() public {
        // 판매 컨트랙트가 지금 컨트랙트를 실행시킨사람의 NFT모든 권한을 위임받았다.
        _nft.setAppAll(msg.sender, address(this), true);
    }

    // 실행시킨 사람이 판매 컨트랙트에게 위임받았는지 확인하는 함수
    function salesNFT() public view returns (bool) {
        return _nft.isApprovedForAll(msg.sender, address(this));
    }

  // 판매내용 
  // 누가 판매등록했는지 담을 상태변수등
  // 금액을 얼마로 설정했는지
  // 판매에대한 시기. 
  // 구매자가 구매의사를 표현하면서 구매신청을할떄  
  // 상품의 금액만큼 CA에 이더를 보낸다.
  // 판매자가 확인을 할수있고 판매
  // 확인 버튼 누르면 이더를 받고 소유권을 구매자에게 넘긴다.
  // 거래끝
}