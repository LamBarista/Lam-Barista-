const recipes = [
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    type: "cocktail",
    base: "Whiskey",
    glass: "Rocks Glass",
    diff: "Dễ",
    str: 5,
    tags: ["Cổ điển", "Mạnh", "Vani"],
    desc: "Bourbon hoặc Rye hòa quyện cùng đường, bitters và tinh dầu vỏ cam. Đậm đà, sâu lắng, chuẩn mực của quầy bar cổ điển.",
    img: "images/old-fashioned.webp",
    ings: [
      "60ml Bourbon hoặc Rye",
      "1 viên đường / 5ml simple syrup",
      "2 dash Angostura Bitters",
      "Vỏ cam tươi",
      "Đá viên lớn"
    ],
    steps: [
      "Cho đường và bitters vào ly, thêm vài giọt nước rồi khuấy tan.",
      "Thêm whiskey và một viên đá lớn trong.",
      "Khuấy chậm 20–30 giây để làm lạnh và mở hương.",
      "Vắt vỏ cam lên bề mặt để tỏa tinh dầu rồi thả vào ly."
    ]
  },
  {
    id: "mojito",
    name: "Mojito",
    type: "cocktail",
    base: "Rum",
    glass: "Highball / Collins",
    diff: "Dễ",
    str: 2,
    tags: ["Tươi mát", "Bạc hà", "Mùa hè"],
    desc: "Rum trắng, bạc hà tươi, chanh và soda. Tươi sáng, sảng khoái và cực kỳ dễ uống cho những ngày nắng nóng.",
    img: "images/mojito.webp",
    ings: [
      "60ml White Rum",
      "30ml nước cốt chanh tươi",
      "15ml simple syrup",
      "8–10 lá bạc hà tươi",
      "Soda lạnh",
      "Đá viên"
    ],
    steps: [
      "Dằm nhẹ bạc hà với syrup trong ly (tránh dằm quá mạnh làm đắng lá).",
      "Thêm nước cốt chanh và rum.",
      "Cho đá đầy ly, rót soda lên trên.",
      "Khuấy nhẹ từ dưới lên và trang trí ngọn bạc hà."
    ]
  },
  {
    id: "negroni",
    name: "Negroni",
    type: "cocktail",
    base: "Gin",
    glass: "Rocks Glass",
    diff: "Dễ",
    str: 4,
    tags: ["Đắng", "Aperitivo", "Cân bằng"],
    desc: "Gin, Campari và sweet vermouth theo tỷ lệ vàng 1:1:1. Vị đắng thanh tao kích thích vị giác trước bữa tối.",
    img: "images/negroni.webp",
    ings: [
      "30ml Gin",
      "30ml Campari",
      "30ml Sweet Vermouth",
      "Vỏ cam"
    ],
    steps: [
      "Cho gin, campari và sweet vermouth vào ly có đá.",
      "Khuấy đều tay khoảng 15–20 giây cho lạnh sâu.",
      "Trang trí bằng vỏ cam."
    ]
  },
  {
    id: "margarita",
    name: "Margarita",
    type: "cocktail",
    base: "Tequila",
    glass: "Coupe / Rocks",
    diff: "Trung bình",
    str: 3,
    tags: ["Chua", "Muối", "Tiệc"],
    desc: "Tequila, triple sec và chanh tươi kết hợp viền muối mặn nhẹ. Chua thanh, bật vị và rất hợp không khí tiệc tùng.",
    img: "images/margarita.webp",
    ings: [
      "50ml Tequila Blanco",
      "25ml Cointreau",
      "25ml nước cốt chanh tươi",
      "Muối hạt mịn (viền ly)"
    ],
    steps: [
      "Chà lát chanh lên một nửa vành ly rồi chấm nhẹ vào đĩa muối.",
      "Cho tequila, cointreau, nước cốt chanh và đá vào bình lắc, lắc mạnh 10–12 giây.",
      "Lọc qua lưới vào ly đã chuẩn bị."
    ]
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    type: "cocktail",
    base: "Vodka",
    glass: "Martini / Coupe",
    diff: "Trung bình",
    str: 3,
    tags: ["Cà phê", "Đêm", "Năng lượng"],
    desc: "Vodka, coffee liqueur và espresso mới chiết xuất. Lớp crema mịn màng cùng hương cà phê rang đậm đà.",
    img: "images/espresso-martini.webp",
    ings: [
      "50ml Vodka",
      "30ml Kahlúa",
      "30ml Espresso mới pha (để nguội bớt 1–2 phút)"
    ],
    steps: [
      "Cho tất cả nguyên liệu cùng nhiều đá vào shaker, lắc thật mạnh 12–15 giây để tạo bọt.",
      "Lọc kép (double strain) vào ly coupe đã làm lạnh.",
      "Trang trí 3 hạt cà phê trên lớp bọt."
    ]
  },
  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    type: "mocktail",
    base: "Không cồn",
    glass: "Highball / Collins",
    diff: "Dễ",
    str: 0,
    tags: ["Tươi mát", "Không cồn", "Bạc hà"],
    desc: "Phiên bản không cồn của Mojito. Giữ trọn vị chua mát của chanh, hương bạc hà xanh và độ sủi bọt của soda.",
    img: "images/virgin-mojito.webp",
    ings: [
      "30ml nước cốt chanh tươi",
      "15ml simple syrup",
      "8–10 lá bạc hà tươi",
      "Soda lạnh",
      "Đá viên"
    ],
    steps: [
      "Dằm nhẹ bạc hà với syrup trong ly.",
      "Thêm nước cốt chanh và đá đầy ly.",
      "Rót soda lên trên, khuấy nhẹ và trang trí."
    ]
  }
];
