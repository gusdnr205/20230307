// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
import "./ERC20.sol";

contract Pokemon is ERC20 {
    constructor() ERC20("Pocketmon", "PTK", 10000) {}

    struct Poke {
        string url;
        string name;
    }

    struct User {
        address account;
    }

    uint256 private tokenPrice = 1000 ether;

    string[] pokemonName = ["kobuk", "fire", "water"];
    string[] pokemonUrl = [
        "https://i3.ruliweb.com/img/22/10/12/183caa724994b5fa0.jpg",
        "https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/ecu/image/sgpu8Mvn-2vTDqlD6Wc42iS0qas.jpg",
        "https://jmagazine.joins.com/_data2/photo/2022/08/990874659_M2LfNeRF_3.jpg"
    ];

    mapping(address => Poke[]) public pokemons;
    User[] public users;

    function getPokemons() public view returns (Poke[] memory) {
        return pokemons[msg.sender];
    }

    function getPokemonUsers() public view returns (User[] memory) {
        return users;
    }

    function buyPokemon() public {
        require(balances[msg.sender] >= tokenPrice, "Insufficient balance");
        balances[msg.sender] -= tokenPrice;
        totalSupply -= tokenPrice;

        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.coinbase))) % 3;
        pokemons[msg.sender].push(Poke(pokemonUrl[random], pokemonName[random]));

        bool isUser = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].account == msg.sender) {
                isUser = true;
                break;
            }
        }

        if (!isUser) {
            users.push(User(msg.sender));
        }
    }
}
