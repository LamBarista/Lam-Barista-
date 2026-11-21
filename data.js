// Lam's Barista v6 - Complete 25-Drink Dataset & Curriculum Data
const BARISTA_DATA = [
  {
    "id": "ferlatum-passion",
    "name": "Ferlatum Passion",
    "category": "Signature Mocktail",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "55.000đ",
    "color": [
      195,
      55,
      65
    ],
    "desc": "Thức uống biểu tượng của Lam's Barista kết hợp vị chua thanh chanh dây nhiệt đới, hương thảo mộc và lớp bọt mịn quyến rũ.",
    "ingredients": [
      "45ml Nước cốt chanh dây tươi",
      "20ml Syrup đường mía vàng",
      "15ml Nước cốt tắc",
      "100ml Trà lài ủ lạnh",
      "1 nhánh hương thảo (Rosemary)"
    ],
    "steps": [
      "Cho chanh dây, syrup đường và nước cốt tắc vào bình Shaker cùng đá viên.",
      "Lắc mạnh trong 12 giây để tạo lớp bọt mịn tự nhiên.",
      "Rót ra ly Highball đầy đá già, châm nhẹ trà lài lên trên và trang trí nhánh hương thảo."
    ]
  },
  {
    "id": "saigon-bac-xiu",
    "name": "Bạc Xỉu Sài Gòn Cổ Điển",
    "category": "Cà Phê Việt",
    "temp": "Cold",
    "prep": "4 phút",
    "price": "39.000đ",
    "color": [
      165,
      115,
      75
    ],
    "desc": "Sự hòa quyện béo ngậy của sữa đặc, sữa tươi thanh trùng và lớp bọt cà phê Robusta đánh bông đậm đà.",
    "ingredients": [
      "40ml Sữa đặc có đường",
      "80ml Sữa tươi không đường",
      "25ml Cốt cà phê phin / Espresso Robusta",
      "Đá viên già"
    ],
    "steps": [
      "Rót sữa đặc xuống đáy ly thủy tinh.",
      "Thêm đầy đá viên, rót từ từ sữa tươi lên trên để tạo tầng.",
      "Đánh bông nhẹ phần cốt cà phê rồi rót lên trên cùng."
    ]
  },
  {
    "id": "salted-cream-coffee",
    "name": "Cà Phê Kem Muối Huế",
    "category": "Cà Phê Việt",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "45.000đ",
    "color": [
      140,
      95,
      65
    ],
    "desc": "Cà phê đậm vị cân bằng hoàn hảo với lớp kem sữa béo mặn nhẹ đánh bông mịn màng.",
    "ingredients": [
      "35ml Cốt cà phê Espresso / Phin đậm",
      "15ml Sữa đặc",
      "40ml Kem béo thực vật (Rich's)",
      "15ml Sữa tươi",
      "1g Muối biển hồng"
    ],
    "steps": [
      "Đánh bông kem béo, sữa tươi và muối biển ở tốc độ vừa trong 45 giây đến khi sệt mịn.",
      "Khuấy đều cà phê nóng với sữa đặc, rót vào ly đá.",
      "Phủ lớp kem muối dày 2cm lên bề mặt và rắc nhẹ bột cacao."
    ]
  },
  {
    "id": "classic-espresso",
    "name": "Espresso Normale",
    "category": "Espresso Bar",
    "temp": "Hot",
    "prep": "2 phút",
    "price": "35.000đ",
    "color": [
      75,
      45,
      30
    ],
    "desc": "Chiết xuất chuẩn tỷ lệ 1:2 từ hạt Arabica Cầu Đất rang vừa, lớp crema nâu hổ phách dày mịn.",
    "ingredients": [
      "18g Cà phê hạt Arabica rang vừa",
      "36g Nước tinh khiết đạt chuẩn TDS 100ppm"
    ],
    "steps": [
      "Xay mịn 18g cà phê, dàn đều (WDT) và nén phẳng lực 15kg.",
      "Xả nước tráng họng pha 2 giây, lắp tay cầm và chiết xuất trong 27-30 giây.",
      "Phục vụ kèm ly nước lọc thanh vị."
    ]
  },
  {
    "id": "velvet-latte",
    "name": "Velvet Caffè Latte",
    "category": "Espresso Bar",
    "temp": "Hot",
    "prep": "4 phút",
    "price": "55.000đ",
    "color": [
      185,
      145,
      110
    ],
    "desc": "Double shot Espresso hòa quyện cùng 200ml sữa tươi đánh microfoam bóng mượt ở 60°C.",
    "ingredients": [
      "18g Cà phê Arabica (36ml Espresso)",
      "200ml Sữa tươi thanh trùng lạnh 4°C"
    ],
    "steps": [
      "Chiết xuất double shot Espresso vào tách sứ 240ml đã làm ấm.",
      "Đánh sữa tạo bọt mịn (microfoam) dừng ở nhiệt độ 58°C - 60°C.",
      "Rót tạo hình Latte Art trái tim hoặc Tulip."
    ]
  },
  {
    "id": "cappuccino-classico",
    "name": "Cappuccino Classico",
    "category": "Espresso Bar",
    "temp": "Hot",
    "prep": "4 phút",
    "price": "55.000đ",
    "color": [
      160,
      120,
      88
    ],
    "desc": "Cấu trúc cân bằng 1/3 Espresso, 1/3 sữa nóng và 1/3 lớp bọt sữa dày bồng bềnh.",
    "ingredients": [
      "18g Cà phê Espresso",
      "150ml Sữa tươi thanh trùng",
      "Bột cacao nguyên chất"
    ],
    "steps": [
      "Chiết xuất Espresso vào tách 180ml.",
      "Tạo bọt sữa dày hơn Latte (tăng thời gian stretching thêm 3 giây).",
      "Rót sữa vào tâm tách tạo viền nâu đẹp mắt."
    ]
  },
  {
    "id": "caramel-macchiato",
    "name": "Iced Caramel Macchiato",
    "category": "Espresso Bar",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "59.000đ",
    "color": [
      190,
      140,
      90
    ],
    "desc": "Hương vani ngọt ngào, sữa tươi mát lạnh và dấu ấn Espresso đậm đà phủ sốt caramel.",
    "ingredients": [
      "15ml Syrup Vanilla",
      "180ml Sữa tươi không đường",
      "36ml Espresso",
      "15ml Sốt Caramel"
    ],
    "steps": [
      "Rót syrup vanilla vào đáy ly, thêm đá và sữa tươi.",
      "Rót nhẹ Espresso lên trên lớp đá để tạo phân tầng.",
      "Vẽ lưới sốt caramel lên bề mặt."
    ]
  },
  {
    "id": "cold-brew-orange",
    "name": "Cold Brew Cam Vàng Thảo Mộc",
    "category": "Cold Brew",
    "temp": "Cold",
    "prep": "3 phút",
    "price": "55.000đ",
    "color": [
      180,
      95,
      45
    ],
    "desc": "Cà phê ủ lạnh 16 giờ mượt mà kết hợp nước cam vàng tươi và hương sả thanh khiết.",
    "ingredients": [
      "100ml Cà phê Cold Brew (tỷ lệ 1:10)",
      "60ml Nước ép cam vàng tươi",
      "15ml Syrup đường phèn",
      "1 lát cam sấy & nhánh sả"
    ],
    "steps": [
      "Khuấy đều nước cam vàng và syrup đường phèn với đá viên.",
      "Rót từ từ Cold Brew lên trên để tạo hiệu ứng chuyển màu 2 tầng.",
      "Trang trí lát cam và sả đập dập."
    ]
  },
  {
    "id": "cold-brew-tonic",
    "name": "Espresso / Cold Brew Tonic",
    "category": "Cold Brew",
    "temp": "Cold",
    "prep": "3 phút",
    "price": "55.000đ",
    "color": [
      130,
      85,
      50
    ],
    "desc": "Sự bùng nổ sảng khoái giữa vị đắng ngọt của Cold Brew và bọt gas thanh mát từ nước Tonic.",
    "ingredients": [
      "80ml Cà phê Cold Brew đậm đặc",
      "120ml Nước Tonic ướp lạnh",
      "10ml Nước cốt chanh vàng",
      "Vỏ chanh vàng xoắn"
    ],
    "steps": [
      "Rót nước Tonic và nước cốt chanh vào ly đầy đá già.",
      "Rót nhẹ nhàng Cold Brew qua lưng thìa Barspoon lên trên.",
      "Xịt tinh dầu vỏ chanh vàng lên miệng ly."
    ]
  },
  {
    "id": "v60-pour-over",
    "name": "V60 Specialty Pour-Over",
    "category": "Manual Brew",
    "temp": "Hot",
    "prep": "4 phút",
    "price": "65.000đ",
    "color": [
      150,
      75,
      40
    ],
    "desc": "Chiết xuất thủ công làm nổi bật nốt hương hoa trắng, quả mọng và hậu vị ngọt thanh.",
    "ingredients": [
      "15g Cà phê Specialty rang sáng (Medium-Light)",
      "240g Nước tinh khiết 92°C"
    ],
    "steps": [
      "Tráng giấy lọc V60 bằng nước nóng và làm ấm bình Server.",
      "Rót 45g nước ủ (Blooming) trong 35 giây.",
      "Chia 2 lần rót xoáy tròn đều đến 240g, kết thúc chiết xuất ở 2 phút 30 giây."
    ]
  },
  {
    "id": "peach-lemongrass-tea",
    "name": "Trà Đào Cam Sả Trứ Danh",
    "category": "Trà Trái Cây",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "49.000đ",
    "color": [
      215,
      125,
      65
    ],
    "desc": "Hồng trà ủ chuẩn nhiệt hòa quyện cùng đào ngâm giòn ngọt, cam vàng và sả tươi.",
    "ingredients": [
      "120ml Cốt Hồng trà ủ chuẩn",
      "25ml Syrup Đào",
      "10ml Nước cốt tắc",
      "10ml Nước đường",
      "3 miếng đào ngâm & 1 lát cam vàng"
    ],
    "steps": [
      "Cho cốt trà, syrup đào, nước cốt tắc và nước đường vào Shaker lắc đều với đá.",
      "Rót ra ly, xếp 3 miếng đào ngâm và lát cam vàng lên trên.",
      "Cắm 1 nhánh sả tươi trang trí."
    ]
  },
  {
    "id": "lychee-rose-tea",
    "name": "Trà Vải Hoa Hồng",
    "category": "Trà Trái Cây",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "49.000đ",
    "color": [
      210,
      130,
      140
    ],
    "desc": "Hương thơm thanh tao của lục trà lài, vải thiều mọng nước và cánh hoa hồng hữu cơ.",
    "ingredients": [
      "120ml Cốt Lục trà lài sốc nhiệt",
      "25ml Syrup Vải",
      "5ml Syrup Hoa hồng",
      "10ml Nước cốt chanh",
      "3 quả vải ngâm"
    ],
    "steps": [
      "Lắc đều tất cả nguyên liệu lỏng với đá viên trong 10 giây.",
      "Rót ra ly thủy tinh cao, trang trí 3 quả vải ngâm và nụ hoa hồng khô."
    ]
  },
  {
    "id": "tropical-guava-tea",
    "name": "Trà Ổi Hồng Nhiệt Đới",
    "category": "Trà Trái Cây",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "49.000đ",
    "color": [
      220,
      110,
      120
    ],
    "desc": "Vị ngọt dịu của ổi hồng tươi xay nhuyễn quyện cùng trà Ô Long thanh mát và chút muối xí muội.",
    "ingredients": [
      "100ml Cốt Trà Ô Long",
      "50ml Nước ép / Puree ổi hồng",
      "15ml Syrup đường",
      "10ml Nước cốt tắc",
      "1 lát ổi hồng tươi"
    ],
    "steps": [
      "Lắc mạnh trà Ô Long, puree ổi hồng, syrup và tắc với đá.",
      "Rót ra ly, trang trí lát ổi tươi viền nhẹ muối xí muội."
    ]
  },
  {
    "id": "kumquat-honey-tea",
    "name": "Trà Tắc Mật Ong Nha Đam",
    "category": "Trà Trái Cây",
    "temp": "Cold",
    "prep": "4 phút",
    "price": "42.000đ",
    "color": [
      205,
      165,
      55
    ],
    "desc": "Thức uống giải nhiệt thanh mát với mật ong rừng nguyên chất, tắc tươi và thạch nha đam giòn sần sật.",
    "ingredients": [
      "130ml Cốt Lục trà",
      "25ml Mật ong nguyên chất",
      "15ml Nước cốt tắc tươi",
      "40g Nha đam đường phèn"
    ],
    "steps": [
      "Hòa tan mật ong vào cốt trà ấm nhẹ, thêm nước cốt tắc và đá viên.",
      "Khuấy đều, múc nha đam lên trên cùng và trang trí 2 lát tắc tươi."
    ]
  },
  {
    "id": "oolong-milk-tea",
    "name": "Trà Sữa Ô Long Nướng Trân Châu",
    "category": "Trà Sữa Hiện Đại",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "45.000đ",
    "color": [
      185,
      140,
      100
    ],
    "desc": "Hương trà Ô Long rang đậm quyện sữa béo mịn cùng trân châu đen nấu chuẩn dẻo mềm.",
    "ingredients": [
      "150ml Cốt Trà Ô Long đậm đặc",
      "30g Bột kem béo thực vật",
      "25ml Syrup đường nâu",
      "80g Trân châu đen đường nâu"
    ],
    "steps": [
      "Hòa tan bột kem béo vào cốt trà nóng, sốc nhiệt với đá viên.",
      "Cho trân châu đen vào đáy ly, lắc đều hỗn hợp trà sữa với đường nâu rồi rót vào."
    ]
  },
  {
    "id": "earl-grey-cheese-tea",
    "name": "Trà Bá Tước Kem Cheese",
    "category": "Trà Sữa Hiện Đại",
    "temp": "Cold",
    "prep": "6 phút",
    "price": "52.000đ",
    "color": [
      175,
      130,
      95
    ],
    "desc": "Hương cam Bergamot quý phái từ trà Earl Grey phủ lớp kem phô mai mặn béo tan chảy.",
    "ingredients": [
      "150ml Cốt Trà Bá Tước (Earl Grey)",
      "20ml Syrup đường",
      "50ml Kem Cheese (Cream cheese + Whipping + Sữa tươi + Muối)"
    ],
    "steps": [
      "Lắc cốt trà Bá Tước với syrup và đá viên, rót ra ly (chừa 2.5cm miệng ly).",
      "Rót nhẹ lớp kem Cheese đánh bông mịn lên bề mặt và rắc vụn bánh quy."
    ]
  },
  {
    "id": "brown-sugar-boba-milk",
    "name": "Sữa Tươi Trân Châu Đường Đen",
    "category": "Trà Sữa Hiện Đại",
    "temp": "Cold",
    "prep": "4 phút",
    "price": "49.000đ",
    "color": [
      135,
      85,
      55
    ],
    "desc": "Vân hổ đường đen Hàn Quốc nấu kẹo thơm lừng hòa cùng sữa tươi thanh trùng mát lạnh.",
    "ingredients": [
      "60g Trân châu đen ngâm sốt đường đen",
      "25ml Sốt đường đen cô đặc",
      "180ml Sữa tươi thanh trùng không đường"
    ],
    "steps": [
      "Múc trân châu và sốt đường đen xoay đều quanh thành ly tạo vân hổ.",
      "Thêm đầy đá viên và rót sữa tươi thanh trùng lên trên."
    ]
  },
  {
    "id": "matcha-latte-uji",
    "name": "Uji Matcha Latte",
    "category": "Matcha & Cacao",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "55.000đ",
    "color": [
      105,
      155,
      80
    ],
    "desc": "Bột trà xanh Uji Nhật Bản đánh chổi Chasen thủ công giữ trọn vị Umami thanh khiết.",
    "ingredients": [
      "4g Bột Matcha Uji Nhật Bản",
      "40ml Nước ấm 75°C",
      "160ml Sữa tươi thanh trùng",
      "15ml Simple Syrup"
    ],
    "steps": [
      "Rây mịn bột Matcha vào bát Chawan, thêm nước ấm 75°C và đánh chữ M bằng chổi Chasen đến khi sủi bọt mịn.",
      "Rót sữa tươi và syrup vào ly đá, rót nhẹ lớp Matcha lên trên tạo 2 tầng xanh trắng."
    ]
  },
  {
    "id": "cacao-latte-daklak",
    "name": "Cacao Nguyên Chất Đắk Lắk",
    "category": "Matcha & Cacao",
    "temp": "Hot",
    "prep": "4 phút",
    "price": "45.000đ",
    "color": [
      100,
      60,
      45
    ],
    "desc": "100% bột cacao nguyên chất rang mộc hòa quyện sữa tươi nóng ấm áp, hậu vị trái cây nhẹ.",
    "ingredients": [
      "15g Bột Cacao nguyên chất",
      "30ml Nước sôi 90°C",
      "20ml Sữa đặc",
      "160ml Sữa tươi thanh trùng"
    ],
    "steps": [
      "Đánh tan bột cacao với nước nóng và sữa đặc thành hỗn hợp sệt mịn.",
      "Đánh nóng sữa tươi ở 60°C và rót hòa quyện vào tách cacao."
    ]
  },
  {
    "id": "virgin-mojito-berry",
    "name": "Virgin Berry Mojito",
    "category": "Signature Mocktail",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "55.000đ",
    "color": [
      185,
      45,
      75
    ],
    "desc": "Mocktail sảng khoái từ dâu tây tươi dầm nhẹ, lá bạc hà vườn và soda mát lạnh.",
    "ingredients": [
      "40g Dâu tây tươi cắt lát",
      "8-10 Lá bạc hà tươi",
      "15ml Nước cốt chanh xanh",
      "20ml Simple Syrup",
      "120ml Soda lạnh"
    ],
    "steps": [
      "Dầm nhẹ dâu tây, lá bạc hà, nước cốt chanh và syrup dưới đáy ly.",
      "Thêm đầy đá bào/đá viên nhỏ, rót đầy soda và khuấy nhẹ từ dưới lên."
    ]
  },
  {
    "id": "pineapple-basil-smash",
    "name": "Pineapple Basil Smash",
    "category": "Signature Mocktail",
    "temp": "Cold",
    "prep": "5 phút",
    "price": "55.000đ",
    "color": [
      215,
      175,
      50
    ],
    "desc": "Sự kết hợp tinh tế giữa nước ép dứa chín ngọt, lá húng quế Tây và chanh vàng.",
    "ingredients": [
      "80ml Nước ép dứa tươi",
      "6 Lá húng quế (Sweet Basil)",
      "15ml Nước cốt chanh vàng",
      "15ml Syrup đường mía"
    ],
    "steps": [
      "Vỗ nhẹ lá húng quế cho dậy tinh dầu, cho vào Shaker cùng dứa, chanh, syrup và đá.",
      "Lắc mạnh 12 giây và lọc đôi (Double Strain) ra ly Rocks có viên đá lớn."
    ]
  },
  {
    "id": "sunset-grenadine",
    "name": "Tropical Sunset Mocktail",
    "category": "Signature Mocktail",
    "temp": "Cold",
    "prep": "4 phút",
    "price": "55.000đ",
    "color": [
      225,
      95,
      55
    ],
    "desc": "Hiệu ứng chuyển sắc hoàng hôn rực rỡ từ nước cam tươi và syrup lựu đỏ.",
    "ingredients": [
      "120ml Nước ép cam tươi",
      "30ml Nước ép dứa",
      "15ml Syrup lựu đỏ (Grenadine)",
      "10ml Nước cốt chanh"
    ],
    "steps": [
      "Lắc đều nước cam, nước dứa và chanh với đá, rót ra ly Hurricane.",
      "Rót từ từ syrup lựu đỏ sát thành ly để lắng xuống đáy tạo hiệu ứng hoàng hôn."
    ]
  },
  {
    "id": "mango-coconut-smoothie",
    "name": "Sinh Tố Xoài Cốt Dừa",
    "category": "Đá Xay & Smoothie",
    "temp": "Blended",
    "prep": "5 phút",
    "price": "55.000đ",
    "color": [
      230,
      180,
      55
    ],
    "desc": "Xoài cát Hòa Lộc chín vàng xay mịn cùng nước cốt dừa béo thơm chuẩn vị nhiệt đới.",
    "ingredients": [
      "100g Thịt xoài chín",
      "40ml Nước cốt dừa",
      "20ml Sữa đặc",
      "10g Bột Frappe chống tách lớp",
      "180g Đá viên nhỏ"
    ],
    "steps": [
      "Cho toàn bộ nguyên liệu vào cối xay công suất cao.",
      "Xay ở tốc độ cao trong 30 giây đến khi hỗn hợp sánh mịn đồng nhất."
    ]
  },
  {
    "id": "cookies-cream-frappe",
    "name": "Cookies & Cream Frappe",
    "category": "Đá Xay & Smoothie",
    "temp": "Blended",
    "prep": "5 phút",
    "price": "59.000đ",
    "color": [
      95,
      85,
      80
    ],
    "desc": "Bánh quy socola giòn tan hòa quyện sữa tươi đá xay phủ kem tươi Whipping béo ngậy.",
    "ingredients": [
      "3 Bánh quy Oreo",
      "60ml Sữa tươi không đường",
      "25ml Sữa đặc",
      "15g Bột Frappe",
      "180g Đá viên",
      "Kem Whipping trang trí"
    ],
    "steps": [
      "Xay nhuyễn 2.5 chiếc bánh Oreo cùng sữa, bột Frappe và đá viên.",
      "Rót ra ly, xịt kem Whipping lên trên và cắm nửa chiếc bánh Oreo còn lại."
    ]
  },
  {
    "id": "avocado-coffee-shake",
    "name": "Bơ Sáp Đắk Lắk Cà Phê",
    "category": "Đá Xay & Smoothie",
    "temp": "Blended",
    "prep": "6 phút",
    "price": "59.000đ",
    "color": [
      125,
      165,
      85
    ],
    "desc": "Bơ sáp dẻo mịn đánh bông kết hợp shot Espresso đậm đà tạo nên trải nghiệm vị giác độc đáo.",
    "ingredients": [
      "100g Bơ sáp chín",
      "30ml Sữa đặc",
      "40ml Sữa tươi",
      "150g Đá viên",
      "25ml Cốt cà phê Espresso"
    ],
    "steps": [
      "Xay mịn bơ sáp, sữa đặc, sữa tươi và đá viên thành hỗn hợp sinh tố sánh đặc.",
      "Rót ra ly và rưới shot Espresso nóng/nguội lên trên cùng."
    ]
  }
];

const CURRICULUM_MODULES = [
  {
    id: "mod-1",
    title: "Chương 1: Khoa học Nước, Đá & Cảm quan",
    summary: "Tiêu chuẩn nước SCA (TDS 75-150ppm, pH 6.5-7.5), quản trị độ tan đá và 5 vị cơ bản.",
    highlights: [
      "Nước chiếm 98-99% tách cà phê/trà; Clo tự do phải bằng 0 ppm.",
      "Muối nồng độ 0.1-0.3% giúp ức chế thụ thể vị đắng và làm bật vị ngọt.",
      "Đá già (-10°C đến -18°C) dùng cho Cold Brew, Espresso đá và Cocktail khuấy."
    ]
  },
  {
    id: "mod-2",
    title: "Chương 2: Chiết xuất Espresso & Thủ công",
    summary: "Brew Ratio chuẩn (Ristretto 1:1.5, Normale 1:2, Lungo 1:3), chẩn đoán lỗi Dial-in và V60/Cold Brew.",
    highlights: [
      "Espresso chuẩn: 18g bột -> 36g nước cốt trong 27-30 giây ở 9 bar, nhiệt độ 92-94°C.",
      "Chảy nhanh (<20s) = Under-extracted (chua gắt) -> Cần xay mịn hơn.",
      "Cold Brew tỷ lệ 1:8 đến 1:12, xay thô, ủ lạnh 14-18 giờ."
    ]
  },
  {
    id: "mod-3",
    title: "Chương 3: Kỹ thuật Ủ Trà & Sốc Nhiệt",
    summary: "Kiểm soát nhiệt độ ủ theo từng dòng trà (Lục trà 78°C, Ô Long 90°C, Hồng trà 98°C) và quy trình nấu trân châu 25-25.",
    highlights: [
      "Sốc nhiệt (Ice Shock) hạ nhiệt độ cốt trà xuống <15°C ngay sau khi lọc để khóa hương và chống đục.",
      "Trân châu đen chuẩn: Nấu sôi 25 phút + Ủ kín nắp 25 phút + Trộn đường nâu tỷ lệ 1kg : 150g."
    ]
  },
  {
    id: "mod-4",
    title: "Chương 4: Mixology & Quản trị Cost (COGS)",
    summary: "Công thức vàng Base : Sour : Sweet (2 : 1 : 1), 6 kỹ thuật pha chế và kiểm soát Food Cost 22-28%.",
    highlights: [
      "6 kỹ thuật cốt lõi: Build, Shake, Stir, Muddle, Blend, Layering.",
      "Food Cost mục tiêu ngành F&B: 22% - 28% trên giá bán chưa VAT."
    ]
  }
];
