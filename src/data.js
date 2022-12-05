const DUMMY_PRODUCTS = [
    {
      "id": 1,
      "category": "pantalones",
      "title": "Bermuda rústica",
      "description": "Bermuda rústica de lino.",
      "price": 3200,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610997/alta-pinta/bermuda-rustico2_wn9koy.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610984/alta-pinta/bermuda-rustico1_qwgivo.webp"] 
    },
    {
      "id": 2,
      "category": "camisas",
      "title": "Camisa lisa",
      "description": "Camisa lisa de algodón.",
      "price": 2600,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "rosa"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610997/alta-pinta/camisa-blanca2_x3irvy.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610997/alta-pinta/camisa-blanca3_c248sv.webp"] 
    },
    {
      "id": 3,
      "category": "remeras-y-polos",
      "title": "Remera lisa",
      "description": "Remera lisa de algodón.",
      "price": 1700,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "amarillo", "rosa"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610998/alta-pinta/remera-azul2_bpmhsh.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610998/alta-pinta/remera-azul1_byil0b.webp"] 
    },
    {
      "id": 4,
      "category": "abrigos-y-camperas",
      "title": "Campera",
      "description": "Campera de invierno.",
      "price": 6000,
      "colors": ["blanco", "negro", "gris", "azul", "verde"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668876928/alta-pinta/campera_d3zggp.jpg"] 
    },
    {
      "id": 5,
      "category": "calzados",
      "title": "Zapatos",
      "description": "Zapatos de cuero.",
      "price": 3100,
      "colors": [ "negro", "marrón"],
      "size": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668877053/alta-pinta/brown-leather-shoes_twujbu.jpg"] 
    },
    {
      "id": 6,
      "category": "sweaters-y-cardigans",
      "title": "Sweeter",
      "description": "Sweeter de lana.",
      "price": 3890,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610998/alta-pinta/campera4_mj11ac.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610998/alta-pinta/campera3_qivulu.webp"] 
    },
    {
      "id": 7,
      "category": "calzados",
      "title": "Zapatillas",
      "description": "Zapatillas deportivas.",
      "price": 3290,
      "colors": [ "negro", "azul"],
      "size": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668877067/alta-pinta/shoes_s3b75w.jpg"] 
    },
    {
      "id": 8,
      "category": "remeras-y-polos",
      "title": "Remera camuflada",
      "description": "Remera camuflada sublimada de algodón.",
      "price": 1600,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "amarillo", "rosa"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669823978/alta-pinta/remera-camuflada-2_fpiqlm.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669823978/alta-pinta/remera-camuflada-1_wxxh1m.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669823978/alta-pinta/remera-camuflada-3_zmscmt.webp"] 
    },
    {
      "id": 9,
      "category": "camisas",
      "title": "Camisa rayada",
      "description": "Camisa rayada de algodón.",
      "price": 2100,
      "colors": ["blanco y celeste", "negro y blanco", "gris y blanco", "azul y blanco"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824361/alta-pinta/camisa-rayada-1_wi6poy.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824361/alta-pinta/camisa-rayada-2_dnjqao.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824361/alta-pinta/camisa-rayada-33_m22f9u.webp"] 
    },
    {
      "id": 10,
      "category": "pantalones",
      "title": "Traje de baño",
      "description": "Traje de baño sublimado.",
      "price": 2700,
      "colors": ["blanco y negro", "blanco y gris", "azul y celeste", "azul y blanco", "marrón y camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824782/alta-pinta/traje-banio-1_ksekco.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824782/alta-pinta/traje-banio-33_uhonsz.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824782/alta-pinta/traje-banio-2_sm1q1z.webp"] 
    },
    {
      "id": 11,
      "category": "remeras-y-polos",
      "title": "Remera con bolsillo",
      "description": "Remera lisa con bolsillo.",
      "price": 1600,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "amarillo", "rosa"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824931/alta-pinta/13009551101_y7slkj.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824931/alta-pinta/13009551101_2_o1zhfx.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669824931/alta-pinta/13009551101_1_xauo3c.webp"] 
    },
    {
      "id": 12,
      "category": "pantalones",
      "title": "Pantalón duck",
      "description": "Pantalón duck slim fit.",
      "price": 3400,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825164/alta-pinta/13003726104_mlltmj.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825164/alta-pinta/13003726104_1_jetib2.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825164/alta-pinta/13003726104_2_jxpl8i.webp"] 
    },
    {
      "id": 13,
      "category": "sweaters-y-cardigans",
      "title": "Sweeter escote V",
      "description": "Sweeter escote V liso.",
      "price": 3890,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825409/alta-pinta/1321A014154_ak2yrl.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825409/alta-pinta/1321A014154_1_jrdryh.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825409/alta-pinta/1321A014154_4_brfw0c.webp"] 
    },
    {
      "id": 14,
      "category": "sweaters-y-cardigans",
      "title": "Campera básica",
      "description": "Campera básica lisa con cierre.",
      "price": 3990,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825630/alta-pinta/1322A078103_e8ivhi.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825630/alta-pinta/1322A078103_1_lurcgv.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825630/alta-pinta/1322A078103_2_fchszz.webp"] 
    },
    {
      "id": 15,
      "category": "remeras-y-polos",
      "title": "Polo lisa",
      "description": "Polo lisa manga larga.",
      "price": 2400,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "amarillo", "celeste"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825799/alta-pinta/13229562119_a4op9s.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825799/alta-pinta/13229562119_3_bpdi3j.webp"] 
    },
    {
      "id": 16,
      "category": "remeras-y-polos",
      "title": "Polo con bolsillo",
      "description": "Polo lisa manga corta con bolsillo.",
      "price": 2100,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "amarillo", "celeste"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825960/alta-pinta/13009510101_2_nnblld.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669825960/alta-pinta/13009510101_qlnuor.webp" ] 
    },
    {
      "id": 17,
      "category": "pantalones",
      "title": "Traje de baño",
      "description": "Traje de baño liso con bolsillos laterales.",
      "price": 3200,
      "colors": ["negro", "gris", "azul", "verde", "celeste"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669826081/alta-pinta/13222902153_uio6dw.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668610984/alta-pinta/bermuda-rustico1_qwgivo.webp", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1669826081/alta-pinta/13222902153_3_mt06h0.webp"] 
    },
     {
      "id": 18,
      "category": "calzados",
      "title": "Zapatillas",
      "description": "Zapatillas deportivas blancas.",
      "price": 3690,
      "colors": [ "negro", "azul"],
      "size": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670014488/alta-pinta/pexels-humphrey-muleba-2072453_ub84uc.jpg"] 
    },
    {
      "id": 19,
      "category": "calzados",
      "title": "Borcegos",
      "description": "Borcegos de cuero.",
      "price": 3890,
      "colors": [ "negro", "marrón"],
      "size": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670014676/alta-pinta/borcegos_iv3bcv.jpg"] 
    },
    {
      "id": 20,
      "category": "calzados",
      "title": "Zapatos",
      "description": "Zapatos de cuero.",
      "price": 3890,
      "colors": [ "negro", "marrón"],
      "size": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670014756/alta-pinta/292999_w4s989.jpg"] 
    },
    {
      "id": 21,
      "category": "calzados",
      "title": "Borcegos",
      "description": "Borcegos de cuero.",
      "price": 3890,
      "colors": [ "negro", "marrón"],
      "size": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670014885/alta-pinta/borcego-3_hddmvw.jpg", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670014843/alta-pinta/borcego-2_i9lqds.jpg"] 
    },
    {
      "id": 22,
      "category": "pantalones",
      "title": "Pantalón gabardina",
      "description": "Pantalón de gabardina para el verano.",
      "price": 3200,
      "colors": ["blanco", "negro", "gris", "azul", "verde", "camel"],
      "size": ["XS", "S", "M", "L", "XL"],
      "srcImg": ["https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670015008/alta-pinta/pantalon-camel-2_ehohob.jpg", "https://res.cloudinary.com/dtq1qaw4z/image/upload/v1670015007/alta-pinta/pantalon-camel-1_prbuq5.jpg"] 
    }
];

export default DUMMY_PRODUCTS;
