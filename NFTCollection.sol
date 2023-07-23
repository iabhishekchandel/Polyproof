// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTCollection is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string private _prompt;
    uint256 private _totalSupply;

    constructor(string memory prompt) ERC721("NFT Collection", "NFTC") {
        _prompt = prompt;
    }

    function promptDescription() public view returns (string memory) {
        return _prompt;
    }

    function mint(string memory ipfsUrl) public {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, ipfsUrl);
        _totalSupply++;
    }

    function getTotalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function transferAll(address recipient) public {
        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            if (_exists(i)) {
                safeTransferFrom(msg.sender, recipient, i);
            }
        }
    }
}
