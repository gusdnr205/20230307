# ERC 721 - NFT

# NFT 대체 불능한 토큰 Non-fungible Token

- 고유의 값을 가지고있다.
- 디지털 자산의 소유권을 보장
- 토큰의 내용이 대체 불가능한것이 아니고 토큰 자체가 고유의 값을 가지고있어서 , 대체 불가능 이라는 뜻.
- NFT를 생성했을 때 내용이 같아도 각각 고유성을 가지고있어서 대체 불가능하다는 의미

# NFT

```javascript
const nft = {
  tokenId: "0x11111111111111111" // 토큰의 고유값 고유 식별자
  url: "https://nfturl.com/data.json" // NFT의 어떤 내용을 담을지 객체 경로 json파일에는 nft의 내용이들어간다. json 객체라고도 말할수있다.
}
```

# url NFT의 내용

```json
{
  "name": "NFT의 이름",
  "description": "NFT의 설명",
  "image": "이미지 경로 NFT에 포함할 이미지 경로",
  "attributes": [
    // 원하는 추가 속성
  ]
}
```

- url의 객체의 내용을 DB에 저장해도 우리가 NFT 민팅을 할순있는데
- 그러면 탈중앙화라고 보기 힘들기때문에
- 분산파일 시스템 IPFS에 객체의 내용ㅇ을 저장하고 이미지도 저장하고 url을전달을해서
- NFT를 조회하면 그분 샆일 시스템에 저장된 객체의 내용으로 NFT를 보여주는것.

- IPFS에 파일을 업로드하면
- 분산 네트워크, 중앙화 서버가 없이 여러 노드들이 분산 네트워크에 파일을 저장한다.
  (안정성)
- 무결성 및 보안유지
- 업로드하면 파일의 경로는 고유한 주소를 가진다(해시기반)
- NFT에 담을 객체의 내용을 IPFS 저장소에 저장을하고 URL값을 NFT 객체에 담아 놓는다.
- 분산 파일 시스템 데이터를 저장하는 프로토콜 P2P네트워크

```sh
npm  init -y
npm i @openzeppelin/contracts
```

# pinata

- IPFS PROVIDER로 사용
- pinata로 IFPS 직접 파일을 업로드하고 업로드한 파일의 해시주소를 가져올거임
- 이 해시주소로 IPFS에 업로드된 파일을 다운로드 하거나 확인할수있다.

```sh
remixd -s .--remix-ide https://remix.ethereum.org
```
