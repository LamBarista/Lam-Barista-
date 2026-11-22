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
    ],
    "spirit": "Mocktail",
    "tip": "Dùng ly Rocks với 1 viên đá lớn và kỹ thuật Shake & Top Soda vừa đủ thời gian để giữ độ cân bằng giữa vị chanh dây, chua, ngọt nhẹ và độ lạnh sảng khoái. Vì không có cồn nên ly sẽ dễ uống và phù hợp cả ngày."
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
    ],
    "spirit": "Gin",
    "tip": "Sử dụng Old Fashioned (Rocks) và kỹ thuật Stir & Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Old Fashioned (Rocks) và kỹ thuật Build & Stir đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Nick & Nora / Coupe và kỹ thuật Stir & Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Gin",
    "tip": "Sử dụng Martini / Coupe và kỹ thuật Stir & Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Old Fashioned (Rocks) và kỹ thuật Dry Shake & Wet Shake đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Tequila",
    "tip": "Sử dụng Coupe / Margarita và kỹ thuật Shake & Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Rum",
    "tip": "Sử dụng Coupe và kỹ thuật Shake & Double Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Rum",
    "tip": "Sử dụng Highball / Collins và kỹ thuật Muddle & Build đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Vodka",
    "tip": "Sử dụng Coupe / Martini và kỹ thuật Hard Shake & Double Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Vodka",
    "tip": "Sử dụng Coupe + Shot Glass và kỹ thuật Shake & Double Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Vodka",
    "tip": "Sử dụng Coupe / Martini và kỹ thuật Shake & Double Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Brandy",
    "tip": "Sử dụng Large Wine Glass và kỹ thuật Build đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Gin",
    "tip": "Sử dụng Highball và kỹ thuật Dry Shake, Wet Shake & Top đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Gin",
    "tip": "Sử dụng Collins và kỹ thuật Shake & Top đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Tequila",
    "tip": "Sử dụng Highball và kỹ thuật Build / Shake & Top đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Vodka",
    "tip": "Sử dụng Copper Mug và kỹ thuật Build đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Rum",
    "tip": "Sử dụng Highball và kỹ thuật Build & Float đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Rum",
    "tip": "Sử dụng Hurricane và kỹ thuật Shake / Blend đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Rum",
    "tip": "Sử dụng Double Old Fashioned và kỹ thuật Shake & Float đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Old Fashioned (Rocks) và kỹ thuật Stir & Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Gin",
    "tip": "Sử dụng Coupe và kỹ thuật Dry Shake & Wet Shake đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Old Fashioned (Rocks) và kỹ thuật Dry Shake & Wet Shake đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Old Fashioned (Rocks) và kỹ thuật Shake & Float đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
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
    ],
    "spirit": "Whiskey",
    "tip": "Sử dụng Coupe và kỹ thuật Shake & Double Strain đúng thời gian để giữ trọn độ cân bằng giữa rượu nền, chua, ngọt và nhiệt độ phục vụ."
  },
  {
    "id": "gimlet",
    "name": "Classic Gin Gimlet",
    "category": "Sours & Fizz",
    "base": "Gin",
    "spirit": "Gin",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "20%",
    "color": [
      125,
      175,
      115
    ],
    "accent": [
      220,
      245,
      195
    ],
    "desc": "Công thức hàng hải kinh điển với London Dry Gin, nước cốt chanh xanh tươi và Lime Cordial tạo vị chua thanh sắc nét.",
    "ingredients": [
      "60 ml London Dry Gin",
      "22.5 ml Nước cốt chanh xanh tươi",
      "15 ml Lime Cordial (hoặc Rich Simple Syrup 2:1)",
      "1 lát vỏ chanh xanh mỏng"
    ],
    "steps": [
      "Cho Gin, nước cốt chanh xanh và Lime Cordial vào Shaker đầy đá già.",
      "Lắc dứt khoát 12 giây đến khi bình lạnh buốt.",
      "Lọc đôi qua rây mịn ra ly Coupe đã làm lạnh sâu và trang trí lát chanh."
    ],
    "tip": "Dùng 50% nước cốt chanh tươi kết hợp 50% Lime Cordial giúp giữ trọn mùi thơm vỏ chanh đặc trưng của Gimlet nguyên bản."
  },
  {
    "id": "french-75",
    "name": "Parisian French 75",
    "category": "Classic & Aperitif",
    "base": "Gin & Champagne",
    "spirit": "Gin",
    "glass": "Champagne Flute",
    "method": "Shake & Top Champagne",
    "abv": "15%",
    "color": [
      210,
      185,
      110
    ],
    "accent": [
      252,
      242,
      195
    ],
    "desc": "Thanh lịch và sủi tăm rạng rỡ: Gin, chanh vàng tươi và đường hòa quyện rồi nâng tầm bằng Champagne Brut ướp lạnh.",
    "ingredients": [
      "30 ml London Dry Gin",
      "15 ml Nước cốt chanh vàng tươi",
      "15 ml Simple Syrup (1:1)",
      "90 ml Champagne Brut (hoặc Crémant / Prosecco) ướp lạnh",
      "1 dải vỏ chanh vàng xoắn dài"
    ],
    "steps": [
      "Lắc mạnh Gin, nước cốt chanh vàng và Simple Syrup với đá già trong 10 giây.",
      "Lọc đôi ra ly Champagne Flute đã làm lạnh.",
      "Châm từ từ Champagne Brut ướp lạnh và thả dải vỏ chanh vàng xoắn vào ly."
    ],
    "tip": "Rót Champagne nghiêng nhẹ thành ly để giữ trọn các chuỗi bọt khí mịn (perlage) lâu tan."
  },
  {
    "id": "bees-knees",
    "name": "Prohibition Bee's Knees",
    "category": "Sours & Fizz",
    "base": "Gin",
    "spirit": "Gin",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "19%",
    "color": [
      225,
      170,
      58
    ],
    "accent": [
      255,
      232,
      165
    ],
    "desc": "Kiệt tác thời kỳ Cấm rượu với hương thơm hoa cỏ của Gin ôm lấy vị ngọt ấm mật ong rừng và chanh vàng tươi.",
    "ingredients": [
      "60 ml London Dry Gin",
      "22.5 ml Nước cốt chanh vàng tươi",
      "22.5 ml Honey Syrup (Mật ong pha nước ấm tỷ lệ 3:1)",
      "1 miếng vỏ chanh vàng"
    ],
    "steps": [
      "Pha loãng mật ong nguyên chất với nước ấm theo tỷ lệ 3:1 và để nguội.",
      "Lắc mạnh Gin, nước cốt chanh vàng và Honey Syrup với đá già trong 12 giây.",
      "Lọc đôi ra ly Coupe lạnh và xịt tinh dầu vỏ chanh lên bề mặt."
    ],
    "tip": "Luôn dùng Honey Syrup 3:1 thay vì mật ong đặc trực tiếp để mật ong không bị vón cục khi gặp đá."
  },
  {
    "id": "bramble",
    "name": "London Blackberry Bramble",
    "category": "Sours & Fizz",
    "base": "Gin & Crème de Mûre",
    "spirit": "Gin",
    "glass": "Old Fashioned (Rocks)",
    "method": "Shake & Drizzle",
    "abv": "16%",
    "color": [
      155,
      42,
      98
    ],
    "accent": [
      235,
      145,
      190
    ],
    "desc": "Sáng tạo hiện đại kinh điển của Dick Bradsell tại London với hiệu ứng vân tím mâm xôi đen chảy loang trên nền đá bào mát lạnh.",
    "ingredients": [
      "50 ml London Dry Gin",
      "25 ml Nước cốt chanh vàng tươi",
      "15 ml Simple Syrup (1:1)",
      "15 ml Crème de Mûre (Rượu mùi mâm xôi đen)",
      "2 quả mâm xôi đen tươi & 1 lát chanh"
    ],
    "steps": [
      "Lắc Gin, nước cốt chanh vàng và Simple Syrup với đá viên trong 10 giây.",
      "Lọc ra ly Rocks chứa đầy đá bào / đá đập nhỏ.",
      "Rưới từ từ 15 ml Crème de Mûre lên đỉnh đá để tạo hiệu ứng loang màu tự nhiên."
    ],
    "tip": "Dùng đá bào hạt nhỏ giúp giữ lớp rượu mâm xôi đen loang dần theo từng ngụm thưởng thức."
  },
  {
    "id": "corpse-reviver-2",
    "name": "Corpse Reviver No. 2",
    "category": "Classic & Aperitif",
    "base": "Gin & Lillet Blanc",
    "spirit": "Gin",
    "glass": "Coupe",
    "method": "Rinse, Shake & Strain",
    "abv": "22%",
    "color": [
      195,
      190,
      130
    ],
    "accent": [
      245,
      242,
      205
    ],
    "desc": "Công thức hồi sinh kinh điển trong sách Savoy Cocktail Book với 4 thành phần bằng nhau và hương thảo mộc hồi từ Absinthe.",
    "ingredients": [
      "22.5 ml London Dry Gin",
      "22.5 ml Cointreau",
      "22.5 ml Lillet Blanc (hoặc Cocchi Americano)",
      "22.5 ml Nước cốt chanh vàng tươi",
      "2-3 giọt Absinthe tráng lòng ly"
    ],
    "steps": [
      "Tráng đều 2-3 giọt Absinthe bên trong lòng ly Coupe lạnh rồi đổ bỏ phần thừa.",
      "Lắc mạnh Gin, Cointreau, Lillet Blanc và nước cốt chanh vàng với đá già 12 giây.",
      "Lọc đôi ra ly Coupe đã tráng Absinthe và trang trí vỏ cam xoắn."
    ],
    "tip": "Chỉ cần một lớp tráng mỏng Absinthe để tạo hương thảo mộc nền tinh tế mà không lấn át vị cam chanh."
  },
  {
    "id": "aviation",
    "name": "Classic Violet Aviation",
    "category": "Classic & Aperitif",
    "base": "Gin & Maraschino",
    "spirit": "Gin",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "21%",
    "color": [
      132,
      118,
      178
    ],
    "accent": [
      215,
      205,
      245
    ],
    "desc": "Sắc tím oải hương bầu trời thanh thoát từ Crème de Violette kết hợp Gin, rượu mùi anh đào Maraschino và chanh vàng.",
    "ingredients": [
      "50 ml London Dry Gin",
      "15 ml Rượu mùi anh đào Luxardo Maraschino",
      "7.5 ml Crème de Violette",
      "20 ml Nước cốt chanh vàng tươi",
      "1 quả anh đào ngâm Maraschino"
    ],
    "steps": [
      "Cho tất cả nguyên liệu lỏng vào Shaker đầy đá già và lắc mạnh 12 giây.",
      "Lọc đôi qua rây mịn ra ly Coupe đã làm lạnh sâu.",
      "Thả quả anh đào ngâm xuống đáy ly để tạo điểm nhấn."
    ],
    "tip": "Giữ liều lượng Crème de Violette ở mức 5-7.5 ml để ly có sắc tím pastel đẹp mắt mà không bị nồng mùi hoa."
  },
  {
    "id": "last-word",
    "name": "Detroit The Last Word",
    "category": "Classic & Aperitif",
    "base": "Gin & Green Chartreuse",
    "spirit": "Gin",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "24%",
    "color": [
      128,
      168,
      92
    ],
    "accent": [
      215,
      240,
      180
    ],
    "desc": "Tuyệt tác cân bằng 1:1:1:1 từ thập niên 1910 với sức mạnh thảo mộc 130 loại cây của Green Chartreuse, Gin, Maraschino và chanh xanh.",
    "ingredients": [
      "22.5 ml London Dry Gin",
      "22.5 ml Green Chartreuse",
      "22.5 ml Luxardo Maraschino Liqueur",
      "22.5 ml Nước cốt chanh xanh tươi"
    ],
    "steps": [
      "Đong chính xác 4 nguyên liệu theo tỷ lệ bằng nhau vào Shaker đầy đá già.",
      "Lắc dứt khoát 12 giây để làm lạnh sâu và hòa quyện thảo mộc.",
      "Lọc đôi qua rây mịn ra ly Coupe lạnh."
    ],
    "tip": "Bí quyết của dòng Equal-Parts nằm ở độ chính xác từng mililit của Jigger và nước cốt chanh xanh vừa vắt."
  },
  {
    "id": "mint-julep",
    "name": "Kentucky Mint Julep",
    "category": "Spirit-Forward",
    "base": "Bourbon Whiskey",
    "spirit": "Whiskey",
    "glass": "Julep Cup (Cốc bạc)",
    "method": "Muddle & Swizzle",
    "abv": "24%",
    "color": [
      158,
      108,
      46
    ],
    "accent": [
      165,
      225,
      160
    ],
    "desc": "Biểu tượng giải đua ngựa Kentucky Derby với Bourbon ngọt ấm, lá bạc hà tươi đánh thức hương thơm và núi đá bào phủ sương trắng.",
    "ingredients": [
      "60 ml Bourbon Whiskey",
      "12.5 ml Simple Syrup (hoặc Demerara Syrup)",
      "10-12 Lá bạc hà tươi (Spearmint)",
      "Đá bào mịn (Crushed Ice) & 1 bó ngọn bạc hà lớn trang trí"
    ],
    "steps": [
      "Ấn nhẹ lá bạc hà cùng syrup dưới đáy cốc Julep để giải phóng tinh dầu.",
      "Cho Bourbon vào, thêm nửa cốc đá bào và khuấy đều (swizzle).",
      "Chất thêm đá bào thành chóp cao trên miệng cốc và cắm bó ngọn bạc hà sát ống hút."
    ],
    "tip": "Cắm bó bạc hà ngay cạnh ống hút để mỗi khi thưởng thức, hương thơm bạc hà chạm tới khứu giác đầu tiên."
  },
  {
    "id": "sazerac",
    "name": "New Orleans Sazerac",
    "category": "Spirit-Forward",
    "base": "Rye Whiskey & Cognac",
    "spirit": "Whiskey",
    "glass": "Old Fashioned (Không đá)",
    "method": "Rinse, Stir & Strain",
    "abv": "34%",
    "color": [
      155,
      62,
      34
    ],
    "accent": [
      240,
      175,
      95
    ],
    "desc": "Ly cocktail chính thức của thành phố New Orleans với Rye Whiskey, Peychaud's Bitters, đường và lớp sương Absinthe thơm nồng.",
    "ingredients": [
      "60 ml Rye Whiskey (hoặc chia đôi 30 ml Rye + 30 ml Cognac)",
      "7.5 ml Demerara Syrup (2:1)",
      "4 giọt Peychaud's Bitters",
      "1 giọt Angostura Bitters",
      "3 giọt Absinthe tráng ly & 1 miếng vỏ chanh vàng"
    ],
    "steps": [
      "Làm lạnh ly Rocks, tráng đều 3 giọt Absinthe bên trong rồi đổ phần dư ra ngoài.",
      "Khuấy Rye Whiskey, syrup và Bitters trong Mixing Glass đầy đá già 25 giây.",
      "Lọc ra ly đã tráng Absinthe (phục vụ không đá), xịt tinh dầu vỏ chanh và bỏ vỏ ra ngoài."
    ],
    "tip": "Sazerac truyền thống luôn phục vụ không đá (Neat/Up) trong ly Rocks đã làm lạnh sâu."
  },
  {
    "id": "godfather",
    "name": "Sicilian Godfather",
    "category": "Spirit-Forward",
    "base": "Scotch Whisky & Amaretto",
    "spirit": "Whiskey",
    "glass": "Old Fashioned (Rocks)",
    "method": "Build & Stir",
    "abv": "33%",
    "color": [
      168,
      92,
      36
    ],
    "accent": [
      238,
      180,
      95
    ],
    "desc": "Cặp đôi quyền lực chỉ gồm hai thành phần: hương khói mạch nha của Scotch Whisky quyện cùng vị hạnh nhân ngọt sâu của Amaretto.",
    "ingredients": [
      "50 ml Blended Scotch Whisky (hoặc Single Malt nhẹ)",
      "25 ml Amaretto (Disaronno)",
      "1 viên đá khối lớn & 1 miếng vỏ cam vàng"
    ],
    "steps": [
      "Đặt viên đá khối lớn vào ly Rocks.",
      "Rót Scotch Whisky và Amaretto trực tiếp lên đá.",
      "Khuấy nhẹ 15 vòng cho đến khi đạt độ lạnh mượt và xịt tinh dầu vỏ cam."
    ],
    "tip": "Có thể điều chỉnh tỷ lệ 2:1 thành 3:1 nếu bạn muốn vị khói của Scotch nổi bật hơn vị ngọt hạnh nhân."
  },
  {
    "id": "rob-roy",
    "name": "Scottish Rob Roy",
    "category": "Spirit-Forward",
    "base": "Scotch Whisky",
    "spirit": "Whiskey",
    "glass": "Coupe / Nick & Nora",
    "method": "Stir & Strain",
    "abv": "29%",
    "color": [
      148,
      46,
      36
    ],
    "accent": [
      228,
      152,
      85
    ],
    "desc": "Phiên bản Scotland của Manhattan khi dùng Scotch Whisky thay cho Rye Whiskey, mang chiều sâu mạch nha và thảo mộc ấm áp.",
    "ingredients": [
      "60 ml Blended Scotch Whisky",
      "25 ml Sweet Red Vermouth",
      "2 giọt Angostura Bitters",
      "1 quả anh đào ngâm Maraschino (hoặc vỏ cam xoắn)"
    ],
    "steps": [
      "Khuấy đều Scotch Whisky, Sweet Vermouth và Angostura Bitters với đá già trong 25 giây.",
      "Lọc mịn ra ly Coupe đã làm lạnh sâu và trang trí quả anh đào ngâm."
    ],
    "tip": "Chọn Blended Scotch có độ cân bằng tốt như Johnnie Walker Black Label hoặc Chivas 12 để hòa quyện mượt với Vermouth."
  },
  {
    "id": "vieux-carre",
    "name": "French Quarter Vieux Carré",
    "category": "Spirit-Forward",
    "base": "Rye, Cognac & Vermouth",
    "spirit": "Whiskey",
    "glass": "Old Fashioned (Rocks)",
    "method": "Stir & Strain",
    "abv": "30%",
    "color": [
      138,
      52,
      34
    ],
    "accent": [
      232,
      165,
      92
    ],
    "desc": "Kiệt tác từ khách sạn Carousel Bar (New Orleans) kết hợp Rye Whiskey, Cognac, Sweet Vermouth, Bénédictine và hai loại Bitters.",
    "ingredients": [
      "30 ml Rye Whiskey",
      "30 ml Cognac VSOP",
      "30 ml Sweet Red Vermouth",
      "7.5 ml Rượu thảo mộc Bénédictine DOM",
      "2 giọt Peychaud's Bitters & 2 giọt Angostura Bitters"
    ],
    "steps": [
      "Cho tất cả nguyên liệu vào Mixing Glass đầy đá già và khuấy đều 25-30 giây.",
      "Lọc ra ly Rocks có viên đá khối lớn và xịt tinh dầu vỏ cam vàng."
    ],
    "tip": "Bénédictine mang lại hậu vị mật ong thảo mộc kéo dài, kết nối mượt mà giữa vị cay của Rye và hương nho của Cognac."
  },
  {
    "id": "irish-coffee",
    "name": "Buena Vista Irish Coffee",
    "category": "Signature Cocktails",
    "base": "Irish Whiskey & Coffee",
    "spirit": "Whiskey",
    "glass": "Toddy / Irish Coffee Glass",
    "method": "Build & Layer Cream",
    "abv": "11%",
    "color": [
      68,
      44,
      32
    ],
    "accent": [
      248,
      240,
      225
    ],
    "desc": "Sự ấm áp kinh điển từ Dublin đến San Francisco: cà phê nóng đậm đà, Irish Whiskey êm mượt, đường nâu và lớp kem tươi lạnh bồng bềnh.",
    "ingredients": [
      "45 ml Irish Whiskey (Jameson / Bushmills)",
      "120 ml Cà phê đen pha nóng mới chiết xuất",
      "15 ml Syrup đường nâu Demerara",
      "35 ml Kem tươi (Heavy Cream) đánh bông nhẹ còn độ chảy"
    ],
    "steps": [
      "Tráng nước sôi làm ấm ly thủy tinh có quai.",
      "Rót cà phê nóng, syrup đường nâu và Irish Whiskey vào ly, khuấy tan đều.",
      "Rót từ từ lớp kem tươi đánh bông nhẹ qua lưng thìa ấm để kem nổi thành tầng dày trên mặt."
    ],
    "tip": "Không khuấy lớp kem vào cà phê; hãy uống xuyên qua lớp kem lạnh để cảm nhận sự tương phản nóng – lạnh độc đáo."
  },
  {
    "id": "caipirinha",
    "name": "Brazilian Lime Caipirinha",
    "category": "Sours & Fizz",
    "base": "Cachaça",
    "spirit": "Rum",
    "glass": "Old Fashioned (Rocks)",
    "method": "Muddle & Build",
    "abv": "22%",
    "color": [
      145,
      182,
      82
    ],
    "accent": [
      235,
      245,
      195
    ],
    "desc": "Quốc tửu của Brazil làm từ rượu mía tươi chưng cất Cachaça, chanh xanh cắt múi dầm cùng đường mía thô và đá đập.",
    "ingredients": [
      "60 ml Cachaça (Leblon / Sagatiba)",
      "1/2 quả Chanh xanh tươi cắt làm 6-8 miếng nhỏ",
      "2 muỗng cà phê Đường cát trắng (hoặc 15 ml Rich Syrup)",
      "Đá viên đập nhỏ"
    ],
    "steps": [
      "Cho chanh xanh cắt miếng và đường vào ly Rocks, dùng chày dầm chiết xuất nước cốt và tinh dầu vỏ.",
      "Rót Cachaça vào ly, thêm đầy đá đập nhỏ và khuấy đều từ đáy ly lên trên."
    ],
    "tip": "Cắt bỏ phần lõi xơ trắng giữa quả chanh trước khi dầm để thức uống thanh ngọt mà không bị đắng tinh dầu."
  },
  {
    "id": "zombie",
    "name": "Donn Beach Tiki Zombie",
    "category": "Tiki & Tropical",
    "base": "3 Dòng Rum & Absinthe",
    "spirit": "Rum",
    "glass": "Tiki Mug / Highball",
    "method": "Flash Blend / Shake",
    "abv": "26%",
    "color": [
      188,
      78,
      42
    ],
    "accent": [
      248,
      195,
      110
    ],
    "desc": "Huyền thoại Tiki năm 1934 kết hợp 3 dòng Rum, nước ép bưởi, quế, Falernum, lựu đỏ và Absinthe — đậm đà và đầy mê hoặc.",
    "ingredients": [
      "45 ml Aged Jamaican Rum",
      "45 ml Gold Puerto Rican Rum",
      "30 ml Overproof Dark Rum (151 Proof)",
      "20 ml Nước cốt chanh xanh tươi",
      "15 ml Don's Mix (Nước ép bưởi hồng + Syrup quế)",
      "15 ml Velvet Falernum & 5 ml Grenadine & 2 giọt Absinthe"
    ],
    "steps": [
      "Cho toàn bộ nguyên liệu vào Shaker cùng đá bào, lắc mạnh 10 giây.",
      "Rót toàn bộ hỗn hợp lẫn đá ra ly Tiki Mug cao, trang trí ngọn bạc hà và lát cam."
    ],
    "tip": "Do nồng độ cồn cao từ 3 dòng Rum, theo truyền thống quầy bar Tiki mỗi thực khách chỉ phục vụ tối đa 2 ly Zombie."
  },
  {
    "id": "jungle-bird",
    "name": "Kuala Lumpur Jungle Bird",
    "category": "Tiki & Tropical",
    "base": "Blackstrap Rum & Campari",
    "spirit": "Rum",
    "glass": "Old Fashioned (Rocks)",
    "method": "Shake & Strain",
    "abv": "16%",
    "color": [
      198,
      56,
      52
    ],
    "accent": [
      245,
      195,
      95
    ],
    "desc": "Giao điểm bất ngờ giữa Tiki nhiệt đới và khai vị Ý: Dark Rum đậm mật mía, nước ép dứa ngọt dịu và vị đắng thanh của Campari.",
    "ingredients": [
      "45 ml Dark / Blackstrap Rum",
      "22.5 ml Campari",
      "45 ml Nước ép dứa tươi",
      "15 ml Nước cốt chanh xanh tươi",
      "15 ml Demerara Syrup (hoặc Simple Syrup)"
    ],
    "steps": [
      "Cho tất cả nguyên liệu vào Shaker đầy đá viên và lắc mạnh 12 giây để tạo lớp bọt dứa mịn.",
      "Lọc ra ly Rocks có đá khối lớn và trang trí miếng dứa tươi cùng lá dứa."
    ],
    "tip": "Lắc mạnh với nước ép dứa tươi sẽ tạo lớp bọt bông tự nhiên cực kỳ đẹp mắt trên mặt ly."
  },
  {
    "id": "painkiller",
    "name": "Caribbean Painkiller",
    "category": "Tiki & Tropical",
    "base": "Navy Dark Rum",
    "spirit": "Rum",
    "glass": "Hurricane / Tiki Mug",
    "method": "Shake & Grate Nutmeg",
    "abv": "15%",
    "color": [
      224,
      178,
      86
    ],
    "accent": [
      252,
      238,
      190
    ],
    "desc": "Đặc sản quần đảo British Virgin với Navy Rum đậm đà, nước ép dứa, cam tươi, kem dừa béo ngậy và hạt nhục đậu khấu bào thơm.",
    "ingredients": [
      "60 ml Navy Dark Rum (Pusser's Rum)",
      "90 ml Nước ép dứa tươi",
      "30 ml Nước cam vắt tươi",
      "30 ml Kem dừa (Cream of Coconut)",
      "Hạt nhục đậu khấu (Nutmeg) bào tươi trên mặt"
    ],
    "steps": [
      "Lắc mạnh Rum, nước ép dứa, nước cam và kem dừa với đá viên trong 15 giây.",
      "Rót ra ly đầy đá bào và bào một lớp mỏng hạt nhục đậu khấu tươi lên đỉnh ly."
    ],
    "tip": "Bột nhục đậu khấu tươi bào trực tiếp tạo mùi thơm ấm áp giúp cân bằng độ béo của kem dừa."
  },
  {
    "id": "hemingway-special",
    "name": "Hemingway Daiquiri Special",
    "category": "Sours & Fizz",
    "base": "White Rum & Maraschino",
    "spirit": "Rum",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "21%",
    "color": [
      212,
      165,
      145
    ],
    "accent": [
      248,
      222,
      205
    ],
    "desc": "Công thức đặt riêng của đại văn hào Ernest Hemingway tại quán El Floridita (Havana): gấp đôi Rum, bưởi hồng tươi, chanh xanh và Maraschino.",
    "ingredients": [
      "60 ml White Cuban Rum",
      "15 ml Luxardo Maraschino Liqueur",
      "30 ml Nước ép bưởi hồng tươi",
      "15 ml Nước cốt chanh xanh tươi",
      "5 ml Simple Syrup (tùy chọn cân bằng)"
    ],
    "steps": [
      "Lắc mạnh tất cả nguyên liệu với đá già trong 12 giây.",
      "Lọc đôi qua rây mịn ra ly Coupe đã làm lạnh sâu và trang trí lát bưởi hồng."
    ],
    "tip": "Vị đắng thanh tự nhiên của nước ép bưởi hồng kết hợp hương anh đào khô của Maraschino tạo hậu vị rất khô và sảng khoái."
  },
  {
    "id": "planters-punch",
    "name": "Jamaican Planter's Punch",
    "category": "Tiki & Tropical",
    "base": "Jamaican Aged Rum",
    "spirit": "Rum",
    "glass": "Highball / Collins",
    "method": "Shake & Build",
    "abv": "17%",
    "color": [
      182,
      74,
      44
    ],
    "accent": [
      245,
      188,
      110
    ],
    "desc": "Tuân thủ vần thơ cổ vùng Caribe: '1 chua, 2 ngọt, 3 mạnh, 4 yếu' với Jamaican Rum đậm hương trái cây nhiệt đới và Bitters.",
    "ingredients": [
      "60 ml Aged Jamaican Rum (Appleton Estate)",
      "25 ml Nước cốt chanh xanh tươi",
      "20 ml Demerara Syrup (hoặc Grenadine + Syrup)",
      "3 giọt Angostura Bitters",
      "30 ml Nước lọc lạnh hoặc Soda"
    ],
    "steps": [
      "Lắc mạnh Jamaican Rum, nước cốt chanh, syrup và Bitters với đá viên.",
      "Rót ra ly Highball đầy đá đập nhỏ, châm thêm nước lạnh/soda và trang trí bạc hà."
    ],
    "tip": "Jamaican Rum có độ lên men tự nhiên (hogo) rất thơm chuối chín và dứa nướng, cực hợp với Angostura Bitters."
  },
  {
    "id": "tommys-margarita",
    "name": "Tommy's Agave Margarita",
    "category": "Sours & Fizz",
    "base": "Reposado Tequila",
    "spirit": "Tequila",
    "glass": "Old Fashioned (Rocks)",
    "method": "Shake & Strain",
    "abv": "20%",
    "color": [
      168,
      188,
      86
    ],
    "accent": [
      242,
      246,
      200
    ],
    "desc": "Cuộc cách mạng Margarita của Julio Bermejo tại San Francisco: bỏ rượu mùi cam, chỉ dùng Tequila 100% Agave, chanh xanh và mật cây thùa.",
    "ingredients": [
      "60 ml Tequila Blanco hoặc Reposado (100% Blue Agave)",
      "30 ml Nước cốt chanh xanh tươi",
      "15 ml Mật cây thùa hữu cơ (Agave Nectar)",
      "1 lát chanh xanh tươi"
    ],
    "steps": [
      "Lắc mạnh Tequila, nước cốt chanh xanh và Agave Nectar với đá già trong 12 giây.",
      "Lọc ra ly Rocks có đá khối lớn (có thể viền muối hoặc không viền muối)."
    ],
    "tip": "Mật cây thùa chiết xuất từ chính cây Agave nên đồng điệu hoàn hảo với cấu trúc hương vị của Tequila nguyên chất."
  },
  {
    "id": "el-diablo",
    "name": "Mexican El Diablo",
    "category": "Highballs & Refreshers",
    "base": "Tequila & Crème de Cassis",
    "spirit": "Tequila",
    "glass": "Highball",
    "method": "Shake & Top Ginger Beer",
    "abv": "13%",
    "color": [
      165,
      42,
      78
    ],
    "accent": [
      242,
      165,
      185
    ],
    "desc": "Công thức cổ điển từ năm 1946 kết hợp Tequila Reposado, rượu mùi lý chua đen Crème de Cassis, chanh xanh và bia gừng cay nồng.",
    "ingredients": [
      "45 ml Tequila Reposado",
      "15 ml Crème de Cassis (Rượu mùi lý chua đen)",
      "15 ml Nước cốt chanh xanh tươi",
      "90 ml Bia gừng (Ginger Beer) ướp lạnh"
    ],
    "steps": [
      "Lắc nhanh Tequila, Crème de Cassis và nước cốt chanh xanh với đá viên.",
      "Lọc ra ly Highball đầy đá và châm đầy bia gừng lạnh."
    ],
    "tip": "Bạn có thể rót nổi 15 ml Crème de Cassis lên trên cùng sau khi châm bia gừng để tạo hiệu ứng chuyển sắc đỏ tím."
  },
  {
    "id": "naked-and-famous",
    "name": "Mezcal Naked & Famous",
    "category": "Classic & Aperitif",
    "base": "Mezcal & Yellow Chartreuse",
    "spirit": "Tequila",
    "glass": "Coupe",
    "method": "Shake & Double Strain",
    "abv": "22%",
    "color": [
      218,
      128,
      52
    ],
    "accent": [
      252,
      212,
      145
    ],
    "desc": "Đứa con tinh thần của Paper Plane và The Last Word: khói nướng Mezcal hòa quyện mật hoa Yellow Chartreuse, Aperol và chanh xanh.",
    "ingredients": [
      "22.5 ml Mezcal Espadín",
      "22.5 ml Yellow Chartreuse",
      "22.5 ml Aperol",
      "22.5 ml Nước cốt chanh xanh tươi"
    ],
    "steps": [
      "Cho cả 4 nguyên liệu theo tỷ lệ 1:1:1:1 vào Shaker đầy đá già.",
      "Lắc mạnh 12 giây và lọc đôi qua rây mịn ra ly Coupe lạnh."
    ],
    "tip": "Hương khói của Mezcal làm dịu độ ngọt của Yellow Chartreuse và Aperol, tạo nên cấu trúc cực kỳ hài hòa."
  },
  {
    "id": "mezcal-negroni",
    "name": "Smoky Mezcal Negroni",
    "category": "Classic & Aperitif",
    "base": "Mezcal",
    "spirit": "Tequila",
    "glass": "Old Fashioned (Rocks)",
    "method": "Stir & Strain",
    "abv": "24%",
    "color": [
      172,
      42,
      38
    ],
    "accent": [
      238,
      142,
      65
    ],
    "desc": "Biến tấu đầy cá tính của Negroni khi thay Gin bằng Mezcal — hương khói gỗ sồi và thảo mộc nướng nâng tầm vị đắng Campari.",
    "ingredients": [
      "30 ml Mezcal Espadín",
      "30 ml Campari",
      "30 ml Sweet Red Vermouth",
      "1 miếng vỏ cam vàng"
    ],
    "steps": [
      "Khuấy đều Mezcal, Campari và Sweet Vermouth trong Mixing Glass đầy đá già 25 giây.",
      "Lọc ra ly Rocks có đá khối lớn và xịt tinh dầu vỏ cam vàng lên bề mặt."
    ],
    "tip": "Xịt tinh dầu vỏ cam đốt nhẹ qua lửa (Flame Orange Peel) sẽ làm hương khói của Mezcal thêm phần quyến rũ."
  },
  {
    "id": "white-russian",
    "name": "Velvet White Russian",
    "category": "Signature Cocktails",
    "base": "Vodka & Kahlúa",
    "spirit": "Vodka",
    "glass": "Old Fashioned (Rocks)",
    "method": "Build & Float Cream",
    "abv": "19%",
    "color": [
      112,
      78,
      56
    ],
    "accent": [
      248,
      240,
      228
    ],
    "desc": "Mượt mà, béo ngậy và đậm hương cà phê rang: Vodka hòa cùng rượu mùi cà phê Kahlúa và lớp kem tươi sánh mịn chảy loang đẹp mắt.",
    "ingredients": [
      "50 ml Vodka tinh khiết",
      "25 ml Rượu mùi cà phê Kahlúa",
      "30 ml Kem tươi (Heavy Cream) đánh bông nhẹ",
      "Viên đá khối lớn"
    ],
    "steps": [
      "Cho viên đá khối lớn vào ly Rocks, rót Vodka và Kahlúa vào rồi khuấy đều.",
      "Rót từ từ kem tươi đánh bông nhẹ qua lưng thìa để tạo vân mây trắng trên mặt."
    ],
    "tip": "Lắc nhẹ kem tươi trong bình shaker không đá khoảng 5 giây trước khi rót giúp kem có độ sánh mịn hoàn hảo."
  },
  {
    "id": "bloody-mary",
    "name": "Spiced Brunch Bloody Mary",
    "category": "Highballs & Refreshers",
    "base": "Vodka & Tomato",
    "spirit": "Vodka",
    "glass": "Highball / Collins",
    "method": "Rolling (Rót chuyển bình)",
    "abv": "10%",
    "color": [
      188,
      42,
      36
    ],
    "accent": [
      235,
      175,
      115
    ],
    "desc": "Thức uống vị mặn (Savory) kinh điển cho bữa sáng muộn với nước ép cà chua chín, Vodka, sốt Worcestershire, Tabasco và cần tây.",
    "ingredients": [
      "45 ml Vodka tinh khiết",
      "90 ml Nước ép cà chua nguyên chất",
      "15 ml Nước cốt chanh vàng tươi",
      "4 giọt Sốt Worcestershire & 2 giọt Tabasco",
      "1 nhúm muối cần tây & tiêu đen xay",
      "1 nhánh cần tây tươi & lát chanh"
    ],
    "steps": [
      "Cho tất cả nguyên liệu lỏng và gia vị vào cốc Shaker có đá viên.",
      "Thực hiện kỹ thuật Rolling (rót qua lại giữa 2 cốc Shaker) 5-6 lần để hòa quyện mà không tạo bọt vỡ.",
      "Lọc ra ly Highball đầy đá, rắc tiêu đen và cắm nhánh cần tây."
    ],
    "tip": "Kỹ thuật Rolling giúp làm lạnh nước ép cà chua đặc mà không làm loãng hay sủi bọt quá mức như lắc mạnh."
  },
  {
    "id": "vesper-martini",
    "name": "007 Vesper Martini",
    "category": "Classic & Aperitif",
    "base": "Gin, Vodka & Lillet",
    "spirit": "Vodka",
    "glass": "Martini / Coupe",
    "method": "Shake & Double Strain",
    "abv": "31%",
    "color": [
      145,
      165,
      165
    ],
    "accent": [
      235,
      242,
      228
    ],
    "desc": "Công thức bất hủ của James Bond trong Casino Royale: kết hợp sức mạnh của Gin, sự mượt mà của Vodka và hương hoa của Kina Lillet.",
    "ingredients": [
      "45 ml London Dry Gin",
      "15 ml Vodka tinh khiết",
      "7.5 ml Lillet Blanc (hoặc Cocchi Americano)",
      "1 dải vỏ chanh vàng mỏng"
    ],
    "steps": [
      "Cho Gin, Vodka và Lillet Blanc vào Shaker đầy đá già, lắc dứt khoát 12 giây.",
      "Lọc đôi ra ly Martini lạnh buốt và xịt tinh dầu vỏ chanh vàng lên mặt ly."
    ],
    "tip": "Dùng Cocchi Americano sẽ tái hiện gần nhất vị đắng nhẹ của vỏ cây canh-ki-na trong Kina Lillet nguyên bản năm 1953."
  },
  {
    "id": "french-martini",
    "name": "Chambord French Martini",
    "category": "Signature Cocktails",
    "base": "Vodka & Chambord",
    "spirit": "Vodka",
    "glass": "Coupe / Martini",
    "method": "Hard Shake & Double Strain",
    "abv": "16%",
    "color": [
      188,
      58,
      96
    ],
    "accent": [
      248,
      205,
      218
    ],
    "desc": "Thanh lịch và quyến rũ với Vodka, rượu mùi mâm xôi đen Chambord và nước ép dứa tươi tạo lớp bọt hồng nhung mịn màng.",
    "ingredients": [
      "45 ml Vodka tinh khiết",
      "15 ml Chambord (Rượu mùi mâm xôi đen)",
      "45 ml Nước ép dứa tươi",
      "1 quả mâm xôi tươi trang trí"
    ],
    "steps": [
      "Cho Vodka, Chambord và nước ép dứa vào Shaker đầy đá già.",
      "Lắc thật mạnh (Hard Shake) 15 giây để enzym trong dứa tạo lớp bọt dày mịn.",
      "Lọc đôi ra ly Coupe lạnh và đặt quả mâm xôi lên bề mặt."
    ],
    "tip": "Nước ép dứa tươi ép trong ngày sẽ tạo lớp bọt crema hồng tự nhiên dày gấp đôi nước ép đóng hộp."
  },
  {
    "id": "sidecar",
    "name": "Parisian Cognac Sidecar",
    "category": "Sours & Fizz",
    "base": "Cognac & Cointreau",
    "spirit": "Brandy",
    "glass": "Coupe (Viền đường)",
    "method": "Shake & Double Strain",
    "abv": "23%",
    "color": [
      196,
      128,
      48
    ],
    "accent": [
      248,
      218,
      165
    ],
    "desc": "Chuẩn mực dòng Sour từ Paris thập niên 1920: Cognac ấm nồng, rượu mùi cam Cointreau, chanh vàng tươi và viền đường mịn tinh tế.",
    "ingredients": [
      "50 ml Cognac VSOP",
      "20 ml Cointreau (Triple Sec)",
      "20 ml Nước cốt chanh vàng tươi",
      "Đường cát mịn viền nửa miệng ly & vỏ cam xoắn"
    ],
    "steps": [
      "Làm ướt nửa ngoài miệng ly Coupe bằng lát chanh và nhúng qua đĩa đường mịn.",
      "Lắc mạnh Cognac, Cointreau và nước cốt chanh vàng với đá già trong 12 giây.",
      "Lọc đôi ra ly Coupe và xịt tinh dầu vỏ cam lên bề mặt."
    ],
    "tip": "Chỉ nên viền đường nửa miệng ly để thực khách có thể chủ động chọn ngụm có đường hoặc ngụm chua thanh nguyên bản."
  },
  {
    "id": "brandy-alexander",
    "name": "Creamy Brandy Alexander",
    "category": "Signature Cocktails",
    "base": "Cognac & Crème de Cacao",
    "spirit": "Brandy",
    "glass": "Coupe",
    "method": "Shake & Grate Nutmeg",
    "abv": "18%",
    "color": [
      148,
      108,
      82
    ],
    "accent": [
      245,
      228,
      212
    ],
    "desc": "Ly cocktail tráng miệng sang trọng bậc nhất với Cognac, rượu mùi cacao nâu, kem tươi béo mịn và hương hạt nhục đậu khấu.",
    "ingredients": [
      "40 ml Cognac VSOP",
      "25 ml Dark Crème de Cacao",
      "25 ml Kem tươi (Heavy Cream)",
      "Hạt nhục đậu khấu bào mịn"
    ],
    "steps": [
      "Lắc mạnh Cognac, Crème de Cacao và kem tươi với đá viên trong 14 giây.",
      "Lọc đôi ra ly Coupe lạnh và rắc nhẹ hạt nhục đậu khấu bào tươi lên trên."
    ],
    "tip": "Dùng Dark Crème de Cacao thay vì loại trong suốt để tăng chiều sâu hương sô-cô-la rang và sắc nâu ấm áp."
  },
  {
    "id": "pisco-sour",
    "name": "Peruvian Pisco Sour",
    "category": "Sours & Fizz",
    "base": "Pisco (Brandy nho)",
    "spirit": "Brandy",
    "glass": "Coupe / Rocks",
    "method": "Dry Shake & Wet Shake",
    "abv": "18%",
    "color": [
      192,
      185,
      138
    ],
    "accent": [
      248,
      246,
      235
    ],
    "desc": "Niềm tự hào của Peru và Chile với rượu chưng cất nho Pisco thơm hoa trái, chanh xanh, syrup đường, lòng trắng trứng và Amargo Chuncho.",
    "ingredients": [
      "60 ml Pisco Quebranta",
      "25 ml Nước cốt chanh xanh tươi",
      "20 ml Simple Syrup (1:1)",
      "15 ml Lòng trắng trứng tươi",
      "3 giọt Angostura Bitters (hoặc Amargo Chuncho) trên mặt bọt"
    ],
    "steps": [
      "Thực hiện Dry Shake không đá tất cả nguyên liệu (trừ Bitters) trong 12 giây.",
      "Thêm đá già, lắc mạnh 12 giây rồi lọc đôi ra ly Coupe lạnh.",
      "Nhỏ 3 giọt Bitters lên lớp bọt trắng dày để khử mùi trứng và tạo hương thơm."
    ],
    "tip": "3 giọt Bitters trên lớp bọt vừa tạo điểm nhấn thị giác vừa đóng vai trò quan trọng tạo mùi thơm khi đưa ly lên môi."
  },
  {
    "id": "virgin-mojito",
    "name": "Garden Virgin Mojito",
    "category": "Signature Cocktails",
    "base": "Bạc hà, Chanh & Soda",
    "spirit": "Mocktail",
    "glass": "Highball / Collins",
    "method": "Muddle & Build",
    "abv": "0% (Non-Alcoholic / Mocktail)",
    "color": [
      78,
      172,
      112
    ],
    "accent": [
      215,
      245,
      212
    ],
    "desc": "Phiên bản không cồn thanh mát tuyệt đối: tinh dầu bạc hà tươi hòa quyện nước cốt chanh xanh, đường mía và bọt soda sảng khoái.",
    "ingredients": [
      "12-15 Lá bạc hà tươi (Spearmint)",
      "25 ml Nước cốt chanh xanh tươi",
      "20 ml Syrup đường mía",
      "120 ml Nước Soda ướp lạnh",
      "Đá bào & 1 lát chanh xanh"
    ],
    "steps": [
      "Vỗ nhẹ lá bạc hà và cho vào ly Highball cùng syrup đường và nước cốt chanh.",
      "Dầm nhẹ tay 2-3 nhịp để tiết tinh dầu thơm mát.",
      "Thêm đầy đá bào, châm nước Soda ướp lạnh và khuấy đều từ dưới lên."
    ],
    "tip": "Dùng đường mía vàng hoặc mật ong loãng thay cho đường trắng giúp Virgin Mojito có hậu vị dày và tròn hơn khi không có Rum."
  },
  {
    "id": "shirley-temple",
    "name": "Sparkling Shirley Temple",
    "category": "Signature Cocktails",
    "base": "Grenadine & Ginger Ale",
    "spirit": "Mocktail",
    "glass": "Highball",
    "method": "Build",
    "abv": "0% (Non-Alcoholic / Mocktail)",
    "color": [
      205,
      58,
      72
    ],
    "accent": [
      250,
      185,
      192
    ],
    "desc": "Ly mocktail huyền thoại của Hollywood với sắc đỏ lựu tự nhiên (Grenadine), nước cốt chanh tươi và Ginger Ale sủi bọt.",
    "ingredients": [
      "20 ml Syrup lựu đỏ tự nhiên (Grenadine)",
      "15 ml Nước cốt chanh vàng tươi",
      "150 ml Ginger Ale ướp lạnh",
      "1 quả anh đào ngâm & 1 lát cam vàng"
    ],
    "steps": [
      "Cho đá viên đầy ly Highball, rót nước cốt chanh và Ginger Ale ướp lạnh.",
      "Rót từ từ Grenadine để tạo hiệu ứng chuyển sắc đỏ hoàng hôn đẹp mắt."
    ],
    "tip": "Nên dùng Grenadine làm từ nước ép lựu thật để có vị chua ngọt thanh tao thay vì syrup phẩm màu quá ngọt."
  },
  {
    "id": "no-jito-hibiscus",
    "name": "Ruby Hibiscus Cooler",
    "category": "Signature Cocktails",
    "base": "Trà Hibiscus & Chanh dây",
    "spirit": "Mocktail",
    "glass": "Highball / Wine Glass",
    "method": "Shake & Top Tonic",
    "abv": "0% (Non-Alcoholic / Mocktail)",
    "color": [
      178,
      36,
      68
    ],
    "accent": [
      248,
      175,
      190
    ],
    "desc": "Sáng tạo mocktail hiện đại từ Lam's Barista: trà hoa bụp giấm (Hibiscus) ủ lạnh, chanh dây vàng, mật ong và Tonic thảo mộc.",
    "ingredients": [
      "60 ml Trà hoa Hibiscus ủ lạnh đậm đặc",
      "20 ml Nước cốt chanh dây vàng tươi",
      "15 ml Honey Syrup (3:1)",
      "60 ml Nước Tonic ướp lạnh",
      "1 nhánh hương thảo (Rosemary)"
    ],
    "steps": [
      "Lắc mạnh trà Hibiscus, nước cốt chanh dây và Honey Syrup với đá viên trong 12 giây.",
      "Lọc ra ly đầy đá khối, châm thêm nước Tonic lạnh và trang trí nhánh hương thảo."
    ],
    "tip": "Vị chát nhẹ và vị đắng quinine trong Tonic tạo cấu trúc phức hợp như một ly cocktail thực thụ mà hoàn toàn 0% cồn."
  }
];
