// const products = [
//   {
//     id: "1",
//     name: "Nvidia GeForce RTX 4090",
//     price: 2099,
//     category: "Componentes",
//     img: "https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2022/09/geforce-rtx-4090-product-photo-002-1480x1003-1.png?resize=1400%2C949&ssl=1",
//     stock: 25,
//     description: "Model Founders Edition RTX™ 3090 24GB",
//   },
//   {
//     id: "2",
//     name: "Nvidia GeForce RTX 3090ti MSI",
//     price: 1899,
//     category: "Componentes",
//     img: "https://www.invidcomputers.com/images/000000000041477160070414771--1-.png",
//     stock: 15,
//     description: "Model SUPRIM X GeForce RTX™ 3090 Ti 24GB",
//   },
//   {
//     id: "3",
//     name: "Nvidia GeForce RTX 3090 ASUS",
//     price: 1599,
//     category: "Componentes",
//     img: "https://drakemall-files-new.s3.eu-central-1.amazonaws.com/NVIDIA%20G-ckmwc06v7000701o7epoyjmdc.png",
//     stock: 17,
//     description: "Model Rog Strix GeForce RTX™ 3090 24GB",
//   },
//   {
//     id: "4",
//     name: "Radeon™ RX 7900 XTX AORUS",
//     price: 1399,
//     category: "Componentes",
//     img: "https://static.gigabyte.com/StaticFile/Image/Global/04a28aa202dec679ec59dbd21bc71aad/Product/32850/Png",
//     stock: 16,
//     description: "Model AORUS Radeon™ RX 7900 XTX 24GB",
//   },
//   {
//     id: "5",
//     name: "Radeon™ RX 7900 XT ASRock",
//     price: 1199,
//     category: "Componentes",
//     img: "https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%207900%20XT%2020GB(M1).png",
//     stock: 10,
//     description: "Model ASRock Gaming RX 7900 XT 20GB",
//   },
//   {
//     id: "6",
//     name: "Memoria Ram G.Skill Trident Z5 RGB",
//     price: 153,
//     category: "Componentes",
//     img: "https://www.gskill.com/_upload/images/166564437412.png",
//     stock: 12,
//     description: "DDR5 6000MHz",
//   },
//   {
//     id: "7",
//     name: "Memoria Ram G.Skill Trident Z RGB",
//     price: 130,
//     category: "Componentes",
//     img: "https://3.bp.blogspot.com/-NYu0LDSsqRc/Wo7_qx19dLI/AAAAAAAADJU/hMVL7w59kqovMLrJYESfwrHsaZm7595IQCLcBGAs/s1600/01.trident.z.rgb.png",
//     stock: 21,
//     description: "DDR4 3600MHz",
//   },
//   {
//     id: "8",
//     name: "Memoria Ram Corsair Vengace RGB",
//     price: 187,
//     category: "Componentes",
//     img: "https://www.corsair.com/medias/sys_master/images/images/hcd/hfe/10239812173854/vengeance-rgb-ddr5-blk-config/Gallery/Vengeance-RGB-DDR5-2UP-BLACK_01/-vengeance-rgb-ddr5-blk-config-Gallery-Vengeance-RGB-DDR5-2UP-BLACK-01.png_515Wx515H",
//     stock: 16,
//     description: "DDR5 6000MHz",
//   },
//   {
//     id: "9",
//     name: "Memoria Ram Corsair Vengace PRO",
//     price: 104,
//     category: "Componentes",
//     img: "https://www.neobyte.es/23793-thickbox_default/memoria-corsair-ddr4-32gb-2x16gb-3200-rgb-pro-bl.jpg",
//     stock: 14,
//     description: "DDR4 3600MHz",
//   },
//   {
//     id: "10",
//     name: "Memoria Ram T Force NightHawk",
//     price: 120,
//     category: "Componentes",
//     img: "https://i.ibb.co/dpssyqs/descarga-1.png",
//     stock: 19,
//     description: "DDR4 4000MHz",
//   },

//   {
//     id: "11",
//     name: "Notebook ROG Strix G15 G512",
//     price: 1140,
//     category: "Notebooks",
//     img: "https://dlcdnwebimgs.asus.com/gain/33BE3FBC-C1AE-433A-A811-D9DFD39057C6",
//     stock: 31,
//     description: "Modelo Rog Strix G15 i7 RTX 2070 SUPER",
//   },
//   {
//     id: "12",
//     name: "Notebook GAMER MSI GF63",
//     price: 879,
//     category: "Notebooks",
//     img: "https://d2r9epyceweg5n.cloudfront.net/stores/467/231/products/msi-11-2e5cd2dd35aa37ce9a16442537134397-1024-1024.png",
//     stock: 32,
//     description: 'Modelo GF63 15.6" 256GB i5 8G GTX 1650',
//   },
//   {
//     id: "13",
//     name: "Notebook Aorus 17g Kd",
//     price: 1240,
//     category: "Notebooks",
//     img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-6474289.png",
//     stock: 25,
//     description: "Core I7 Rtx 3060 16 512gb W10 Gigabyte",
//   },
//   {
//     id: "14",
//     name: "Notebook Acer Gaming Nitro 17 ",
//     price: 1200,
//     category: "Notebooks",
//     img: "https://www.noticias3d.com/imagenes/noticias/202301/Nitro_16_AMD_AN16-41_05%20700%20px.png",
//     stock: 18,
//     description: '17,3" i7-12700H RTX 4080 32GB',
//   },
//   {
//     id: "15",
//     name: "Notebook MSI Gamer GE66 Raider",
//     price: 1310,
//     category: "Notebooks",
//     img: "https://i5.walmartimages.com/asr/e0ee598a-4340-461b-b2e3-e6fc289f18f6.c08f0e26cf4705c6e84452c422b379ac.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     stock: 16,
//     description: '15.6" i7-12700H RTX 3080 Ti 32GB',
//   },

//   {
//     id: "16",
//     name: "Auriculares Wireless Logitech G733",
//     price: 150,
//     category: "Accesorios",
//     img: "https://logitechar.vtexassets.com/arquivos/ids/157596/G733-FOB-Lilac.png?v=637358693320070000",
//     stock: 45,
//     description: "20m de alcance 29hs de Bateria",
//   },
//   {
//     id: "17",
//     name: "Auriculares Logitech G335 Mint",
//     price: 99,
//     category: "Accesorios",
//     img: "https://resource.logitech.com/content/dam/gaming/en/products/g335/g335-mint-gallery-1.png",
//     stock: 23,
//     description: "Cable 2mt Peso 240g ultraliviano",
//   },
//   {
//     id: "18",
//     name: "Auriculares ASTRO A50 +",
//     price: 339,
//     category: "Accesorios",
//     img: "https://resource.astrogaming.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-ps4-01-refresh.png?v=1",
//     stock: 10,
//     description: "ASTRO Audio V2 Base de carga",
//   },
//   {
//     id: "19",
//     name: "Auriculares ASTRO A40 TR",
//     price: 160,
//     category: "Accesorios",
//     img: "https://resource.astrogaming.com/content/dam/astro/en/products/a40-tr-gen4/a40-gen4-gallery-xbox-01-refresh.png",
//     stock: 43,
//     description: "Cable 2mt Peso 240g ultraliviano",
//   },
//   {
//     id: "20",
//     name: "Mouse Razer Viper V2 Pro Wireless",
//     price: 141,
//     category: "Accesorios",
//     img: "https://assets2.razerzone.com/images/pnx.assets/dd2cb52f4bf27ff926aa88e6df386019/razer-viper-v2-pro-black.png",
//     stock: 10,
//     description: "Peso 74g 30k Dpi",
//   },
//   {
//     id: "21",
//     name: "Mouse Razer Deathadder V2 Wireless",
//     price: 69,
//     category: "Accesorios",
//     img: "https://www.mastergamingstore.com/wp-content/uploads/2020/12/razer-death-adder-gallery-29.png",
//     stock: 65,
//     description: "Peso 82g 20kdpi",
//   },
//   {
//     id: "22",
//     name: "Mouse Glorious Model O- Wireless",
//     price: 90,
//     category: "Accesorios",
//     img: "https://cdn.shopify.com/s/files/1/0549/2681/products/model-o-wireless-minus-black-3.png?v=1676048961",
//     stock: 12,
//     description: "69g 19kdpi 71hs",
//   },
//   {
//     id: "23",
//     name: "Mouse G Pro X Superlight",
//     price: 109,
//     category: "Accesorios",
//     img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5138210.png",
//     stock: 42,
//     description: "30k Dpi 80hs",
//   },
//   {
//     id: "24",
//     name: "Teclado Razer Huntsman Mini 60",
//     price: 110,
//     category: "Accesorios",
//     img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-9655267.png",
//     stock: 54,
//     description: "Modelo 60 ultra liviano wireless",
//   },
//   {
//     id: "25",
//     name: "Teclado Logitech G Pro X TKL",
//     price: 119,
//     category: "Accesorios",
//     img: "https://www.venex.com.ar/products_images/1661361147_lol-4.png",
//     stock: 43,
//     description: "Modelo League of Legends wireless",
//   },
// ];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 2000);
  });
};
