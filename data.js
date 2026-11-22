// Lam's Barista — Thư viện 25 Công thức Cocktail Kinh điển & Signature
const COCKTAIL_DATA = [
  {
    "id": "ferlatum-passion",
    "name": "Ferlatum Passion",
    "category": "Signature Cocktails",
    "base": "Ferlatum & Soda",
    "glass": "Rocks (1 viên đá lớn)",
    "method": "Shake & Top Soda",
    "abv": "0% (Non-Alcoholic / Mocktail)",
    "color": [
      212,
      118,
      42
    ],
    "accent": [
      250,
      200,
      95
    ],
    "desc": "Thức uống độc quyền từ Lam's Barista: kết hợp Ferlatum, chanh dây tươi (ưu tiên chanh dây vàng thơm ngọt), chanh tươi và soda sủi bọt mát lạnh.",
    "ingredients": [
      "1 lọ Ferlatum",
      "1 quả chanh dây tươi (ưu tiên chanh dây vàng vì độ thơm và ngọt)",
      "1/2 quả chanh tươi",
      "5 ml siro đường hoặc 1 muỗng cà phê đường (cho ai thích ngọt)",
      "1 lon soda (dùng khoảng 60 ml soda đã làm lạnh khi rót)",
      "Đá viên, bình lắc (Shaker) và ly"
    ],
    "steps": [
      "Cho chanh dây, nước chanh, đá viên và siro đường vào bình lắc trong 30 giây để hỗn hợp hòa quyện vào nhau.",
      "Cho Ferlatum vào bình lắc, lắc thêm 10 giây nữa.",
      "Rót hỗn hợp ra ly đã có sẵn 1 viên đá lớn.",
      "Rót nhẹ soda (đã làm lạnh) vào ly (khoảng 60 ml).",
      "Trang trí tùy theo sở thích, khuấy nhẹ và thưởng thức."
    ]
  },
  {
    "id": "negroni",
    "name": "Classic Negroni",
    "category": "Classic & Aperitif",
    "base": "Gin",
    "glass": "Old Fashioned (Rocks)",
    "method": "Stir & Strain",
    "abv": "24%",
    "color": [
      175,
      32,
      36
    ],
    "accent": [
      235,
      125,
      45
    ],
    "desc": "Biểu tượng khai vị kinh điển nước Ý với tỷ lệ vàng 1:1:1 giữa vị thảo mộc của Gin, đắng thanh của Campari và ngọt sâu của Sweet Vermouth.",
    "ingredients": [
      "30 ml London Dry Gin",
      "30 ml Campari",
      "30 ml Sweet Red Vermouth (Carpano Antica / Cinzano)",
      "1 miếng Vỏ cam vàng tươi"
    ],
    "steps": [
      "Cho Gin, Campari và Sweet Vermouth vào ly khuấy (Mixing Glass) đầy đá già.",
      "Khuấy đều theo một chiều trong 25-30 giây để đạt độ lạnh và độ loãng chuẩn.",
      "Rót ra ly Rocks có sẵn viên đá khối lớn (Clear Ice Cube).",
      "Xịt tinh dầu vỏ cam vàng lên bề mặt và cài vỏ cam vào thành ly."
    ]
  },
  {
    "id": "old-fashioned",
    "name": "Bourbon Old Fashioned",
    "category": "Spirit-Forward",
    "base": "Bourbon Whiskey",
    "glass": "Old Fashioned (Rocks)",
    "method": "Build & Stir",
    "abv": "32%",
    "color": [
      165,
      88,
      32
    ],
    "accent": [
      235,
      175,
      85
    ],
    "desc": "Chuẩn mực của dòng Spirit-Forward: tôn vinh trọn vẹn hương gỗ sồi, vani và gia vị ấm nồng của Bourbon hòa quyện cùng Angostura Bitters.",
    "ingredients": [
      "60 ml Bourbon Whiskey (hoặc Rye Whiskey)",
      "10 ml Syrup đường Demerara (2:1)",
      "3 giọt Angostura Aromatic Bitters",
      "1 giọt Orange Bitters",
      "Vỏ cam vàng & Quả anh đào ngâm (Maraschino Cherry)"
    ],
    "steps": [
      "Cho syrup Demerara và các loại Bitters vào ly Rocks đã làm lạnh.",
      "Thêm viên đá khối lớn và rót 60ml Bourbon Whiskey vào.",
      "Khuấy nhẹ nhàng khoảng 20-25 vòng để hòa quyện hương vị.",
      "Xịt tinh dầu vỏ cam lên ly và trang trí vỏ cam xoắn."
    ]
  },
  {
    "id": "manhattan",
    "name": "Classic Manhattan",
    "category": "Spirit-Forward",
    "base": "Rye Whiskey",
    "glass": "Nick & Nora / Coupe",
    "method": "Stir & Strain",
    "abv": "30%",
    "color": [
      145,
      38,
      34
    ],
    "accent": [
      220,
      140,
      80
    ],
    "desc": "Vẻ đẹp sang trọng của New York cổ điển với cấu trúc sắc sảo từ Rye Whiskey, vị ngọt mượt của Vermouth đỏ và chiều sâu từ Bitters.",
    "ingredients": [
      "60 ml Rye Whiskey",
      "30 ml Sweet Red Vermouth",
      "2 giọt Angostura Bitters",
      "1 quả Anh đào Luxardo Maraschino"
    ],
    "steps": [
      "Làm lạnh ly Coupe hoặc Nick & Nora trong tủ đông.",
      "Khuấy đều Rye Whiskey, Sweet Vermouth và Bitters với đá già trong Mixing Glass 25 giây.",
      "Lọc qua rây Julep Strainer ra ly đã làm lạnh.",
      "Thả quả anh đào Luxardo vào đáy ly để hoàn thiện."
    ]
  },
  {
    "id": "dry-martini",
    "name": "Classic Dry Martini",
    "category": "Classic & Aperitif",
    "base": "Gin",
    "glass": "Martini / Coupe",
    "method": "Stir & Strain",
    "abv": "28%",
    "color": [
      110,
      135,
      140
    ],
    "accent": [
      215,
      225,
      210
    ],
    "desc": "Tinh khiết, sắc bén và thanh lịch tuyệt đối — thước đo kỹ thuật khuấy (Stirring) chuẩn xác của mọi Bartender chuyên nghiệp.",
    "ingredients": [
      "60 ml London Dry Gin",
      "10 ml Dry Vermouth (Noilly Prat)",
      "1 giọt Orange Bitters (tùy chọn)",
      "Vỏ chanh vàng xoắn (hoặc 1-3 quả Olive xanh)"
    ],
    "steps": [
      "Làm lạnh sâu ly Martini trước khi phục vụ.",
      "Khuấy Gin và Dry Vermouth trong Mixing Glass với nhiều đá già trong 30 giây.",
      "Lọc mịn ra ly Martini lạnh buốt.",
      "Xịt tinh dầu vỏ chanh vàng lên bề mặt ly."
    ]
  },
  {
    "id": "whiskey-sour",
    "name": "Boston Whiskey Sour",
    "category": "Sours & Fizz",
    "base": "Bourbon Whiskey",
    "glass": "Old Fashioned (Rocks)",
    "method": "Dry Shake & Wet Shake",
    "abv": "16%",
    "color": [
      195,
      130,
      48
    ],
    "accent": [
      245,
      220,
      175
    ],
    "desc": "Sự cân bằng kinh điển giữa vị mạnh mẽ của Bourbon, chua thanh chanh tươi, ngọt dịu và lớp bọt kem mượt mà như nhung.",
    "ingredients": [
      "60 ml Bourbon Whiskey",
      "25 ml Nước cốt chanh vàng tươi",
      "20 ml Simple Syrup (1:1)",
      "15 ml Lòng trắng trứng tươi",
      "2 giọt Angostura Bitters trang trí bọt"
    ],
    "steps": [
      "Cho tất cả nguyên liệu (trừ Bitters) vào Shaker, thực hiện Dry Shake không đá 12 giây.",
      "Thêm đá viên đầy bình và lắc mạnh (Wet Shake) trong 12 giây.",
      "Lọc đôi ra ly Rocks có đá khối lớn.",
      "Nhỏ 2 giọt Angostura Bitters lên lớp bọt trắng và kéo vân nghệ thuật."
    ]
  },
  {
    "id": "margarita",
    "name": "Classic Lime Margarita",
    "category": "Sours & Fizz",
    "base": "Tequila",
    "glass": "Coupe / Margarita",
    "method": "Shake & Strain",
    "abv": "19%",
    "color": [
      135,
      175,
      75
    ],
    "accent": [
      235,
      240,
      210
    ],
    "desc": "Tươi sáng và bùng nổ với Tequila 100% Agave, rượu mùi cam Cointreau, nước cốt chanh xanh và viền muối biển tinh tế.",
    "ingredients": [
      "50 ml Tequila Blanco (100% Agave)",
      "25 ml Cointreau (Triple Sec)",
      "25 ml Nước cốt chanh xanh tươi",
      "5 ml Syrup cây thùa (Agave Nectar)",
      "Muối biển mịn viền nửa miệng ly"
    ],
    "steps": [
      "Xát lát chanh lên nửa ngoài miệng ly Coupe và lăn nhẹ qua đĩa muối biển mịn.",
      "Lắc mạnh Tequila, Cointreau, nước cốt chanh và Agave với đá già trong 12 giây.",
      "Lọc đôi ra ly đã viền muối và trang trí lát chanh mỏng."
    ]
  },
  {
    "id": "daiquiri",
    "name": "Hemingway Classic Daiquiri",
    "category": "Sours & Fizz",
    "base": "White Rum",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "18%",
    "color": [
      165,
      185,
      145
    ],
    "accent": [
      235,
      242,
      225
    ],
    "desc": "Công thức tối giản ba thành phần từ Cuba: Rum trắng tinh khiết, nước cốt chanh xanh tươi và đường mía cân bằng hoàn hảo.",
    "ingredients": [
      "60 ml White Rum (Havana Club 3 / Plantation 3 Stars)",
      "25 ml Nước cốt chanh xanh tươi",
      "15 ml Simple Syrup (1:1)",
      "1 lát chanh xanh mỏng"
    ],
    "steps": [
      "Làm lạnh ly Coupe thật sâu.",
      "Cho Rum, nước cốt chanh và syrup vào Shaker đầy đá già, lắc dứt khoát 12 giây.",
      "Lọc đôi qua rây mịn để loại bỏ vụn đá và tép chanh, trang trí lát chanh."
    ]
  },
  {
    "id": "mojito",
    "name": "Cuban Mint Mojito",
    "category": "Highballs & Refreshers",
    "base": "White Rum",
    "glass": "Highball / Collins",
    "method": "Muddle & Build",
    "abv": "12%",
    "color": [
      85,
      165,
      110
    ],
    "accent": [
      215,
      240,
      210
    ],
    "desc": "Thức uống giải nhiệt trứ danh vùng Caribe với lá bạc hà tươi đánh thức tinh dầu, chanh xanh, đường mía, Rum trắng và soda mát lạnh.",
    "ingredients": [
      "50 ml White Rum",
      "25 ml Nước cốt chanh xanh tươi",
      "20 ml Syrup đường mía",
      "10-12 Lá bạc hà tươi (Spearmint)",
      "60 ml Nước Soda ướp lạnh"
    ],
    "steps": [
      "Vỗ nhẹ lá bạc hà và cho vào ly Highball cùng syrup đường và nước cốt chanh.",
      "Dầm nhẹ nhàng bằng chày Muddler (tránh làm nát gân lá gây đắng).",
      "Rót Rum, thêm đầy đá viên/đá bào, khuấy đều từ dưới lên và châm đầy Soda."
    ]
  },
  {
    "id": "espresso-martini",
    "name": "Velvet Espresso Martini",
    "category": "Signature Cocktails",
    "base": "Vodka & Espresso",
    "glass": "Coupe / Martini",
    "method": "Hard Shake & Double Strain",
    "abv": "17%",
    "color": [
      82,
      52,
      38
    ],
    "accent": [
      210,
      175,
      130
    ],
    "desc": "Sự giao thoa hoàn hảo giữa thế giới Barista và Bartender: Espresso chiết xuất tươi, Vodka tinh khiết, Kahlúa và lớp bọt crema dày mịn.",
    "ingredients": [
      "45 ml Vodka tinh khiết",
      "30 ml Cà phê Espresso vừa chiết xuất (để nguội nhanh)",
      "20 ml Rượu mùi cà phê Kahlúa",
      "10 ml Simple Syrup",
      "3 hạt cà phê rang nguyên hạt trang trí"
    ],
    "steps": [
      "Chiết xuất 1 shot Espresso đậm đặc và làm nguội nhanh.",
      "Cho tất cả nguyên liệu vào Shaker cùng đá già, lắc thật mạnh (Hard Shake) 15 giây để tạo lớp bọt dày.",
      "Lọc đôi ra ly Coupe lạnh và đặt 3 hạt cà phê lên tâm lớp bọt."
    ]
  },
  {
    "id": "pornstar-martini",
    "name": "Passion Fruit Martini",
    "category": "Signature Cocktails",
    "base": "Vanilla Vodka",
    "glass": "Coupe + Shot Glass",
    "method": "Shake & Double Strain",
    "abv": "15%",
    "color": [
      215,
      145,
      42
    ],
    "accent": [
      250,
      225,
      150
    ],
    "desc": "Quyến rũ và rực rỡ với Vodka hương vani, rượu mùi chanh dây Passoã, chanh dây tươi, phục vụ kèm một shot Prosecco sủi bọt.",
    "ingredients": [
      "45 ml Vanilla Vodka",
      "15 ml Passoã (Rượu mùi chanh dây)",
      "30 ml Nước cốt chanh dây tươi",
      "15 ml Nước cốt chanh xanh",
      "15 ml Syrup đường vani",
      "45 ml Prosecco ướp lạnh phục vụ kèm trong ly shot"
    ],
    "steps": [
      "Lắc mạnh Vodka, Passoã, chanh dây, chanh xanh và syrup với đá già trong 12 giây.",
      "Lọc đôi ra ly Coupe lạnh, thả nửa quả chanh dây tươi lên mặt bọt.",
      "Phục vụ kèm ly shot Prosecco lạnh bên cạnh."
    ]
  },
  {
    "id": "cosmopolitan",
    "name": "Ruby Cosmopolitan",
    "category": "Signature Cocktails",
    "base": "Citrus Vodka",
    "glass": "Coupe / Martini",
    "method": "Shake & Double Strain",
    "abv": "18%",
    "color": [
      195,
      65,
      95
    ],
    "accent": [
      245,
      190,
      200
    ],
    "desc": "Sắc hồng ngọc thanh lịch với Vodka chanh, Cointreau, nước ép nam việt quất và hương vỏ cam đốt tinh tế.",
    "ingredients": [
      "45 ml Vodka Citron",
      "15 ml Cointreau",
      "30 ml Nước ép nam việt quất (Cranberry Juice)",
      "15 ml Nước cốt chanh xanh tươi",
      "1 miếng Vỏ cam vàng"
    ],
    "steps": [
      "Lắc đều tất cả nguyên liệu lỏng với đá già trong 12 giây.",
      "Lọc đôi ra ly Coupe lạnh và xịt tinh dầu vỏ cam lên bề mặt."
    ]
  },
  {
    "id": "aperol-spritz",
    "name": "Venetian Aperol Spritz",
    "category": "Classic & Aperitif",
    "base": "Aperol & Prosecco",
    "glass": "Large Wine Glass",
    "method": "Build",
    "abv": "9%",
    "color": [
      225,
      92,
      38
    ],
    "accent": [
      250,
      185,
      110
    ],
    "desc": "Thức uống khai vị chiều tà chuẩn phong cách Venice theo tỷ lệ 3-2-1: Prosecco sủi tăm, Aperol cam thảo mộc và nước có gas.",
    "ingredients": [
      "90 ml Rượu vang sủi Prosecco DOC ướp lạnh",
      "60 ml Aperol",
      "30 ml Nước Soda lạnh",
      "1 lát cam vàng tươi"
    ],
    "steps": [
      "Cho nhiều đá viên lớn vào ly vang lớn.",
      "Rót lần lượt Prosecco, tiếp đến là Aperol và cuối cùng là Soda.",
      "Khuấy nhẹ 1 vòng duy nhất để giữ bọt gas và trang trí lát cam tươi."
    ]
  },
  {
    "id": "gin-fizz",
    "name": "Classic London Gin Fizz",
    "category": "Sours & Fizz",
    "base": "Gin",
    "glass": "Highball",
    "method": "Dry Shake, Wet Shake & Top",
    "abv": "13%",
    "color": [
      145,
      165,
      155
    ],
    "accent": [
      245,
      245,
      240
    ],
    "desc": "Sảng khoái, thanh nhẹ và bồng bềnh với hương quả bách xù của Gin, chanh vàng tươi và lớp bọt soda mịn màng.",
    "ingredients": [
      "50 ml London Dry Gin",
      "25 ml Nước cốt chanh vàng tươi",
      "20 ml Simple Syrup",
      "15 ml Lòng trắng trứng",
      "60 ml Nước Soda ướp lạnh"
    ],
    "steps": [
      "Dry shake Gin, chanh vàng, syrup và lòng trắng trứng trong 10 giây.",
      "Thêm đá viên, lắc mạnh 12 giây rồi lọc ra ly Highball không đá (hoặc ít đá).",
      "Châm từ từ Soda lạnh vào tâm ly để đẩy lớp bọt trắng cao lên miệng ly."
    ]
  },
  {
    "id": "tom-collins",
    "name": "Original Tom Collins",
    "category": "Highballs & Refreshers",
    "base": "Old Tom / Dry Gin",
    "glass": "Collins",
    "method": "Shake & Top",
    "abv": "11%",
    "color": [
      130,
      160,
      140
    ],
    "accent": [
      235,
      240,
      210
    ],
    "desc": "Dòng Highball cổ điển tươi mát, dễ thưởng thức với sự hòa quyện tinh tế của Gin, nước cốt chanh vàng và soda.",
    "ingredients": [
      "50 ml London Dry Gin",
      "25 ml Nước cốt chanh vàng tươi",
      "15 ml Simple Syrup",
      "80 ml Nước Soda lạnh",
      "Lát chanh vàng & Quả anh đào trang trí"
    ],
    "steps": [
      "Lắc nhanh Gin, nước cốt chanh vàng và syrup với đá viên.",
      "Rót ra ly Collins đầy đá già, châm đầy Soda và khuấy nhẹ."
    ]
  },
  {
    "id": "paloma",
    "name": "Oaxaca Grapefruit Paloma",
    "category": "Highballs & Refreshers",
    "base": "Tequila",
    "glass": "Highball",
    "method": "Build / Shake & Top",
    "abv": "12%",
    "color": [
      215,
      115,
      115
    ],
    "accent": [
      245,
      210,
      200
    ],
    "desc": "Hương bưởi hồng thanh mát kết hợp Tequila Agave, chanh xanh và viền muối hồng tạo nên thức uống giải khát chuẩn Mexico.",
    "ingredients": [
      "50 ml Tequila Blanco",
      "60 ml Nước ép bưởi hồng tươi",
      "15 ml Nước cốt chanh xanh",
      "15 ml Syrup đường mía",
      "45 ml Nước Soda lạnh"
    ],
    "steps": [
      "Viền muối hồng lên nửa miệng ly Highball và cho đầy đá viên.",
      "Lắc nhanh Tequila, nước ép bưởi hồng, chanh và syrup, rót vào ly.",
      "Châm thêm Soda lạnh và trang trí lát bưởi hồng tươi."
    ]
  },
  {
    "id": "moscow-mule",
    "name": "Copper Moscow Mule",
    "category": "Highballs & Refreshers",
    "base": "Vodka",
    "glass": "Copper Mug",
    "method": "Build",
    "abv": "11%",
    "color": [
      185,
      130,
      75
    ],
    "accent": [
      235,
      215,
      175
    ],
    "desc": "Vị cay ấm sảng khoái của bia gừng thủ công (Ginger Beer), chanh xanh tươi và Vodka trong chiếc cốc đồng lạnh buốt.",
    "ingredients": [
      "50 ml Vodka tinh khiết",
      "15 ml Nước cốt chanh xanh tươi",
      "120 ml Bia gừng (Ginger Beer) ướp lạnh",
      "1 lát chanh xanh & 1 nhánh bạc hà"
    ],
    "steps": [
      "Cho đầy đá viên vào cốc đồng (Copper Mug).",
      "Rót Vodka và nước cốt chanh xanh vào cốc, sau đó châm đầy Ginger Beer.",
      "Khuấy nhẹ và trang trí nhánh bạc hà tươi."
    ]
  },
  {
    "id": "dark-n-stormy",
    "name": "Bermuda Dark 'n' Stormy",
    "category": "Highballs & Refreshers",
    "base": "Dark Rum",
    "glass": "Highball",
    "method": "Build & Float",
    "abv": "12%",
    "color": [
      115,
      65,
      38
    ],
    "accent": [
      220,
      175,
      115
    ],
    "desc": "Hiệu ứng mây bão ấn tượng với tầng Dark Rum mật mía đậm đà nổi bồng bềnh trên nền bia gừng cay nồng và chanh tươi.",
    "ingredients": [
      "60 ml Dark Rum (Goslings Black Seal)",
      "100 ml Bia gừng (Ginger Beer) lạnh",
      "15 ml Nước cốt chanh xanh tươi",
      "1 miếng chanh xanh"
    ],
    "steps": [
      "Cho đá đầy ly Highball, rót bia gừng và nước cốt chanh xanh vào trước.",
      "Rót từ từ Dark Rum qua lưng thìa Barspoon để tạo tầng mây đen trên bề mặt."
    ]
  },
  {
    "id": "pina-colada",
    "name": "Tropical Piña Colada",
    "category": "Tiki & Tropical",
    "base": "White & Aged Rum",
    "glass": "Hurricane",
    "method": "Shake / Blend",
    "abv": "13%",
    "color": [
      225,
      195,
      115
    ],
    "accent": [
      250,
      240,
      200
    ],
    "desc": "Hương vị kỳ nghỉ nhiệt đới trứ danh từ Puerto Rico với Rum trắng, nước ép dứa chín mọng và kem dừa béo mịn.",
    "ingredients": [
      "50 ml White Rum",
      "90 ml Nước ép dứa tươi",
      "35 ml Kem dừa (Cream of Coconut)",
      "10 ml Nước cốt chanh xanh tươi",
      "1 miếng dứa tươi & Lá dứa"
    ],
    "steps": [
      "Lắc mạnh tất cả nguyên liệu với đá viên (hoặc xay mịn với 120g đá bào).",
      "Rót ra ly Hurricane và trang trí miếng dứa tươi cùng lá dứa."
    ]
  },
  {
    "id": "mai-tai",
    "name": "Royal Hawaiian Mai Tai",
    "category": "Tiki & Tropical",
    "base": "Aged & Dark Rum",
    "glass": "Double Old Fashioned",
    "method": "Shake & Float",
    "abv": "21%",
    "color": [
      195,
      105,
      42
    ],
    "accent": [
      240,
      195,
      120
    ],
    "desc": "Vua của dòng Tiki Cocktail: chiều sâu phức hợp từ hai dòng Rum ủ lâu năm, rượu cam Curaçao, syrup hạnh nhân Orgeat và chanh tươi.",
    "ingredients": [
      "45 ml Aged Jamaican Rum",
      "15 ml Dark Martinique Rum (Float)",
      "15 ml Orange Curaçao",
      "15 ml Syrup hạnh nhân (Orgeat)",
      "25 ml Nước cốt chanh xanh tươi"
    ],
    "steps": [
      "Lắc mạnh Aged Rum, Orange Curaçao, Orgeat và nước cốt chanh với đá bào.",
      "Rót toàn bộ ra ly Rocks, rót nổi 15ml Dark Rum lên trên và trang trí ngọn bạc hà."
    ]
  },
  {
    "id": "boulevardier",
    "name": "Parisian Boulevardier",
    "category": "Spirit-Forward",
    "base": "Bourbon Whiskey",
    "glass": "Old Fashioned (Rocks)",
    "method": "Stir & Strain",
    "abv": "26%",
    "color": [
      160,
      42,
      32
    ],
    "accent": [
      235,
      145,
      75
    ],
    "desc": "Người anh em ấm áp của Negroni khi thay Gin bằng Bourbon Whiskey — đậm đà, tròn vị và quyến rũ trong những buổi tối se lạnh.",
    "ingredients": [
      "45 ml Bourbon Whiskey",
      "30 ml Campari",
      "30 ml Sweet Red Vermouth",
      "1 miếng Vỏ cam vàng"
    ],
    "steps": [
      "Khuấy đều Bourbon, Campari và Sweet Vermouth với đá già trong Mixing Glass 25 giây.",
      "Lọc ra ly Rocks có đá khối lớn và xịt tinh dầu vỏ cam vàng."
    ]
  },
  {
    "id": "clover-club",
    "name": "Classic Clover Club",
    "category": "Sours & Fizz",
    "base": "Gin",
    "glass": "Coupe",
    "method": "Dry Shake & Wet Shake",
    "abv": "16%",
    "color": [
      195,
      58,
      88
    ],
    "accent": [
      248,
      215,
      225
    ],
    "desc": "Công thức tiền cấm rượu (Pre-Prohibition) thanh lịch với Gin, mâm xôi đỏ tươi, Dry Vermouth, chanh vàng và lớp bọt hồng mượt mà.",
    "ingredients": [
      "45 ml London Dry Gin",
      "15 ml Dry Vermouth",
      "20 ml Syrup mâm xôi đỏ (Raspberry Syrup)",
      "20 ml Nước cốt chanh vàng tươi",
      "15 ml Lòng trắng trứng"
    ],
    "steps": [
      "Dry shake không đá tất cả nguyên liệu trong 12 giây để tạo bọt mịn.",
      "Thêm đá viên, lắc mạnh 12 giây và lọc đôi ra ly Coupe lạnh."
    ]
  },
  {
    "id": "amaretto-sour",
    "name": "Morgenthaler Amaretto Sour",
    "category": "Sours & Fizz",
    "base": "Amaretto & Bourbon",
    "glass": "Old Fashioned (Rocks)",
    "method": "Dry Shake & Wet Shake",
    "abv": "15%",
    "color": [
      185,
      115,
      48
    ],
    "accent": [
      245,
      215,
      165
    ],
    "desc": "Phiên bản nâng cấp cân bằng hoàn hảo: vị hạnh nhân ngọt ngào của Amaretto được gia cố cấu trúc bởi Cask-Strength Bourbon và chanh tươi.",
    "ingredients": [
      "45 ml Amaretto (Disaronno)",
      "22.5 ml Bourbon Whiskey nồng độ cao",
      "30 ml Nước cốt chanh vàng tươi",
      "5 ml Rich Simple Syrup (2:1)",
      "15 ml Lòng trắng trứng"
    ],
    "steps": [
      "Thực hiện Dry Shake 12 giây cho tất cả nguyên liệu.",
      "Lắc mạnh với đá viên trong 12 giây và lọc đôi ra ly Rocks có đá khối lớn."
    ]
  },
  {
    "id": "penicillin",
    "name": "Smoky Penicillin",
    "category": "Signature Cocktails",
    "base": "Blended & Islay Scotch",
    "glass": "Old Fashioned (Rocks)",
    "method": "Shake & Float",
    "abv": "20%",
    "color": [
      190,
      145,
      55
    ],
    "accent": [
      240,
      210,
      135
    ],
    "desc": "Hiện đại và đầy chiều sâu với Blended Scotch, syrup gừng mật ong ấm nồng, chanh vàng và lớp hương khói than bùn Islay Scotch.",
    "ingredients": [
      "60 ml Blended Scotch Whisky",
      "22.5 ml Nước cốt chanh vàng tươi",
      "22.5 ml Syrup gừng mật ong (Honey-Ginger Syrup)",
      "7.5 ml Islay Single Malt Scotch (Laphroaig 10 - Float)",
      "1 lát gừng kẹo"
    ],
    "steps": [
      "Lắc mạnh Blended Scotch, chanh vàng và syrup gừng mật ong với đá già.",
      "Lọc đôi ra ly Rocks có đá khối lớn, rót nổi 7.5ml Islay Scotch lên bề mặt."
    ]
  },
  {
    "id": "paper-plane",
    "name": "Modern Paper Plane",
    "category": "Classic & Aperitif",
    "base": "Bourbon & Amaro",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "21%",
    "color": [
      210,
      88,
      45
    ],
    "accent": [
      248,
      185,
      125
    ],
    "desc": "Kiệt tác đương đại tỷ lệ bằng nhau (Equal-Parts): Bourbon, Aperol, Amaro Nonino và nước cốt chanh vàng tạo nên vị chua-đắng-ngọt hài hòa.",
    "ingredients": [
      "22.5 ml Bourbon Whiskey",
      "22.5 ml Aperol",
      "22.5 ml Amaro Nonino Quintessentia",
      "22.5 ml Nước cốt chanh vàng tươi"
    ],
    "steps": [
      "Cho cả 4 nguyên liệu vào Shaker đầy đá già và lắc mạnh trong 12 giây.",
      "Lọc đôi qua rây mịn ra ly Coupe đã làm lạnh sâu."
    ]
  }
];

const MIXOLOGY_STANDARDS = [
  {
    "id": "std-1",
    "title": "1. Tỷ lệ Cân bằng Vàng (Golden Ratios)",
    "summary": "Nền tảng cấu trúc hương vị trong pha chế Cocktail & Signature.",
    "points": [
      "Sours & Daisy: 2 phần Spirit : 1 phần Sour (Chanh tươi) : 0.75 - 1 phần Sweet (Syrup/Liqueur).",
      "Spirit-Forward (Old Fashioned / Manhattan): 2 phần Base Spirit : 1 phần Vermouth hoặc 0.25 phần Rich Syrup + Bitters.",
      "Highball, Spritz & Soda Top: Cân bằng độ chua ngọt của cốt trái cây trước khi châm thêm soda lạnh (khoảng 60 ml với Ferlatum Passion)."
    ]
  },
  {
    "id": "std-2",
    "title": "2. Kỹ thuật Lắc (Shaking) & Khuấy (Stirring)",
    "summary": "Kiểm soát nhiệt độ, độ hòa quyện và độ sủi bọt chuẩn xác.",
    "points": [
      "Stirring: Áp dụng cho cocktail thuần rượu (Negroni, Martini, Manhattan) để giữ độ trong suốt.",
      "Layered Shake (Ferlatum Passion): Lắc chanh dây, nước chanh, đá viên và siro đường 30 giây trước, sau đó thêm Ferlatum lắc thêm 10 giây.",
      "Rót nhẹ soda lạnh sau cùng để giữ độ sủi bọt sảng khoái."
    ]
  },
  {
    "id": "std-3",
    "title": "3. Quản trị Đá & Ly phục vụ (Glassware)",
    "summary": "Đá là thành phần quan trọng quyết định tốc độ tan và trải nghiệm thị giác.",
    "points": [
      "1 viên đá lớn (Large Ice Cube): Dùng cho ly phục vụ của Ferlatum Passion và dòng Rocks giúp giữ lạnh lâu mà hạn chế loãng.",
      "Chilled Coupe / Martini: Luôn làm lạnh ly trước tối thiểu 10 phút để giữ nhiệt độ phục vụ lý tưởng."
    ]
  }
];
