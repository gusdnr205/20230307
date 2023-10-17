// pragma solidity ^0.8.19;
// import "./ERC20.sol";

// contract Store is ERC20 {
//     struct Product {
//         string name;
//         uint256 price;
//         bool forSale;
//     }

//     mapping(address => Product[]) public userProducts;
//     Product[] public allProducts;
//     Product[] public forSaleProducts;

//     constructor() ERC20("store", "STR", 10000) {}

//     // 상품 등록
//     function registerProduct(string memory name, uint256 price, bool forSale) public {
//         Product memory product = Product(name, price, forSale);
//         userProducts[msg.sender].push(product);
//         allProducts.push(product);

//         if (forSale) {
//             forSaleProducts.push(product);
//         }
//     }

//     // 상품 구매
//     function purchaseProduct(uint256 productId) public {
//         require(productId < forSaleProducts.length, "Invalid product ID");
//         Product storage product = forSaleProducts[productId];
//         require(product.forSale, "Product is not for sale");

//         uint256 productPrice = product.price;
//         require(balanceOf(msg.sender) >= productPrice, "Insufficient balance");

//         transfer(address(this), productPrice);
//         transfer(owner(), productPrice); // 판매자에게 이더 전송

//         // 구매자에게 상품 제공 및 상태 업데이트
//         userProducts[msg.sender].push(product);
//         product.forSale = false;
//     }
// }

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";

contract Marketplace is ERC20 {
    struct Product {
        string name;
        uint256 price;
        bool forSale;
        address owner;
    }

    Product[] public allProducts;
    uint256 private tokenPrice = 1000 ether;
    mapping(address => Product[]) public userProducts;
    mapping(uint256 => Product) public forSaleProducts;

    ERC20 public token; // ERC20 토큰 컨트랙트

    // constructor(address _tokenAddress) {
    //     token = ERC20("sdasd","asd",10000);
    // }
    constructor() ERC20("store", "STR", 10000) {}

    // 가지고있는 유저 상품 모든 목록 반환 
  function showAllUserProducts() public view returns (Product[] memory) {
    Product[] memory alluserProducts = new Product[](allProducts.length);
    for (uint i = 0; i < allProducts.length; i++) {
        alluserProducts[i] = allProducts[i];
    }
    return alluserProducts;
}

    // 상품 등록
    function registerProduct(string memory name, uint256 price) public {
        require(balances[msg.sender] >= tokenPrice);
        balances[msg.sender] -= tokenPrice;
        // totalSupply -= tokenPrice;

        Product memory product = Product(name, price, true, msg.sender);
        allProducts.push(product);
        userProducts[msg.sender].push(product);
        forSaleProducts[allProducts.length - 1] = product;
    }

    // 상품 판매 등록
    function listProduct(uint256 productId) public {
        require(productId < allProducts.length, "Invalid product ID");
        require(allProducts[productId].owner == msg.sender, "You don't own this product");
        forSaleProducts[productId] = allProducts[productId];
    }

    // 상품 구매
    function purchaseProduct(uint256 productId) public {
        // require(productId < forSaleProducts[0].length, "Invalid product ID");
        Product storage product = forSaleProducts[productId];
        require(product.forSale, "Product is not for sale");

        uint256 productPrice = product.price;
        require(token.balanceOf(msg.sender) >= productPrice, "Insufficient balance");

        token.transferFrom(msg.sender, address(this), productPrice);
        token.transfer(product.owner, productPrice); // 판매자에게 이더 전송

        // 구매자에게 상품 제공 및 상태 업데이트
        userProducts[msg.sender].push(product);
        product.forSale = false;
    }
}
