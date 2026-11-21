const recipes = [
  // ================= WHISKEY =================
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    type: "cocktail",
    base: "Whiskey",
    rarity: "Phổ biến",
    glass: "Rocks Glass",
    diff: "Dễ",
    str: 5,
    tags: ["Cổ điển", "Mạnh", "Vani"],
    desc: "Bourbon hoặc Rye hòa quyện cùng đường, bitters và tinh dầu vỏ cam. Đậm đà, sâu lắng, chuẩn mực của quầy bar cổ điển.",
    img: "images/old-fashioned.webp",
    ings: ["60ml Bourbon hoặc Rye", "1 viên đường / 5ml simple syrup", "2 dash Angostura Bitters", "Vỏ cam tươi", "Đá viên lớn"],
    steps: [
      "Cho đường và bitters vào ly, thêm vài giọt nước rồi khuấy tan.",
      "Thêm whiskey và một viên đá lớn trong.",
      "Khuấy chậm 20–30 giây để làm lạnh và mở hương.",
      "Vắt vỏ cam lên bề mặt để tỏa tinh dầu rồi thả vào ly."
    ]
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    type: "cocktail",
    base: "Whiskey",
    rarity: "Phổ biến",
    glass: "Rocks / Coupe",
    diff: "Trung bình",
    str: 3,
    tags: ["Chua ngọt", "Bọt mịn", "Cổ điển"],
    desc: "Bourbon, nước cốt chanh vàng, đường và lòng trắng trứng tạo lớp bọt kem mượt mà, cân bằng hoàn hảo giữa vị chua và ấm.",
    img: "",
    ings: ["60ml Bourbon", "25ml nước cốt chanh vàng tươi", "15ml simple syrup", "15ml lòng trắng trứng (tùy chọn)", "2 dash Angostura Bitters"],
    steps: [
      "Cho tất cả nguyên liệu (chưa cho đá) vào shaker, lắc khô (dry shake) 10 giây để tạo bọt.",
      "Thêm đá đầy shaker và lắc mạnh thêm 12 giây cho lạnh sâu.",
      "Lọc qua lưới vào ly rocks có đá hoặc ly coupe, nhỏ vài giọt bitters lên mặt bọt."
    ]
  },
  {
    id: "manhattan",
    name: "Manhattan",
    type: "cocktail",
    base: "Whiskey",
    rarity: "Phổ biến",
    glass: "Coupe / Martini",
    diff: "Dễ",
    str: 5,
    tags: ["Mạnh", "Thảo mộc", "Quý tộc"],
    desc: "Rye Whiskey kết hợp sweet vermouth và bitters, khuấy lạnh mượt mà và phục vụ không đá cùng quả anh đào ngâm.",
    img: "",
    ings: ["60ml Rye Whiskey (hoặc Bourbon)", "30ml Sweet Vermouth", "2 dash Angostura Bitters", "1 quả anh đào Maraschino"],
    steps: [
      "Cho tất cả nguyên liệu vào ly khuấy (mixing glass) đầy đá.",
      "Khuấy đều tay khoảng 25–30 giây đến khi lạnh buốt.",
      "Lọc vào ly coupe đã ướp lạnh và trang trí bằng anh đào."
    ]
  },
  {
    id: "boulevardier",
    name: "Boulevardier",
    type: "cocktail",
    base: "Whiskey",
    rarity: "Kinh điển ít gặp",
    glass: "Rocks Glass",
    diff: "Dễ",
    str: 4,
    tags: ["Đắng", "Ấm áp", "Aperitivo"],
    desc: "Người anh em dùng Bourbon của Negroni — vị đắng của Campari hòa quyện với hương caramel và gỗ sồi ấm áp của whiskey.",
    img: "",
    ings: ["45ml Bourbon hoặc Rye", "30ml Campari", "30ml Sweet Vermouth", "Vỏ cam tươi"],
    steps: [
      "Cho nguyên liệu vào ly khuấy cùng đá viên.",
      "Khuấy đều 20 giây cho hòa quyện và lạnh sâu.",
      "Rót ra ly rocks có viên đá lớn, vắt tinh dầu vỏ cam lên trên."
    ]
  },
  {
    id: "penicillin",
    name: "Penicillin",
    type: "cocktail",
    base: "Whiskey",
    rarity: "Hiện đại đặc sắc",
    glass: "Rocks Glass",
    diff: "Trung bình",
    str: 4,
    tags: ["Khói", "Gừng mật ong", "Độc đáo"],
    desc: "Scotch whisky phối cùng mật ong gừng, chanh tươi và một lớp Islay whisky khói nồng nàn nổi trên bề mặt.",
    img: "",
    ings: ["60ml Blended Scotch", "22ml nước cốt chanh vàng", "22ml syrup mật ong gừng", "7.5ml Islay Single Malt (khói)", "Gừng ngâm đường"],
    steps: [
      "Lắc mạnh Blended Scotch, chanh và syrup mật ong gừng với đá.",
      "Lọc vào ly rocks có đá viên lớn.",
      "Rót nhẹ Islay whisky qua lưng thìa để tạo lớp hương khói nổi trên mặt."
    ]
  },

  // ================= GIN =================
  {
    id: "negroni",
    name: "Negroni",
    type: "cocktail",
    base: "Gin",
    rarity: "Phổ biến",
    glass: "Rocks Glass",
    diff: "Dễ",
    str: 4,
    tags: ["Đắng", "Aperitivo", "Cân bằng"],
    desc: "Gin, Campari và sweet vermouth theo tỷ lệ vàng 1:1:1. Vị đắng thanh tao kích thích vị giác trước bữa tối.",
    img: "images/negroni.webp",
    ings: ["30ml Gin", "30ml Campari", "30ml Sweet Vermouth", "Vỏ cam"],
    steps: [
      "Cho gin, campari và sweet vermouth vào ly có đá.",
      "Khuấy đều tay khoảng 15–20 giây cho lạnh sâu.",
      "Trang trí bằng vỏ cam."
    ]
  },
  {
    id: "gin-tonic",
    name: "Gin & Tonic",
    type: "cocktail",
    base: "Gin",
    rarity: "Phổ biến",
    glass: "Highball / Copa",
    diff: "Dễ",
    str: 2,
    tags: ["Tươi mát", "Nhẹ nhàng", "Thảo mộc"],
    desc: "Thức uống quốc dân của mọi quầy bar: hương quả bách xù của Gin nâng tầm bởi vị đắng nhẹ sủi bọt của tonic.",
    img: "",
    ings: ["50ml London Dry Gin", "120ml Tonic Water lạnh", "1 lát chanh xanh hoặc vỏ bưởi", "Đá viên lớn"],
    steps: [
      "Cho đá đầy ly highball hoặc ly copa đã làm lạnh.",
      "Rót gin vào trước, sau đó rót nhẹ tonic dọc theo thành ly để giữ ga.",
      "Khuấy nhẹ 1 vòng từ dưới lên và trang trí lát chanh."
    ]
  },
  {
    id: "dry-martini",
    name: "Dry Martini",
    type: "cocktail",
    base: "Gin",
    rarity: "Phổ biến",
    glass: "Martini Glass",
    diff: "Trung bình",
    str: 5,
    tags: ["Rất mạnh", "Sắc nét", "Biểu tượng"],
    desc: "Tinh khiết, lạnh buốt và sắc sảo với Gin và Dry Vermouth, điểm xuyết quả ô liu xanh hoặc vỏ chanh vàng.",
    img: "",
    ings: ["60ml London Dry Gin", "10ml Dry Vermouth", "1 quả ô liu xanh hoặc vỏ chanh vàng"],
    steps: [
      "Ướp lạnh ly martini trước khi pha.",
      "Khuấy gin và dry vermouth với đá trong 25–30 giây.",
      "Lọc vào ly lạnh và trang trí ô liu hoặc vắt vỏ chanh."
    ]
  },
  {
    id: "aviation",
    name: "Aviation",
    type: "cocktail",
    base: "Gin",
    rarity: "Kinh điển ít gặp",
    glass: "Coupe Glass",
    diff: "Trung bình",
    str: 3,
    tags: ["Hương hoa", "Màu tím nhạt", "Thanh lịch"],
    desc: "Cocktail cổ điển đầu thế kỷ 20 mang sắc tím bầu trời nhẹ nhàng từ rượu hoa violet, maraschino và chanh tươi.",
    img: "",
    ings: ["45ml Gin", "15ml Maraschino Liqueur", "7.5ml Crème de Violette", "15ml nước cốt chanh vàng"],
    steps: [
      "Cho tất cả nguyên liệu cùng đá vào shaker.",
      "Lắc mạnh 10–12 giây cho lạnh đều.",
      "Lọc kép vào ly coupe đã làm lạnh."
    ]
  },
  {
    id: "last-word",
    name: "Last Word",
    type: "cocktail",
    base: "Gin",
    rarity: "Kinh điển ít gặp",
    glass: "Coupe Glass",
    diff: "Dễ",
    str: 4,
    tags: ["Thảo mộc", "Chua sắc", "Tỷ lệ đều"],
    desc: "Công thức tỷ lệ 1:1:1:1 đầy mê hoặc từ thời Cấm rượu với Gin, Green Chartreuse, Maraschino và chanh xanh.",
    img: "",
    ings: ["22ml Gin", "22ml Green Chartreuse", "22ml Maraschino Liqueur", "22ml nước cốt chanh xanh"],
    steps: [
      "Cho 4 nguyên liệu vào bình lắc cùng nhiều đá.",
      "Lắc mạnh 12 giây cho lạnh sâu.",
      "Lọc kép vào ly coupe lạnh."
    ]
  },

  // ================= RUM =================
  {
    id: "mojito",
    name: "Mojito",
    type: "cocktail",
    base: "Rum",
    rarity: "Phổ biến",
    glass: "Highball / Collins",
    diff: "Dễ",
    str: 2,
    tags: ["Tươi mát", "Bạc hà", "Mùa hè"],
    desc: "Rum trắng, bạc hà tươi, chanh và soda. Tươi sáng, sảng khoái và cực kỳ dễ uống cho những ngày nắng nóng.",
    img: "images/mojito.webp",
    ings: ["60ml White Rum", "30ml nước cốt chanh tươi", "15ml simple syrup", "8–10 lá bạc hà tươi", "Soda lạnh", "Đá viên"],
    steps: [
      "Dằm nhẹ bạc hà với syrup trong ly (tránh dằm quá mạnh làm đắng lá).",
      "Thêm nước cốt chanh và rum.",
      "Cho đá đầy ly, rót soda lên trên.",
      "Khuấy nhẹ từ dưới lên và trang trí ngọn bạc hà."
    ]
  },
  {
    id: "daiquiri",
    name: "Classic Daiquiri",
    type: "cocktail",
    base: "Rum",
    rarity: "Phổ biến",
    glass: "Coupe Glass",
    diff: "Dễ",
    str: 3,
    tags: ["Chua thanh", "Tối giản", "Cuba"],
    desc: "Thước đo tay nghề bartender chỉ với 3 nguyên liệu: Rum trắng, chanh xanh tươi và đường — sắc nét, cân bằng tuyệt đối.",
    img: "",
    ings: ["60ml White Rum", "25ml nước cốt chanh xanh tươi", "15ml simple syrup", "Lát chanh mỏng trang trí"],
    steps: [
      "Cho rum, nước cốt chanh và simple syrup vào shaker đầy đá.",
      "Lắc thật mạnh 10–12 giây.",
      "Lọc kép vào ly coupe đã làm lạnh."
    ]
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    type: "cocktail",
    base: "Rum",
    rarity: "Phổ biến",
    glass: "Hurricane / Poco Grande",
    diff: "Dễ",
    str: 2,
    tags: ["Nhiệt đới", "Béo ngậy", "Dứa dừa"],
    desc: "Hương vị kỳ nghỉ biển vùng Caribbean với rum trắng, nước ép dứa chín và kem dừa béo thơm mát lạnh.",
    img: "",
    ings: ["50ml White Rum", "30ml kem dừa (Coconut Cream)", "90ml nước ép dứa tươi", "15ml nước cốt chanh", "Miếng dứa tươi"],
    steps: [
      "Cho tất cả nguyên liệu cùng đá bào vào máy xay hoặc lắc mạnh với đá viên.",
      "Rót ra ly hurricane và trang trí bằng miếng dứa cùng lá dứa."
    ]
  },
  {
    id: "jungle-bird",
    name: "Jungle Bird",
    type: "cocktail",
    base: "Rum",
    rarity: "Kinh điển ít gặp",
    glass: "Rocks Glass",
    diff: "Trung bình",
    str: 3,
    tags: ["Tiki", "Đắng ngọt", "Dứa"],
    desc: "Món Tiki độc đáo ra đời tại Kuala Lumpur năm 1973, kết hợp Dark Rum, nước ép dứa ngọt dịu và vị đắng bất ngờ của Campari.",
    img: "",
    ings: ["45ml Blackstrap hoặc Dark Rum", "22ml Campari", "45ml nước ép dứa", "15ml nước cốt chanh xanh", "15ml simple syrup"],
    steps: [
      "Cho toàn bộ nguyên liệu vào shaker với đá.",
      "Lắc mạnh đến khi tạo lớp bọt dứa mịn.",
      "Lọc vào ly rocks đầy đá và trang trí lát dứa."
    ]
  },

  // ================= TEQUILA & MEZCAL =================
  {
    id: "margarita",
    name: "Margarita",
    type: "cocktail",
    base: "Tequila",
    rarity: "Phổ biến",
    glass: "Coupe / Rocks",
    diff: "Trung bình",
    str: 3,
    tags: ["Chua", "Muối", "Tiệc"],
    desc: "Tequila, triple sec và chanh tươi kết hợp viền muối mặn nhẹ. Chua thanh, bật vị và rất hợp không khí tiệc tùng.",
    img: "images/margarita.webp",
    ings: ["50ml Tequila Blanco", "25ml Cointreau", "25ml nước cốt chanh tươi", "Muối hạt mịn (viền ly)"],
    steps: [
      "Chà lát chanh lên một nửa vành ly rồi chấm nhẹ vào đĩa muối.",
      "Cho tequila, cointreau, nước cốt chanh và đá vào bình lắc, lắc mạnh 10–12 giây.",
      "Lọc qua lưới vào ly đã chuẩn bị."
    ]
  },
  {
    id: "paloma",
    name: "Paloma",
    type: "cocktail",
    base: "Tequila",
    rarity: "Phổ biến",
    glass: "Highball Glass",
    diff: "Dễ",
    str: 2,
    tags: ["Bưởi hồng", "Sảng khoái", "Mexico"],
    desc: "Thức uống được người Mexico ưa chuộng hơn cả Margarita: Tequila kết hợp nước ép bưởi hồng, chanh và soda.",
    img: "",
    ings: ["50ml Tequila Blanco", "60ml nước ép bưởi hồng tươi", "15ml nước cốt chanh xanh", "10ml agave syrup", "Soda lạnh", "Muối biển"],
    steps: [
      "Viền muối nhẹ miệng ly highball và cho đá đầy ly.",
      "Lắc nhẹ tequila, nước bưởi, chanh và agave syrup với đá.",
      "Rót vào ly và thêm soda đầy lên trên."
    ]
  },
  {
    id: "naked-and-famous",
    name: "Naked & Famous",
    type: "cocktail",
    base: "Tequila",
    rarity: "Hiện đại đặc sắc",
    glass: "Coupe Glass",
    diff: "Dễ",
    str: 4,
    tags: ["Mezcal khói", "Chua đắng", "Tỷ lệ đều"],
    desc: "Sự kết hợp táo bạo tỷ lệ 1:1:1:1 giữa Mezcal khói, Aperol, Yellow Chartreuse và chanh xanh tươi.",
    img: "",
    ings: ["22ml Mezcal", "22ml Aperol", "22ml Yellow Chartreuse", "22ml nước cốt chanh xanh"],
    steps: [
      "Cho cả 4 nguyên liệu vào bình lắc cùng đá viên.",
      "Lắc mạnh 12 giây cho lạnh sâu.",
      "Lọc kép vào ly coupe đã làm lạnh."
    ]
  },

  // ================= VODKA =================
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    type: "cocktail",
    base: "Vodka",
    rarity: "Phổ biến",
    glass: "Martini / Coupe",
    diff: "Trung bình",
    str: 3,
    tags: ["Cà phê", "Đêm", "Năng lượng"],
    desc: "Vodka, coffee liqueur và espresso mới chiết xuất. Lớp crema mịn màng cùng hương cà phê rang đậm đà.",
    img: "images/espresso-martini.webp",
    ings: ["50ml Vodka", "30ml Kahlúa", "30ml Espresso mới pha (để nguội bớt 1–2 phút)"],
    steps: [
      "Cho tất cả nguyên liệu cùng nhiều đá vào shaker, lắc thật mạnh 12–15 giây để tạo bọt.",
      "Lọc kép (double strain) vào ly coupe đã làm lạnh.",
      "Trang trí 3 hạt cà phê trên lớp bọt."
    ]
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    type: "cocktail",
    base: "Vodka",
    rarity: "Phổ biến",
    glass: "Cốc đồng / Highball",
    diff: "Dễ",
    str: 2,
    tags: ["Gừng cay", "Tươi mát", "Dễ uống"],
    desc: "Vodka mát lạnh quyện vị cay nồng sảng khoái của bia gừng (ginger beer) và chanh xanh trong chiếc cốc đồng đặc trưng.",
    img: "",
    ings: ["50ml Vodka", "15ml nước cốt chanh xanh", "120ml Ginger Beer lạnh", "Lát chanh & nhánh bạc hà"],
    steps: [
      "Cho đá đầy cốc đồng hoặc ly highball.",
      "Rót vodka và nước cốt chanh vào, khuấy nhẹ.",
      "Rót ginger beer đầy ly và trang trí lát chanh cùng bạc hà."
    ]
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    type: "cocktail",
    base: "Vodka",
    rarity: "Phổ biến",
    glass: "Martini Glass",
    diff: "Dễ",
    str: 3,
    tags: ["Nam việt quất", "Hồng ruby", "Hiện đại"],
    desc: "Sắc hồng ruby quyến rũ từ nước ép nam việt quất, Cointreau, chanh xanh và vodka — chua ngọt thanh thoát.",
    img: "",
    ings: ["45ml Citrus Vodka (hoặc Vodka thường)", "15ml Cointreau", "30ml nước ép nam việt quất (Cranberry)", "15ml nước cốt chanh xanh"],
    steps: [
      "Cho tất cả nguyên liệu vào shaker với đá.",
      "Lắc mạnh 10–12 giây cho lạnh đều.",
      "Lọc vào ly martini đã ướp lạnh, trang trí vỏ cam."
    ]
  },

  // ================= BRANDY / COGNAC =================
  {
    id: "sidecar",
    name: "Sidecar",
    type: "cocktail",
    base: "Brandy",
    rarity: "Kinh điển ít gặp",
    glass: "Coupe Glass",
    diff: "Trung bình",
    str: 4,
    tags: ["Cognac", "Cam chanh", "Cổ điển Pháp"],
    desc: "Biểu tượng cocktail Pháp từ thập niên 1920: Cognac ấm áp cân bằng cùng Cointreau và chanh vàng, viền đường mịn.",
    img: "",
    ings: ["50ml Cognac", "20ml Cointreau", "20ml nước cốt chanh vàng", "Đường mịn viền nửa vành ly"],
    steps: [
      "Chà chanh lên nửa vành ly coupe và nhúng nhẹ qua đường mịn.",
      "Lắc mạnh Cognac, Cointreau và chanh vàng với đá.",
      "Lọc kép vào ly và trang trí vỏ cam."
    ]
  },
  {
    id: "vieux-carre",
    name: "Vieux Carré",
    type: "cocktail",
    base: "Brandy",
    rarity: "Kinh điển ít gặp",
    glass: "Rocks Glass",
    diff: "Trung bình",
    str: 5,
    tags: ["New Orleans", "Phức hợp", "Rất mạnh"],
    desc: "Kiệt tác của New Orleans kết hợp cả Cognac và Rye Whiskey cùng Sweet Vermouth, Bénédictine và 2 loại bitters.",
    img: "",
    ings: ["30ml Cognac", "30ml Rye Whiskey", "30ml Sweet Vermouth", "7.5ml Bénédictine", "2 dash Peychaud's Bitters", "1 dash Angostura Bitters"],
    steps: [
      "Cho tất cả nguyên liệu vào ly khuấy cùng đá viên.",
      "Khuấy chậm 25 giây cho đến khi sánh lạnh.",
      "Lọc ra ly rocks có viên đá lớn, trang trí vỏ chanh vàng."
    ]
  },

  // ================= MOCKTAIL (KHÔNG CỒN) =================
  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    type: "mocktail",
    base: "Không cồn",
    rarity: "Phổ biến",
    glass: "Highball / Collins",
    diff: "Dễ",
    str: 0,
    tags: ["Tươi mát", "Không cồn", "Bạc hà"],
    desc: "Phiên bản không cồn của Mojito. Giữ trọn vị chua mát của chanh, hương bạc hà xanh và độ sủi bọt của soda.",
    img: "images/virgin-mojito.webp",
    ings: ["30ml nước cốt chanh tươi", "15ml simple syrup", "8–10 lá bạc hà tươi", "Soda lạnh", "Đá viên"],
    steps: [
      "Dằm nhẹ bạc hà với syrup trong ly.",
      "Thêm nước cốt chanh và đá đầy ly.",
      "Rót soda lên trên, khuấy nhẹ và trang trí."
    ]
  },
  {
    id: "shirley-temple",
    name: "Shirley Temple",
    type: "mocktail",
    base: "Không cồn",
    rarity: "Phổ biến",
    glass: "Highball Glass",
    diff: "Dễ",
    str: 0,
    tags: ["Ngọt dịu", "Không cồn", "Lựu đỏ"],
    desc: "Mocktail kinh điển đầy hoài niệm với sắc đỏ chuyển tầng từ syrup lựu (grenadine), ginger ale sủi bọt và anh đào.",
    img: "",
    ings: ["15ml Grenadine (syrup lựu)", "15ml nước cốt chanh tươi", "150ml Ginger Ale (hoặc Sprite)", "1 quả anh đào trang trí"],
    steps: [
      "Cho đá đầy ly highball, rót nước cốt chanh và ginger ale vào.",
      "Rót chậm grenadine để tạo hiệu ứng chuyển màu đỏ đẹp mắt.",
      "Trang trí quả anh đào và lát cam."
    ]
  },
  {
    id: "nogroni-zero",
    name: "Phony Negroni (Mocktail)",
    type: "mocktail",
    base: "Không cồn",
    rarity: "Hiện đại đặc sắc",
    glass: "Rocks Glass",
    diff: "Trung bình",
    str: 0,
    tags: ["Đắng thanh", "Không cồn", "Aperitivo"],
    desc: "Giải pháp không cồn dành cho người mê Negroni: trà đen ủ lạnh, nước ép bưởi đỏ, thảo mộc và bitters không cồn.",
    img: "",
    ings: ["45ml trà đen Earl Grey ủ đậm (để lạnh)", "30ml nước ép bưởi đỏ", "15ml syrup vỏ cam quế", "3 giọt bitters không cồn", "Vỏ cam tươi"],
    steps: [
      "Khuấy đều trà lạnh, nước ép bưởi, syrup và bitters với đá trong 15 giây.",
      "Rót ra ly rocks có đá viên lớn và vắt tinh dầu vỏ cam."
    ]
  }
];
