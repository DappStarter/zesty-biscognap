require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture stomach cruise snow hospital guess indoor foster general'; 
let testAccounts = [
"0x13714ed56d13a8f7bc7fe79507cca37059ed8a6fee22b2891f7b8f0aa17f95e3",
"0x93411de18f989482de4b0883268d8806d0e7e806c38a2f58c17b1c478c8e12cb",
"0x6b8ede37bffcb0b7c7f3da9a3d72c7564b856e4065d4e1046747232653754d25",
"0x731f7ef1b24f46879a20bd9eb34beeb77f19e8f209b1fade42dfbb9b5ca0ac86",
"0x56593fe44fc469c01f06904c545ccd1abd0987e431035d0e5fdb22e7c1324340",
"0xb6e4c15f896e8a4127270d05f21526522a7a865c20def829b6216972b57663c0",
"0x05e61fcc6e493778ec1528e34e1479e60ffd09adec9d2d5766432c92ea85b9b3",
"0xfbc95e2696dc058a998966871562af4b782f416311228686df50c0f877e2492b",
"0xbdb1beffffd336b1d4e06fcfa4afd656baf37f8a8537a9a726de6b0d39f6651e",
"0x3388e59d51a7691b1ee20fe43250589b72487c695814aaddfdd36b397e73ba9d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
