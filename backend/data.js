import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Dat",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Nam",
      email: "user@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "1",
      price: 100,
      img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
      rating: 4,
      numReviews: 300,
      countInstock: 100,
      title: "SUMMER SALE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 2,
      price: 50,
      img: "https://salt.tikicdn.com/cache/400x400/ts/product/70/11/8c/e4ef5e543dd0ef5ad42f203a03eeefdf.jpg.webp",
      rating: 4.5,
      numReviews: 400,
      countInstock: 100,
      title: "AUTUMN COLLECTION",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 3,
      price: 200,
      img: "https://salt.tikicdn.com/cache/400x400/ts/product/e5/3e/08/58819ea7d03d498089bb8f0d79ad41fb.jpg.webp",
      rating: 4.7,
      numReviews: 600,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 4,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      price: 100,
      img: "https://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-mau-that-800x800.jpg",
      rating: 4.3,
      numReviews: 300,
      countInstock: 100,
      title: "SHIRT STYLE!",
    },
    {
      id: 5,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      price: 300,
      img: " https://salt.tikicdn.com/cache/w1200/ts/product/59/7d/ed/7224e9212520d69985ee7ab98c522387.jpg",
      rating: 4.5,
      numReviews: 200,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 6,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      price: 500,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      rating: 5,
      numReviews: 100,
      countInstock: 100,
      title: "LIGHT JACKETS",
    },
    {
      id: 7,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      price: 200,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      rating: 4,
      numReviews: 150,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 8,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      price: 150,
      img: "https://mcdn2-coolmate.cdn.vccloud.vn/uploads/December2021/pros123.jpeg",
      rating: 4.6,
      numReviews: 400,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 9,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      title: "LOUNGEWEAR LOVE",
      price: 90,
      img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
      rating: 4.7,
      numReviews: 100,
      countInstock: 100,
    },
    {
      id: 10,
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      title: "LOUNGEWEAR LOVE",
      price: 120,
      img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
      rating: 5,
      numReviews: 300,
      countInstock: 100,
    },
    {
      id: 11,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
      price: 80,
      img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
      rating: 4.3,
      numReviews: 200,
      countInstock: 100,
    },
    {
      id: 12,
      price: 108,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
      rating: 4,
      numReviews: 1000,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 13,
      price: 108,
      img: "https://salt.tikicdn.com/cache/525x525/ts/product/f6/1e/3a/8b328a72d2a9986caa636dc6066c5310.jpg",
      rating: 5,
      numReviews: 300,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 14,
      price: 108,
      img: "https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k-800x800.jpg",
      rating: 4.6,
      numReviews: 100,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 15,
      price: 108,
      img: "https://hidanz.com/wp-content/uploads/2020/10/ao-thun-nam-co-tron2.jpg",
      rating: 4.7,
      numReviews: 100,
      countInstock: 200,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
    {
      id: 16,
      price: 180,
      img: "https://cf.shopee.vn/file/01fe62e8004ba1472183bbc72398124e",
      rating: 4.8,
      numReviews: 150,
      countInstock: 100,
      title: "LOUNGEWEAR LOVE",
      desc: "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
    },
  ],
};
export default data;
