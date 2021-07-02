require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strike cost mean protect just enter equal gate'; 
let testAccounts = [
"0x42a82b370254b6eddcae3c4cf9e272d0f5e77dedbe97249995b9a28fbf337589",
"0x1fb764587d4c00fc88c6e08446122b185a6307dea2780eee1bd78823be32726e",
"0x346440cecc1c311d7c397aa4688ac0b89eac82f30097735fea51352c4c496aaa",
"0xead4e6e73564b574f4517ffd2f9210017d18427eaf5b8fd6de2d3aae8e491a41",
"0xe580902579666b3d180c15cea40578b57d8b155fa86894d914562eef94f59884",
"0xf317f30890fa8ef134522c67e84ca276739658ff9760bf6ba635f6a6fc339253",
"0x5bc09c5fd8195005fef53b03f261a471beaf1a816f659447b4040a4dba6996d9",
"0x9b830a6a75f91ede7e35a0e62e220bd6c9d49af99f0190fa6f51798d38e82fc9",
"0x4ab07d8d5291c6ba5f8329658504ef755459599955f78d5a29de5efadb6290c3",
"0xcf38c6f37100ef278cbb4f3128a335a447581cdb857e6bcc538acbbedf642bc9"
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
            version: '^0.8.0'
        }
    }
};

