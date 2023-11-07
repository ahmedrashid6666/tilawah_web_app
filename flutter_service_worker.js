'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3c2f740c8868cd1154e712a658e53723",
"assets/assets/a.mp3": "c52a2478001faebd411f30f790e40cf8",
"assets/assets/Alphabets/1.jpg": "aa989b3006fea45f08a115ae21272852",
"assets/assets/Alphabets/10.jpg": "4b05cd3fea1a28af736b4f86ccb895a1",
"assets/assets/Alphabets/11.jpg": "f3f85d974fface0ec8bedfab03b3d75e",
"assets/assets/Alphabets/12.jpg": "925c9e0534d0c9909284ff0e1e8c8637",
"assets/assets/Alphabets/13.jpg": "c5b57642bdb2a3333fba93d4c8f3d1d3",
"assets/assets/Alphabets/14.jpg": "cb533354bf0297a28b81d54591032be7",
"assets/assets/Alphabets/15.jpg": "cb5249492be6c74b62fee219351b1a0d",
"assets/assets/Alphabets/16.jpg": "1fbba403f7d933a0005d8f6b78300a94",
"assets/assets/Alphabets/17.jpg": "7b362fba188a40dba7dca36ef8469cde",
"assets/assets/Alphabets/18.jpg": "e9e06b6f2372a6517aff9f216aa367bf",
"assets/assets/Alphabets/19.jpg": "2bcb0d4b5beaad6b131f51f96e5410f8",
"assets/assets/Alphabets/2.jpg": "5323cfb9dcc46a0d696c18183455587b",
"assets/assets/Alphabets/20.jpg": "0e748d5599fb750ec07878e3fcff1d36",
"assets/assets/Alphabets/21.jpg": "32622dd0a3e627fc552d1ace4021c997",
"assets/assets/Alphabets/22.jpg": "971b0a58863d613a6d552fc6edc49e8b",
"assets/assets/Alphabets/23.jpg": "39752cef354a18e399eee351b49acfb9",
"assets/assets/Alphabets/24.jpg": "483d15021713181e19970c3e088a2e49",
"assets/assets/Alphabets/25.jpg": "4b0ec1b52f4174b254291514a557ab69",
"assets/assets/Alphabets/26.jpg": "7225786caf825e8855f0fd4928c0a30d",
"assets/assets/Alphabets/28.jpg": "12d66a05b369f3cbdd83a8d2a6b9ee9f",
"assets/assets/Alphabets/3.jpg": "cdbdc7abaeec57f7aab792930b7693ac",
"assets/assets/Alphabets/4.jpg": "e4e23561ce4b18fb0b9d2c19e67d94e5",
"assets/assets/Alphabets/5.jpg": "795b10c172c99e2fe6639e87efbdb185",
"assets/assets/Alphabets/6-2.jpg": "3456d98265c14588db9d3e87817f1dec",
"assets/assets/Alphabets/6.jpg": "fd99d637f96a3574f2aac983cc5e8b7c",
"assets/assets/Alphabets/7.jpg": "058372abfee53aae2e118bdacec4a8b7",
"assets/assets/Alphabets/8.jpg": "99de624dacc33a80555662e573aa5b16",
"assets/assets/Alphabets/9.jpg": "c806885e7ab179cae205d12ca7a0d9f9",
"assets/assets/Alphabets/bg%2520dzyn.jpg": "de990bed828f7380fb72767a03a12ebb",
"assets/assets/Alphabets/BG.jpg": "feeac6001a5ad769d4ea95df3cce6f0f",
"assets/assets/Alphabets/BG1.jpg": "de000b6945fe2f48150152fc8333f753",
"assets/assets/Alphabets/hds.png": "595745a4edbc49efeb1f320fac7c9b21",
"assets/assets/Alphabets/logo2.png": "cc28c21552ec7a574a771f1fb9eaab75",
"assets/assets/Alphabets/logo3.png": "c89c6d5967a97c186f3535c4220a7785",
"assets/assets/Alphabets/navbarlogo.jpg": "f5cb6a79ff1300217135041b9179c898",
"assets/assets/Alphabets/splash%25205.jpg": "dcc3e74c5d687cfb5d05ce149d07138e",
"assets/assets/asli%25201.mp3": "a5f973916ab22cc5f81f7a1348a7e3fd",
"assets/assets/asli%25202.mp3": "7c528122b1bc186afe586c1fb7a629d9",
"assets/assets/asli%25203.mp3": "0a65e00b42fa270fccbde8f463d169b2",
"assets/assets/asli%25204.mp3": "45a2b766ab49e9020117b7b26d542a65",
"assets/assets/asli%25205.mp3": "7a3dc9a86512d6961c40dcaed4091e2c",
"assets/assets/b.mp3": "7bee51cc7780270f1e2eb574661a8402",
"assets/assets/c.mp3": "55c71994a2e9c6cf466a9e81dc2658c5",
"assets/assets/d.mp3": "2840fb1ccaef5110b0c052eb853e5e12",
"assets/assets/e.mp3": "d8ca87656f777056d26a84a28ad54ceb",
"assets/assets/f.mp3": "45113cfbc9c680de71ca2f3041522330",
"assets/assets/fareei.mp3": "0e216ff7e0b590458d870b33c39dfe48",
"assets/assets/fonts/Acme.ttf": "2efe8d14a57ee7e6d3ad5af319decf70",
"assets/assets/fonts/arabic-reg.ttf": "7c0c99d532f135f63633578347912421",
"assets/assets/fonts/JANNA%2520LT%2520BOLD.TTF": "0655ac2529565b93080fef53a0e85ffe",
"assets/assets/fonts/KacstLetter.ttf": "80c6577cb53980614d802892a47f06bc",
"assets/assets/fonts/MLB_TTAmbili.TTF": "d5e1d5845bc7588fa5a4d48c104e82d0",
"assets/assets/fonts/MLU-Indulekha.ttf": "53858f666931cf3c76ecc679a7792f75",
"assets/assets/g.mp3": "455c3270062a5bcded5d9086e5dd01ce",
"assets/assets/h.mp3": "570557ce8cdebd856a8a6ce1aede02ba",
"assets/assets/ha.mp3": "9fbf6ce949d28ad69d3aa088ac0ec80f",
"assets/assets/hb.mp3": "743536c5814796567aa50ab8e6d05f81",
"assets/assets/hc.mp3": "b05cd89e22ad7b3ba0e4f36fd46e3ddc",
"assets/assets/hd.mp3": "0d53adc38a2befb3ce4844cafb86b271",
"assets/assets/he.mp3": "0e04483f8ca2f1992bfdd7106f950ac9",
"assets/assets/hf.mp3": "d6f23d7b02dee8a8ef04661904ba1349",
"assets/assets/hg.mp3": "98ec25a29858b35af74cf178e33ece8b",
"assets/assets/hh.mp3": "bdf7df766432ec64fb1f6b4fb897aa55",
"assets/assets/hi.mp3": "a534d0cbbeb8c847417efb51ad5b695d",
"assets/assets/hj.mp3": "07984cbad3204db1d35674da4d216aa8",
"assets/assets/hk.mp3": "746489a990227a476016fda5ad9c084b",
"assets/assets/hl.mp3": "8f81fd71a2ab46b990c84141e14c341f",
"assets/assets/hm.mp3": "981fb17ee64ed279d589187632c89f24",
"assets/assets/hn.mp3": "bf892923fe18866b9b18f178806f1999",
"assets/assets/ho.mp3": "ccaaf2de1caa7aa65d869efc86fea62c",
"assets/assets/hp.mp3": "1a2fd2846f2a49b0dbab9fd5d08a993a",
"assets/assets/hq.mp3": "595aba9b4929da15b4eba018204497f6",
"assets/assets/hr.mp3": "10fcc748bd7c543837348f4efc4406f8",
"assets/assets/hs.mp3": "073b18a5953d11f3d20ba9529228f2cb",
"assets/assets/ht.mp3": "a13c34e32d44112e7953e3889899cf9d",
"assets/assets/hu.mp3": "3171322d11c37c9bfa586cd0476f416d",
"assets/assets/hv.mp3": "1e498c653233037ca5af1f4f68e95cac",
"assets/assets/hw.mp3": "f0094f32bbcec147568053f5432cb655",
"assets/assets/hx.mp3": "056bc7471624e735ccd7582f56dbe4bc",
"assets/assets/hy.mp3": "e1c61f2253a53016b92c0d8cb2232376",
"assets/assets/hz.mp3": "19f1d05825b8f32ec747295e19bf540e",
"assets/assets/hzz.mp3": "53e20b6c0fecfb023287d257bcdf76eb",
"assets/assets/hzzz.mp3": "b375fc4705740a83619bdd8f0bb1ca66",
"assets/assets/i.mp3": "963f54488db5f45d0d7497d65491f6a7",
"assets/assets/ilh%2520noon%2520ex1.mp3": "e003dd113fcb108e06e465d28a98ec02",
"assets/assets/ilh%2520noonex10.mp3": "34e6502e791c2b1ee6d0df9e08c020cf",
"assets/assets/ilh%2520noonex2.mp3": "1e6e1ab9391babd6d21e10c0c53b7eda",
"assets/assets/ilh%2520noonex3.mp3": "361468071120cb92e5ec075e5b8ff962",
"assets/assets/ilh%2520noonex4.mp3": "0b59018d95dda25efd26716af857d654",
"assets/assets/ilh%2520noonex5.mp3": "434647e7bfbe3c26b626b61c96bbb519",
"assets/assets/ilh%2520noonex6.mp3": "0e8e7dba9427900248b362233cc4ef65",
"assets/assets/ilh%2520noonex7.mp3": "d7b131850848071e3dc90b76241b61e1",
"assets/assets/ilh%2520noonex8.mp3": "dcb4fe5370e461c7dbedadedb9ff0cfd",
"assets/assets/ilh%2520noonex9.mp3": "e3a682ab1632266a1afc4b8455a0ba5a",
"assets/assets/img/%25D8%25B2.png": "8748c203d5bcd083d609cc5a2b815914",
"assets/assets/img/%25D8%25B3%25D9%2583%25D8%25AA%25D9%2587.png": "1c87c72827557c80e7960d386326a21e",
"assets/assets/img/%25D8%25B5%25D9%2584.png": "b58c35249756a9a0b4003f60457d15d8",
"assets/assets/img/%25D8%25B5.png": "69a8e5845648bd34c6ff37d862278aa1",
"assets/assets/img/%25D9%2582%25D9%2581.png": "7626e6fa7f2200f46d63010e3aac0187",
"assets/assets/img/%25D9%2582.png": "e5530bd05044272d294060b85e46fb8c",
"assets/assets/img/%25D9%2583.png": "223dacb771a7566a939653a517deeebb",
"assets/assets/img/%25D9%2585%25D8%25B9.png": "23a5df4b98064c1bbd86d8765a9549ab",
"assets/assets/img/%25D9%2588%25D9%2582%25D9%2581%25D9%2587.png": "b1aaf8cc5f6f542b5866ece76eea047a",
"assets/assets/img/arrow.png": "02ac7fe2495af61992c4200ab3db0ef7",
"assets/assets/img/backword.png": "8c20ac44823695d5e907822e61a1830e",
"assets/assets/img/dot.png": "5d201df3970388c5f8d67bae2a7d313c",
"assets/assets/img/forward.png": "8ccf25f3e5137d91291230ad662713af",
"assets/assets/img/jeem.png": "590d8f7d241617f6c6b62abcb129ca7c",
"assets/assets/img/js.png": "28f80b2df52ba1fb074c6b29154ce416",
"assets/assets/img/laam.png": "c99e99ef7919729dffe64c5f804c3094",
"assets/assets/img/loop.png": "dcf5bef4869a2de44ee4dd2026f49979",
"assets/assets/img/mb.png": "72ba9e43ac37121ef55aed45f2ae9e43",
"assets/assets/img/menu.png": "0b633a955f6fc167b721dc95305ba7b2",
"assets/assets/img/ms.png": "dfeb0c7c78d7ec9c01097e54940f0de2",
"assets/assets/img/qila.png": "aec798e9ca074b7331c3bfa0ec6669b2",
"assets/assets/img/repeat.png": "13ac941500df8dc5a2648f91abc73b7c",
"assets/assets/img/sila.png": "e63c27654dc7a8c640bcdb11b082339d",
"assets/assets/img/sj.png": "fa4190bbdd0014f387b42ca610883806",
"assets/assets/img/ssn.png": "4cd9863f3409701ebaaf83bdfa1ac55f",
"assets/assets/img/thwa.png": "b0f13dcfd428d75c8544c9d7028fc7dd",
"assets/assets/j.mp3": "73404abed94d45487d7e01ba253789b4",
"assets/assets/k.mp3": "0f4a578e4ae88ffd9de0e914a1800166",
"assets/assets/l.mp3": "b845e817938be9fd6a9a29c50e1055d8",
"assets/assets/laazim%25201.mp3": "2c1b76e0e2d930e19afeee1cc592ab3f",
"assets/assets/laazim%25202.mp3": "625f8eb3af0d16a497c88a3272503e63",
"assets/assets/leen%25201.mp3": "db4adeec76884ef42e4f1537e06afe33",
"assets/assets/leen%25202.mp3": "01ac0b04fd8032e3617e590f84bf23c1",
"assets/assets/leen%25203.mp3": "9da7d8354534fd98d737f51d36cd24a9",
"assets/assets/m.mp3": "6d30f6f463932c8b0b11bb6637da7646",
"assets/assets/madd.mp3": "d628a27c8c78b42021a29dcf00f3aacc",
"assets/assets/mem1.mp3": "3ce01c5ade83c18b953be861319437fa",
"assets/assets/mem2.mp3": "161ec91b3579068177d45ad90ef751b3",
"assets/assets/mem21.mp3": "3d7739462a6f40dab5f8017caa633fd1",
"assets/assets/mem26.mp3": "55ad457ba9a37d5f8d8a9a2771d4a72e",
"assets/assets/mem31.mp3": "0e41b6eebc39e1fdb1fcdea83c73b559",
"assets/assets/mem32.mp3": "5d8bb0ca8802cc4a29c1f51f9059d2b2",
"assets/assets/mem36.mp3": "70067c27d985298ff0921922c89d0628",
"assets/assets/mem37.mp3": "48ab638fd76734563e09d310e5433a96",
"assets/assets/mem6.mp3": "e0b1da2de559b65e129cfe79eb02c707",
"assets/assets/mem7.mp3": "9987439aa8ef8260fa82a1ce9d02eb71",
"assets/assets/munfasil%25201.mp3": "e2cfffa79c95c9f69cb900ef6061b270",
"assets/assets/muthasil%25201.mp3": "460cb701c652f27c6120fa74ae8e016c",
"assets/assets/muthasil%25202.mp3": "814177d186e2c87ad6bc056b28b93ce6",
"assets/assets/muthasil%25203.mp3": "b97a021033f30619fbaab65d195fcf3d",
"assets/assets/n.mp3": "7225f18dfb14fa58be2ef95ab8047bf3",
"assets/assets/non11.mp3": "be12e5d2792838048ee988ea3eaa0f76",
"assets/assets/non12.mp3": "589b87aad7e04260c69ecef2c7a92a68",
"assets/assets/non13.mp3": "037c0591ca623619ce286b99d50f739d",
"assets/assets/non14.mp3": "25d2b4c08ac81b66a3979350ccb5da85",
"assets/assets/non15.mp3": "aa16444c12efa2c414630b5c02f7fabf",
"assets/assets/non16.mp3": "c38d5c9bb58c74fd26bad91efc4bccf1",
"assets/assets/non17.mp3": "e3062fcdbe3a2c793eaf1638a33fa6fe",
"assets/assets/non18.mp3": "1ecca47dcfeaae6eb0add7bc7ae4461a",
"assets/assets/non19.mp3": "9a9eeed3d98876f4ddeacfcbcba51923",
"assets/assets/non20.mp3": "db501748d0b03750598fbbdfd8c70d75",
"assets/assets/non33.mp3": "c4084da2e4692635a505bf9bdcdb31cf",
"assets/assets/non34.mp3": "ee23617e852ddb27df37b5e9b1840319",
"assets/assets/non36.mp3": "4cee11d278a8f419639699a0a5e15049",
"assets/assets/non37.mp3": "648a4e1c8e322321e94b796604689925",
"assets/assets/non38.mp3": "81032d87d8d1e8a053014322ebb80817",
"assets/assets/non39.mp3": "6acb0b2406b8c58521cdcaa57dc94677",
"assets/assets/non41.mp3": "523e53d1b1ec86b67460e5aa072a6de2",
"assets/assets/non42.mp3": "80b809585e431a9933d32512e34331bc",
"assets/assets/non43.mp3": "c6f7a6152d83fcdd0e97047b12148b7c",
"assets/assets/non46.mp3": "35ca17408d6b02ac71f9151e1b88ba01",
"assets/assets/non47.mp3": "fb021b344c8d7756b9a5efc4b1c7cbcd",
"assets/assets/non48.mp3": "c6885cf08b4e8f97dcfce2a20e7de38d",
"assets/assets/non50.mp3": "00a2b2251098c31ae50ff042c1784024",
"assets/assets/non51.mp3": "5642e8b3dd9ca760c2b7836cfc11af5e",
"assets/assets/non52.mp3": "a6f22f5b8a83a0e7f49bc889f1d5127b",
"assets/assets/non53.mp3": "e1952558987184e32876eccc7e3d057b",
"assets/assets/non54.mp3": "f93f5a19a310818e7b2cff04da16377e",
"assets/assets/non55.mp3": "13c5236899950fbcd46119386491f6f5",
"assets/assets/non56.mp3": "5a10ce3e0c956d016c1b36e7ba588460",
"assets/assets/non57.mp3": "6bfc963789c728fa317cb6fdd3f4279c",
"assets/assets/non58.mp3": "75676c8cce29ac8228d25413e4db6b62",
"assets/assets/non59.mp3": "6dab6251d3c64542274318fd0a49003f",
"assets/assets/noon31.mp3": "35539ab0e09dab04f42533cedb5438da",
"assets/assets/noon32.mp3": "ac8ebb8614d359c9cfcd93c0d016122f",
"assets/assets/noon35.mp3": "6acb0b2406b8c58521cdcaa57dc94677",
"assets/assets/o.mp3": "869b7c88feedd8be88397879b1f1ce66",
"assets/assets/p.mp3": "c39138d4fa095349e6e106727982fe07",
"assets/assets/q.mp3": "7e598f85494eca2122796f57a85cdc0f",
"assets/assets/r.mp3": "01b947b9e3fafe1f4db037db948f3472",
"assets/assets/s.mp3": "b6825ea1de3b41ec45d889919847fc4c",
"assets/assets/Sifath/infithaah.png": "3d988958e9c51c4ed3d229717bb97305",
"assets/assets/Sifath/isthialaa.png": "5031f4b486ebe6538bd2db490e168588",
"assets/assets/Sifath/isthifaal.png": "730c0c789fcd279194f826d5a73f2ba9",
"assets/assets/Sifath/ithbaq.png": "c860b88fa42d375f3a64fd7979b08f41",
"assets/assets/Sifath/rihv.jpg": "6dcd3ee695a14736664590c661c97ced",
"assets/assets/Sifath/rihv.png": "c1becd15ea207d386e260ac8a4c8f35d",
"assets/assets/Sifath/s1.jpg": "a1cd7ee06a64c5260649da51c1dd2159",
"assets/assets/Sifath/s10.jpg": "91c8f4d1e45bb4d226a6068c7937d150",
"assets/assets/Sifath/s11.jpg": "55e6ce464c8cfa09185bb6577357576e",
"assets/assets/Sifath/s12.jpg": "7de072741c99665e26b212108f2a2387",
"assets/assets/Sifath/s2.jpg": "bb24100ac1a0e40850553e2c3194fe8b",
"assets/assets/Sifath/s3.jpg": "1e1e73e9e0e980f6e253cdc8068ffeaa",
"assets/assets/Sifath/s4.jpg": "23fcfc3a50422993e261ee7ce6f08fd7",
"assets/assets/Sifath/s6.jpg": "5dd462bbd22219673342a4905ae987bb",
"assets/assets/Sifath/s7.jpg": "62d07e7b6c76b45f954e13986bff17de",
"assets/assets/Sifath/s9.jpg": "b7f3fbe3a6e89e490a29551eff9c74d6",
"assets/assets/Sifath/shidath.png": "f18aeef2be0706c7b1ade155aed53c91",
"assets/assets/Sifath/thawasath.png": "26d7ccc2716b0a0706510b299e96c9d6",
"assets/assets/t.mp3": "dc30ad8ff225ed35a523482b13fb39d4",
"assets/assets/u.mp3": "59827bc7bdf3b67aea8444f844c6193f",
"assets/assets/v.mp3": "827eb5b8275ef98c158ee03d9536d070",
"assets/assets/w.mp3": "a9fedc5ca580c24cf07208f8e8b3b110",
"assets/assets/x.mp3": "5c7326203d24a48956bdf9a2a5439194",
"assets/assets/y.mp3": "db91b2f24403f07fd03c2331565c463d",
"assets/assets/z.mp3": "a27af4dcf7796f4630401828c13d386a",
"assets/assets/zz.mp3": "ae4bdf6c8c40ef4d804f1249f30127fd",
"assets/assets/zzz.mp3": "057a3cf9585f3e43305c970183ecfc0e",
"assets/FontManifest.json": "c88f0a51274e03cf8d1cec45edb29b3a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6f88169b4ac6c20862e6487448397f7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "e81a786752b896546b95ada0bd11f20a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "286a2ed4004990ce87ca6d1bcc1e4510",
"icons/Icon-512.png": "63f8ac4a7a22a53cb229553f03332d14",
"icons/Icon-maskable-192.png": "1216985a73a49221748166e09d233ee3",
"icons/Icon-maskable-512.png": "37ea0ccc2b52cd578b38a19a331b4503",
"index.html": "2f2b28f06d156759cc272577a19e7f50",
"/": "2f2b28f06d156759cc272577a19e7f50",
"main.dart.js": "4aa180b843616355e6f08337147bae1e",
"manifest.json": "e9bbdd8941f5b78abcaecebfcb4905d1",
"version.json": "53769c566c081e5d8e58170949e588e5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
