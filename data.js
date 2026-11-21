const DRINKS = [
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    spirit: "Whiskey",
    type: "Cocktail",
    method: "Stir (Khuấy)",
    glass: "Rocks / Old Fashioned",
    ice: "Đá viên lớn (Large Rock)",
    garnish: "Vỏ cam xoắn (Orange Twist)",
    abv: "~32% ABV",
    taste: "Đậm đà, ấm áp, đắng nhẹ thảo mộc và thơm tinh dầu cam.",
    image: "images/old-fashioned.webp",
    story: "Nguyên bản của khái niệm 'cocktail' từ thế kỷ 19: rượu nền mạnh kết hợp đường, nước và rượu đắng (bitters).",
    ingredients: [
      { item: "Bourbon hoặc Rye Whiskey", amount: "60 ml" },
      { item: "Simple Syrup (hoặc 1 viên đường)", amount: "7.5 ml" },
      { item: "Angostura Bitters", amount: "2–3 dashes" },
      { item: "Orange Bitters (tùy chọn)", amount: "1 dash" }
    ],
    steps: [
      "Cho đường/syrup và bitters vào ly khuấy (mixing glass) hoặc trực tiếp vào ly Rocks.",
      "Thêm 60 ml Bourbon/Rye Whiskey và cho đầy đá già.",
      "Khuấy đều theo chiều kim đồng hồ trong 25–30 giây để làm lạnh và đạt độ loãng chuẩn (dilution).",
      "Lọc ra ly Rocks có sẵn 1 viên đá khối lớn, vắt nhẹ vỏ cam lên bề mặt để lấy tinh dầu rồi cài lên miệng ly."
    ],
    tip: "Dùng đá già (khô, trong suốt) để tránh ly cocktail bị nhạt nước quá nhanh khi thưởng thức chậm."
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    spirit: "Whiskey",
    type: "Cocktail",
    method: "Dry Shake & Wet Shake",
    glass: "Rocks Glass",
    ice: "Đá viên (Cubed Ice)",
    garnish: "Vỏ cam & Cherry ngâm rượu",
    abv: "~21% ABV",
    taste: "Cân bằng chuẩn mực giữa vị chua thanh chanh vàng, ngọt dịu và lớp bọt mịn.",
    image: "images/whiskey-sour.svg",
    story: "Đại diện kinh điển của họ Sour, nổi tiếng nhờ kỹ thuật lắc khô (Dry Shake) tạo lớp bọt trắng mượt mà như nhung.",
    ingredients: [
      { item: "Bourbon Whiskey", amount: "60 ml" },
      { item: "Nước cốt chanh vàng tươi", amount: "25 ml" },
      { item: "Simple Syrup (1:1)", amount: "20 ml" },
      { item: "Lòng trắng trứng tươi (hoặc Aquafaba)", amount: "15 ml" },
      { item: "Angostura Bitters", amount: "2 giọt (tạo hình trên bọt)" }
    ],
    steps: [
      "Cho tất cả nguyên liệu (trừ bitters) vào bình lắc (shaker) KHÔNG đá.",
      "Thực hiện Dry Shake (lắc khô) mạnh trong 12–15 giây để đánh bông protein tạo bọt.",
      "Thêm đầy đá viên vào shaker và tiếp tục Wet Shake (lắc ướt) mạnh trong 12 giây.",
      "Lọc kép (double strain) qua rây mịn vào ly Rocks có đá, nhỏ 2 giọt bitters lên lớp bọt và trang trí."
    ],
    tip: "Luôn dùng rây lọc mịn (fine strainer) để giữ lại vụn đá nhỏ, giúp bề mặt lớp bọt trắng phẳng và mịn."
  },
  {
    id: "manhattan",
    name: "Manhattan",
    spirit: "Whiskey",
    type: "Cocktail",
    method: "Stir (Khuấy)",
    glass: "Coupe / Martini",
    ice: "Không đá (Served Up)",
    garnish: "Cherry Maraschino",
    abv: "~30% ABV",
    taste: "Nồng nàn, cay nhẹ vị lúa mạch đen hòa quyện thảo mộc ngọt của Sweet Vermouth.",
    image: "images/manhattan.svg",
    story: "Ra đời tại New York vào thập niên 1870, là chuẩn mực vàng cho các dòng cocktail khuấy (stirred) phục vụ không đá.",
    ingredients: [
      { item: "Rye Whiskey (hoặc Bourbon)", amount: "60 ml" },
      { item: "Sweet Vermouth (Vermouth đỏ)", amount: "30 ml" },
      { item: "Angostura Bitters", amount: "2 dashes" }
    ],
    steps: [
      "Làm lạnh trước ly Coupe trong tủ đông hoặc ngâm nước đá.",
      "Cho Rye Whiskey, Sweet Vermouth và Angostura Bitters vào mixing glass đầy đá.",
      "Khuấy mượt trong 25–30 giây cho đến khi thành bình phủ sương lạnh.",
      "Dùng Julep strainer lọc rượu vào ly Coupe lạnh và thả 1 trái cherry ngâm rượu."
    ],
    tip: "Sweet Vermouth là rượu vang cường hóa nên cần bảo quản trong ngăn mát tủ lạnh sau khi mở nắp để tránh oxy hóa."
  },
  {
    id: "boulevardier",
    name: "Boulevardier",
    spirit: "Whiskey",
    type: "Cocktail",
    method: "Stir (Khuấy)",
    glass: "Rocks Glass",
    ice: "Đá viên lớn (Large Rock)",
    garnish: "Vỏ cam xoắn (Orange Peel)",
    abv: "~28% ABV",
    taste: "Đắng thanh lịch, sâu lắng và ấm áp hơn người anh em Negroni nhờ nền Bourbon.",
    image: "images/boulevardier.svg",
    story: "Phiên bản thay Gin bằng Bourbon của Negroni, gắn liền với giới văn nghệ sĩ Paris những năm 1920.",
    ingredients: [
      { item: "Bourbon Whiskey", amount: "45 ml" },
      { item: "Campari", amount: "30 ml" },
      { item: "Sweet Vermouth", amount: "30 ml" }
    ],
    steps: [
      "Cho Bourbon, Campari và Sweet Vermouth vào ly khuấy đầy đá già.",
      "Khuấy đều tay trong 25 giây để các tầng hương hòa quyện mượt mà.",
      "Rót ra ly Rocks có sẵn viên đá khối lớn.",
      "Xịt tinh dầu vỏ cam lên bề mặt ly và cài vỏ cam lên thành ly."
    ],
    tip: "Tỷ lệ 1.5 : 1 : 1 giúp vị ngọt và vani của Bourbon cân bằng tốt độ đắng đặc trưng của Campari."
  },
  {
    id: "penicillin",
    name: "Penicillin",
    spirit: "Whiskey",
    type: "Cocktail",
    method: "Shake & Float",
    glass: "Rocks Glass",
    ice: "Đá viên lớn (Large Rock)",
    garnish: "Gừng sên đường (Candied Ginger)",
    abv: "~22% ABV",
    taste: "Cay ấm nồng nàn từ gừng tươi, ngọt thanh mật ong và hậu vị khói than bùn đặc trưng.",
    image: "images/penicillin.svg",
    story: "Kiệt tác hiện đại của Sam Ross (New York, 2005), kết hợp tài tình giữa Blended Scotch và Single Malt khói Islay.",
    ingredients: [
      { item: "Blended Scotch Whisky", amount: "60 ml" },
      { item: "Nước cốt chanh vàng tươi", amount: "22.5 ml" },
      { item: "Honey-Ginger Syrup (mật ong gừng)", amount: "22.5 ml" },
      { item: "Islay Single Malt Scotch (vị khói)", amount: "7.5 ml (rót nổi trên mặt)" }
    ],
    steps: [
      "Lắc mạnh Blended Scotch, nước cốt chanh vàng và Honey-Ginger Syrup với đá trong 12 giây.",
      "Lọc kép vào ly Rocks có viên đá lớn.",
      "Dùng thìa bar (barspoon) rót nhẹ 7.5 ml Islay Scotch nổi lên lớp trên cùng (float).",
      "Trang trí bằng một lát gừng sên đường xiên que."
    ],
    tip: "Lớp rượu khói rót nổi giúp người uống cảm nhận mùi khói ngay khi đưa ly lên mũi trước ngụm đầu tiên."
  },
  {
    id: "negroni",
    name: "Negroni",
    spirit: "Gin",
    type: "Cocktail",
    method: "Stir / Build",
    glass: "Rocks Glass",
    ice: "Đá viên lớn (Large Rock)",
    garnish: "Vỏ cam tươi (Orange Peel)",
    abv: "~24% ABV",
    taste: "Đắng quyến rũ, thơm thảo mộc phức hợp và kết thúc khô ráo kích thích vị giác.",
    image: "images/negroni.webp",
    story: "Biểu tượng khai vị (aperitivo) của nước Ý với công thức tỷ lệ vàng 1:1:1 bất biến suốt hơn một thế kỷ.",
    ingredients: [
      { item: "London Dry Gin", amount: "30 ml" },
      { item: "Campari", amount: "30 ml" },
      { item: "Sweet Vermouth", amount: "30 ml" }
    ],
    steps: [
      "Cho trực tiếp Gin, Campari và Sweet Vermouth vào ly Rocks có sẵn 1 viên đá khối lớn.",
      "Dùng barspoon khuấy nhẹ nhàng theo vòng tròn trong 15–20 giây để làm lạnh đồng đều.",
      "Vắt nhẹ miếng vỏ cam tươi hướng vào mặt ly để tinh dầu cam phủ lên rượu rồi thả vào ly."
    ],
    tip: "Chọn London Dry Gin có hương bách xù (juniper) rõ nét để không bị Campari lấn át."
  },
  {
    id: "gin-tonic",
    name: "Gin & Tonic",
    spirit: "Gin",
    type: "Cocktail",
    method: "Build (Rót trực tiếp)",
    glass: "Highball / Copa",
    ice: "Đá viên đầy ly",
    garnish: "Lát chanh xanh (Lime Wheel)",
    abv: "~13% ABV",
    taste: "Sảng khoái, sủi bọt thanh khiết, đắng nhẹ vị ký ninh (quinine) và hương thảo mộc.",
    image: "images/gin-tonic.svg",
    story: "Thức uống giải nhiệt kinh điển nhất thế giới, nơi chất lượng đá và nước Tonic quyết định 70% trải nghiệm.",
    ingredients: [
      { item: "Gin (London Dry hoặc Botanical)", amount: "50 ml" },
      { item: "Nước Tonic ướp lạnh", amount: "120–150 ml" },
      { item: "Chanh xanh tươi", amount: "1 lát" }
    ],
    steps: [
      "Cho đầy đá viên già vào ly Highball đã được làm lạnh.",
      "Rót 50 ml rượu Gin lên trên đá.",
      "Rót từ từ nước Tonic ướp lạnh dọc theo thành ly (hoặc theo thân barspoon) để giữ trọn bọt ga.",
      "Nhấc nhẹ đá một lần duy nhất bằng barspoon và trang trí lát chanh xanh."
    ],
    tip: "Tuyệt đối không khuấy mạnh sau khi rót Tonic vì sẽ làm vỡ cấu trúc bọt khí CO2."
  },
  {
    id: "dry-martini",
    name: "Dry Martini",
    spirit: "Gin",
    type: "Cocktail",
    method: "Stir (Khuấy)",
    glass: "Martini Glass",
    ice: "Không đá (Served Up)",
    garnish: "Trái Olive xanh (hoặc vỏ chanh vàng)",
    abv: "~33% ABV",
    taste: "Sắc sảo, tinh khiết, lạnh buốt và thanh thoát hương thảo mộc khô.",
    image: "images/dry-martini.svg",
    story: "Được mệnh danh là 'Vua của các loại cocktail', đòi hỏi sự chuẩn xác tuyệt đối về nhiệt độ và độ loãng.",
    ingredients: [
      { item: "London Dry Gin", amount: "60 ml" },
      { item: "Dry Vermouth (Vermouth trắng khô)", amount: "10 ml" },
      { item: "Orange Bitters", amount: "1 dash (tùy chọn)" }
    ],
    steps: [
      "Làm lạnh sâu ly Martini trước khi pha.",
      "Cho Gin và Dry Vermouth vào mixing glass đầy đá viên già.",
      "Khuấy liên tục 30 giây để rượu đạt nhiệt độ dưới 0°C mà không làm đục rượu.",
      "Lọc ra ly Martini lạnh và xiên 1–3 trái olive xanh đặt ngang miệng ly."
    ],
    tip: "Muốn làm Dirty Martini, hãy thêm 10 ml nước ngâm olive (olive brine) vào bước khuấy."
  },
  {
    id: "aviation",
    name: "Aviation",
    spirit: "Gin",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Coupe Glass",
    ice: "Không đá (Served Up)",
    garnish: "Cherry Maraschino",
    abv: "~24% ABV",
    taste: "Thanh tao, chua dịu chanh vàng hòa quyện hương hoa violet tím lãng mạn.",
    image: "images/aviation.svg",
    story: "Sáng tạo năm 1916 để tôn vinh kỷ nguyên hàng không, nổi bật với sắc xanh tím nhạt như bầu trời lúc chạng vạng.",
    ingredients: [
      { item: "London Dry Gin", amount: "45 ml" },
      { item: "Maraschino Liqueur", amount: "15 ml" },
      { item: "Crème de Violette", amount: "7.5 ml" },
      { item: "Nước cốt chanh vàng tươi", amount: "15 ml" }
    ],
    steps: [
      "Cho tất cả nguyên liệu vào shaker cùng đá viên già.",
      "Lắc mạnh và dứt khoát trong 12 giây.",
      "Lọc kép qua rây mịn vào ly Coupe đã ướp lạnh.",
      "Thả nhẹ một trái cherry xuống đáy ly."
    ],
    tip: "Chỉ dùng đúng lượng nhỏ Crème de Violette (5–7.5 ml) để tạo màu và hương thoang thoảng, tránh bị mùi xà phòng."
  },
  {
    id: "last-word",
    name: "The Last Word",
    spirit: "Gin",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Coupe Glass",
    ice: "Không đá (Served Up)",
    garnish: "Cherry Maraschino",
    abv: "~26% ABV",
    taste: "Bùng nổ vị thảo mộc xanh, chua sắc sảo và ngọt hậu cực kỳ cân bằng.",
    image: "images/last-word.svg",
    story: "Công thức tỷ lệ bằng nhau (Equal Parts 1:1:1:1) huyền thoại từ Detroit Athletic Club thời kỳ Cấm rượu.",
    ingredients: [
      { item: "London Dry Gin", amount: "22.5 ml" },
      { item: "Green Chartreuse", amount: "22.5 ml" },
      { item: "Maraschino Liqueur", amount: "22.5 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "22.5 ml" }
    ],
    steps: [
      "Đong chính xác 4 thành phần theo tỷ lệ 1:1:1:1 vào bình lắc.",
      "Thêm đá đầy bình và lắc mạnh trong 12–15 giây.",
      "Lọc kép vào ly Coupe ướp lạnh và trang trí bằng cherry."
    ],
    tip: "Đây là công thức nền tảng tuyệt vời để hiểu về cấu trúc Equal-Part Cocktail trong pha chế."
  },
  {
    id: "mojito",
    name: "Mojito",
    spirit: "Rum",
    type: "Cocktail",
    method: "Muddle & Build",
    glass: "Highball / Collins",
    ice: "Đá bào / Đá viên nhỏ",
    garnish: "Ngọn bạc hà tươi & lát chanh",
    abv: "~12% ABV",
    taste: "Mát lạnh tức thì, thơm tinh dầu bạc hà tươi, chua ngọt hài hòa.",
    image: "images/mojito.webp",
    story: "Niềm tự hào của Havana (Cuba), gắn liền với văn hào Ernest Hemingway tại quán La Bodeguita del Medio.",
    ingredients: [
      { item: "White Rum (Rum trắng Cuba)", amount: "50 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "25 ml" },
      { item: "Simple Syrup (hoặc đường mía)", amount: "20 ml" },
      { item: "Lá bạc hà tươi", amount: "8–10 lá" },
      { item: "Nước Soda lạnh", amount: "60 ml (rót đầy)" }
    ],
    steps: [
      "Vỗ nhẹ lá bạc hà trong lòng bàn tay để đánh thức tinh dầu rồi thả vào ly Highball.",
      "Thêm nước cốt chanh và đường/syrup, dùng chày (muddler) ấn nhẹ 2–3 lần (không nghiền nát lá).",
      "Rót 50 ml White Rum, cho đá đầy 3/4 ly và dùng barspoon đảo đều từ dưới lên.",
      "Rót thêm nước Soda lạnh lên trên và cắm một ngọn bạc hà tươi đẹp mắt."
    ],
    tip: "Không nghiền nát gân lá bạc hà vì sẽ giải phóng chất diệp lục gây vị đắng chát."
  },
  {
    id: "daiquiri",
    name: "Classic Daiquiri",
    spirit: "Rum",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Coupe Glass",
    ice: "Không đá (Served Up)",
    garnish: "Lát chanh xanh mỏng",
    abv: "~22% ABV",
    taste: "Sắc nét, tươi sáng, ngọt thanh mía đường và chua giòn chanh xanh.",
    image: "images/daiquiri.svg",
    story: "Bài kiểm tra tay nghề kinh điển của mọi Bartender: chỉ 3 nguyên liệu nhưng phơi bày toàn bộ kỹ thuật lắc.",
    ingredients: [
      { item: "White Rum chất lượng cao", amount: "60 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "25 ml" },
      { item: "Simple Syrup (1:1)", amount: "15 ml" }
    ],
    steps: [
      "Cho White Rum, nước cốt chanh và Simple Syrup vào shaker.",
      "Thêm đầy đá viên già và lắc thật mạnh trong 12 giây.",
      "Lọc kép qua rây mịn vào ly Coupe đã làm lạnh sâu."
    ],
    tip: "Tỷ lệ vàng 2 : 1 : 0.75 (hoặc 60 : 25 : 15 ml) tạo nên chuẩn mực cho mọi dòng Sour không trứng."
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    spirit: "Rum",
    type: "Cocktail",
    method: "Blend / Shake",
    glass: "Hurricane Glass",
    ice: "Đá xay / Đá viên nhỏ",
    garnish: "Miếng dứa tươi, lá dứa & cherry",
    abv: "~14% ABV",
    taste: "Béo ngậy cốt dừa, ngọt thơm dứa chín nhiệt đới và êm dịu vị Rum.",
    image: "images/pina-colada.svg",
    story: "Quốc tửu của Puerto Rico từ năm 1978, mang trọn không khí kỳ nghỉ biển vùng Caribe.",
    ingredients: [
      { item: "White Rum (hoặc Gold Rum)", amount: "50 ml" },
      { item: "Nước ép dứa tươi", amount: "90 ml" },
      { item: "Kem dừa (Cream of Coconut)", amount: "30 ml" },
      { item: "Nước cốt chanh xanh", amount: "10 ml (cân bằng độ béo)" }
    ],
    steps: [
      "Cho tất cả nguyên liệu cùng 1 chén đá nhỏ vào máy xay sinh tố (hoặc lắc mạnh với đá).",
      "Xay ở tốc độ cao trong 15 giây đến khi hỗn hợp sánh mịn như kem.",
      "Rót ra ly Hurricane và trang trí miếng dứa, lá dứa cùng trái cherry đỏ."
    ],
    tip: "Thêm 10 ml nước cốt chanh xanh giúp ly Piña Colada thanh thoát và không bị ngấy."
  },
  {
    id: "jungle-bird",
    name: "Jungle Bird",
    spirit: "Rum",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Rocks Glass",
    ice: "Đá viên",
    garnish: "Lá dứa & miếng dứa tươi",
    abv: "~18% ABV",
    taste: "Độc đáo với sự giao thoa giữa dứa nhiệt đới ngọt ngào và vị đắng sắc sảo của Campari.",
    image: "images/jungle-bird.svg",
    story: "Sáng tạo tại Kuala Lumpur (Malaysia) năm 1973, là một trong số ít cocktail Tiki sử dụng rượu đắng Campari.",
    ingredients: [
      { item: "Dark Rum / Blackstrap Rum", amount: "45 ml" },
      { item: "Campari", amount: "22.5 ml" },
      { item: "Nước ép dứa tươi", amount: "45 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "15 ml" },
      { item: "Simple Syrup", amount: "15 ml" }
    ],
    steps: [
      "Cho toàn bộ nguyên liệu vào shaker với đầy đá viên.",
      "Lắc mạnh trong 12 giây để tạo lớp bọt dứa tự nhiên đẹp mắt.",
      "Lọc ra ly Rocks đầy đá và trang trí bằng lá dứa."
    ],
    tip: "Dark Rum có hương mật mía (molasses) đậm sẽ kết nối Campari và nước dứa tốt nhất."
  },
  {
    id: "margarita",
    name: "Classic Margarita",
    spirit: "Tequila",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Coupe / Margarita",
    ice: "Không đá (hoặc Rocks)",
    garnish: "Viền muối biển & lát chanh xanh",
    abv: "~24% ABV",
    taste: "Sảng khoái, đậm hương cây thùa (agave), chua giòn chanh tươi và vị mặn tinh tế ở vành ly.",
    image: "images/margarita.webp",
    story: "Công thức Daisy kinh điển dùng Tequila, rượu mùi cam Cointreau và nước cốt chanh tươi.",
    ingredients: [
      { item: "Tequila Blanco (100% Agave)", amount: "50 ml" },
      { item: "Cointreau (hoặc Triple Sec)", amount: "25 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "25 ml" },
      { item: "Agave Syrup (tùy chọn)", amount: "5 ml" }
    ],
    steps: [
      "Xát lát chanh quanh nửa vành ngoài miệng ly và lăn nhẹ qua đĩa muối biển hạt mịn.",
      "Cho Tequila, Cointreau và nước cốt chanh vào shaker đầy đá.",
      "Lắc mạnh trong 12 giây cho thật lạnh.",
      "Lọc kép vào ly đã viền muối (tránh làm ướt phần muối) và cài lát chanh."
    ],
    tip: "Chỉ viền muối nửa miệng ly để người uống có thể chủ động chọn ngụm có muối hoặc không muối."
  },
  {
    id: "paloma",
    name: "Paloma",
    spirit: "Tequila",
    type: "Cocktail",
    method: "Build (Rót trực tiếp)",
    glass: "Highball Glass",
    ice: "Đá viên",
    garnish: "Miếng bưởi hồng & viền muối",
    abv: "~13% ABV",
    taste: "Chua ngọt thanh mát vị bưởi hồng, sủi bọt nhẹ và mặn mà hậu vị.",
    image: "images/paloma.svg",
    story: "Thức uống được người dân Mexico yêu thích còn hơn cả Margarita nhờ sự nhẹ nhàng và dễ uống.",
    ingredients: [
      { item: "Tequila Blanco / Reposado", amount: "50 ml" },
      { item: "Nước ép bưởi hồng tươi", amount: "60 ml" },
      { item: "Nước cốt chanh xanh", amount: "15 ml" },
      { item: "Agave Syrup", amount: "10 ml" },
      { item: "Nước Soda lạnh", amount: "60 ml" }
    ],
    steps: [
      "Viền muối một nửa miệng ly Highball và cho đầy đá viên.",
      "Rót Tequila, nước ép bưởi hồng, nước chanh và Agave Syrup vào ly, khuấy nhẹ.",
      "Rót đầy nước Soda lạnh lên trên và trang trí một miếng bưởi hồng tươi."
    ],
    tip: "Thêm một nhúm muối biển nhỏ trực tiếp vào ly giúp làm bật vị ngọt tự nhiên của bưởi hồng."
  },
  {
    id: "naked-and-famous",
    name: "Naked & Famous",
    spirit: "Tequila",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Coupe Glass",
    ice: "Không đá (Served Up)",
    garnish: "Lát chanh xanh",
    abv: "~25% ABV",
    taste: "Khói nhẹ quyến rũ từ Mezcal, ngọt thảo mộc Yellow Chartreuse và đắng cam Aperol.",
    image: "images/naked-and-famous.svg",
    story: "Sáng tạo của Joaquín Simó (New York, 2011), được ví như đứa con lai hoàn hảo giữa Paper Plane và Last Word.",
    ingredients: [
      { item: "Mezcal Espadín", amount: "22.5 ml" },
      { item: "Yellow Chartreuse", amount: "22.5 ml" },
      { item: "Aperol", amount: "22.5 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "22.5 ml" }
    ],
    steps: [
      "Đong 4 thành phần theo tỷ lệ bằng nhau 22.5 ml vào shaker.",
      "Lắc mạnh với đá già trong 12 giây.",
      "Lọc kép vào ly Coupe ướp lạnh và cài lát chanh xanh."
    ],
    tip: "Màu cam san hô rực rỡ tự nhiên của ly cocktail này hoàn toàn đến từ Aperol và Yellow Chartreuse."
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    spirit: "Vodka",
    type: "Cocktail",
    method: "Hard Shake",
    glass: "Coupe / Martini",
    ice: "Không đá (Served Up)",
    garnish: "3 hạt cà phê rang nguyên hạt",
    abv: "~20% ABV",
    taste: "Đậm đà hương cà phê rang mới, ngọt dịu rượu mùi cà phê và lớp crema mịn màng.",
    image: "images/espresso-martini.webp",
    story: "Ra đời tại London cuối thập niên 1980 bởi Dick Bradsell với lời yêu cầu nổi tiếng: 'Hãy pha cho tôi thứ gì giúp tỉnh táo rồi say ngất'.",
    ingredients: [
      { item: "Vodka", amount: "45 ml" },
      { item: "Rượu mùi cà phê (Kahlúa / Mr Black)", amount: "30 ml" },
      { item: "Cà phê Espresso mới chiết xuất (để nguội bớt)", amount: "30 ml" },
      { item: "Simple Syrup", amount: "7.5 ml" }
    ],
    steps: [
      "Chiết xuất 1 shot Espresso nóng và để nguội khoảng 1 phút (không rót cà phê đang sôi trực tiếp lên đá).",
      "Cho Vodka, rượu mùi cà phê, Espresso và syrup vào shaker đầy đá già.",
      "Lắc thật mạnh và dứt khoát (Hard Shake) trong 15 giây để đánh bông lớp crema dày.",
      "Lọc kép vào ly Coupe lạnh và đặt 3 hạt cà phê lên giữa lớp bọt (tượng trưng cho sức khỏe, tài lộc và hạnh phúc)."
    ],
    tip: "Cà phê Espresso tươi chứa dầu tự nhiên (crema) là chìa khóa tạo nên lớp bọt dày 1 cm trên mặt ly."
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    spirit: "Vodka",
    type: "Cocktail",
    method: "Build (Rót trực tiếp)",
    glass: "Cốc đồng (Copper Mug)",
    ice: "Đá viên / Đá bào",
    garnish: "Lát chanh xanh & ngọn bạc hà",
    abv: "~11% ABV",
    taste: "Cay nồng sảng khoái từ bia gừng (ginger beer), chua thanh chanh tươi và cực kỳ mát lạnh.",
    image: "images/moscow-mule.svg",
    story: "Thức uống đưa Vodka trở nên phổ biến tại Mỹ từ năm 1941, gắn liền với chiếc cốc đồng truyền nhiệt lạnh tức thì.",
    ingredients: [
      { item: "Vodka", amount: "50 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "15 ml" },
      { item: "Ginger Beer (Bia gừng ướp lạnh)", amount: "120 ml" }
    ],
    steps: [
      "Cho đầy đá vào cốc đồng đã ướp lạnh.",
      "Rót 50 ml Vodka và 15 ml nước cốt chanh xanh lên đá.",
      "Rót đầy Ginger Beer lạnh lên trên, khuấy nhẹ 1 vòng và trang trí lát chanh cùng bạc hà."
    ],
    tip: "Chiếc cốc đồng giúp giữ nhiệt độ lạnh lâu hơn và làm tăng cảm giác sảng khoái khi chạm môi."
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    spirit: "Vodka",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Martini Glass",
    ice: "Không đá (Served Up)",
    garnish: "Vỏ cam đốt tinh dầu (Flamed Orange)",
    abv: "~22% ABV",
    taste: "Chua ngọt thanh lịch từ nam việt quất (cranberry), hương cam chanh tươi sáng.",
    image: "images/cosmopolitan.svg",
    story: "Biểu tượng văn hóa đại chúng New York thập niên 1990, mang sắc hồng ruby tinh tế.",
    ingredients: [
      { item: "Citron Vodka (hoặc Vodka thường)", amount: "45 ml" },
      { item: "Cointreau", amount: "15 ml" },
      { item: "Nước ép nam việt quất (Cranberry)", amount: "30 ml" },
      { item: "Nước cốt chanh xanh tươi", amount: "15 ml" }
    ],
    steps: [
      "Cho toàn bộ nguyên liệu vào shaker đầy đá viên già.",
      "Lắc mạnh trong 12 giây cho ly đạt độ lạnh sâu.",
      "Lọc kép vào ly Martini lạnh và vắt tinh dầu vỏ cam lên bề mặt."
    ],
    tip: "Dùng nước ép Cranberry không quá ngọt để giữ màu hồng trong trẻo thay vì đỏ sẫm."
  },
  {
    id: "sidecar",
    name: "Sidecar",
    spirit: "Brandy",
    type: "Cocktail",
    method: "Shake (Lắc)",
    glass: "Coupe Glass",
    ice: "Không đá (Served Up)",
    garnish: "Viền đường nửa miệng ly & vỏ cam",
    abv: "~26% ABV",
    taste: "Sang trọng, nồng ấm hương gỗ sồi của Cognac kết hợp vị cam chanh cân bằng.",
    image: "images/sidecar.svg",
    story: "Kiệt tác cổ điển từ Paris những năm 1920, đại diện tiêu biểu nhất của nhóm cocktail nền Brandy/Cognac.",
    ingredients: [
      { item: "Cognac (VSOP)", amount: "50 ml" },
      { item: "Cointreau", amount: "25 ml" },
      { item: "Nước cốt chanh vàng tươi", amount: "20 ml" }
    ],
    steps: [
      "Viền đường mịn lên nửa vành ngoài ly Coupe đã ướp lạnh.",
      "Cho Cognac, Cointreau và nước cốt chanh vàng vào shaker với đá.",
      "Lắc mạnh trong 12 giây và lọc kép vào ly Coupe."
    ],
    tip: "Nếu dùng Cognac có vị khô, có thể thêm 5 ml Simple Syrup để làm tròn vị chua của chanh vàng."
  },
  {
    id: "vieux-carre",
    name: "Vieux Carré",
    spirit: "Brandy",
    type: "Cocktail",
    method: "Stir (Khuấy)",
    glass: "Rocks Glass",
    ice: "Đá viên lớn",
    garnish: "Vỏ chanh vàng xoắn",
    abv: "~31% ABV",
    taste: "Phức hợp, sâu lắng nhiều tầng hương từ Cognac, Rye Whiskey, thảo mộc Bénédictine và bitters.",
    image: "images/vieux-carre.svg",
    story: "Sáng tạo tại khách sạn Monteleone (New Orleans, 1938), tôn vinh sự giao thoa văn hóa Pháp – Mỹ.",
    ingredients: [
      { item: "Rye Whiskey", amount: "30 ml" },
      { item: "Cognac", amount: "30 ml" },
      { item: "Sweet Vermouth", amount: "30 ml" },
      { item: "Bénédictine DOM", amount: "7.5 ml" },
      { item: "Peychaud's & Angostura Bitters", amount: "Mỗi loại 2 dashes" }
    ],
    steps: [
      "Cho tất cả nguyên liệu vào mixing glass đầy đá viên già.",
      "Khuấy đều tay 25–30 giây.",
      "Lọc ra ly Rocks có đá lớn và xịt tinh dầu vỏ chanh vàng lên trên."
    ],
    tip: "Bénédictine mang lại hậu vị mật ong thảo mộc đặc trưng không thể thay thế trong công thức này."
  },
  {
    id: "virgin-mojito",
    name: "Virgin Mojito (No-jito)",
    spirit: "Mocktail",
    type: "Mocktail (0% Cồn)",
    method: "Muddle & Build",
    glass: "Highball Glass",
    ice: "Đá viên nhỏ / Đá bào",
    garnish: "Ngọn bạc hà & lát chanh xanh",
    abv: "0.0% ABV",
    taste: "Thanh mát, bùng nổ hương bạc hà và chanh tươi, sảng khoái không cồn.",
    image: "images/virgin-mojito.webp",
    story: "Phiên bản không cồn kinh điển phù hợp cho mọi bữa tiệc ban ngày hoặc người không dùng thức uống có cồn.",
    ingredients: [
      { item: "Nước cốt chanh xanh tươi", amount: "25 ml" },
      { item: "Simple Syrup (hoặc syrup đường mía)", amount: "20 ml" },
      { item: "Lá bạc hà tươi", amount: "10–12 lá" },
      { item: "Nước Soda lạnh (hoặc Ginger Ale)", amount: "120 ml" }
    ],
    steps: [
      "Vỗ nhẹ lá bạc hà cho dậy hương rồi cho vào ly Highball.",
      "Thêm nước cốt chanh và Simple Syrup, dầm nhẹ 2–3 lần.",
      "Cho đầy đá vào ly, đảo đều hỗn hợp nước cốt dưới đáy lên.",
      "Rót đầy Soda lạnh và trang trí bằng ngọn bạc hà tươi cùng lát chanh."
    ],
    tip: "Thay một nửa lượng Soda bằng nước ép táo xanh sẽ tạo ra biến tấu Apple No-jito rất cuốn hút."
  },
  {
    id: "shirley-temple",
    name: "Shirley Temple",
    spirit: "Mocktail",
    type: "Mocktail (0% Cồn)",
    method: "Build (Rót trực tiếp)",
    glass: "Highball Glass",
    ice: "Đá viên",
    garnish: "Lát cam & Cherry đỏ",
    abv: "0.0% ABV",
    taste: "Ngọt dịu vị lựu đỏ (grenadine), cay nhẹ gừng tươi và tươi mát hương cam chanh.",
    image: "images/shirley-temple.svg",
    story: "Ra đời tại Hollywood thập niên 1930 dành tặng ngôi sao nhí Shirley Temple, là biểu tượng của dòng Mocktail cổ điển.",
    ingredients: [
      { item: "Ginger Ale ướp lạnh", amount: "150 ml" },
      { item: "Grenadine Syrup (syrup lựu đỏ)", amount: "15 ml" },
      { item: "Nước cốt chanh tươi", amount: "10 ml" }
    ],
    steps: [
      "Cho đầy đá viên vào ly Highball.",
      "Rót nước cốt chanh tươi và Ginger Ale ướp lạnh vào ly.",
      "Rót từ từ 15 ml Grenadine Syrup để tạo hiệu ứng chuyển màu đỏ hồng đẹp mắt từ đáy ly.",
      "Trang trí lát cam tươi và cherry đỏ."
    ],
    tip: "Dùng Grenadine làm từ nước ép lựu thật sẽ cho màu đỏ ruby tự nhiên và vị chua ngọt thanh thay vì ngọt gắt."
  },
  {
    id: "nogroni-zero",
    name: "Nogroni (Zero-Proof Negroni)",
    spirit: "Mocktail",
    type: "Mocktail (0% Cồn)",
    method: "Stir (Khuấy)",
    glass: "Rocks Glass",
    ice: "Đá viên lớn",
    garnish: "Vỏ cam tươi xoắn",
    abv: "0.0% ABV",
    taste: "Đắng nhẹ thảo mộc, thơm vỏ cam và gia vị ấm áp chuẩn phong cách aperitivo Ý nhưng 0% cồn.",
    image: "images/nogroni-zero.svg",
    story: "Giải pháp hoàn hảo cho người yêu hương vị phức hợp của Negroni nhưng muốn giữ sự tỉnh táo tuyệt đối.",
    ingredients: [
      { item: "Non-Alcoholic Botanical Spirit (hoặc trà thảo mộc đậm)", amount: "30 ml" },
      { item: "Non-Alcoholic Italian Bitter Aperitif", amount: "30 ml" },
      { item: "Nước ép nho đỏ không đường + 1 chút giấm táo", amount: "30 ml" }
    ],
    steps: [
      "Cho tất cả nguyên liệu vào mixing glass đầy đá già.",
      "Khuấy đều trong 20 giây để làm lạnh sâu.",
      "Lọc ra ly Rocks có viên đá lớn và xịt tinh dầu vỏ cam lên mặt ly."
    ],
    tip: "Nếu tự pha tại nhà không dùng rượu không cồn đóng chai, hãy ủ trà Hibiscus đậm đặc với vỏ cam khô, quế và thảo quả."
  }
];
