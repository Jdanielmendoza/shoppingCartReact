import "./Card.css";
import { IconCartPlus } from "../../assets/Icons";

const defaultProduct = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: ["beauty", "mascara"],
  brand: "Essence",
  sku: "RCH45Q1A",
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01,
  },
  warrantyInformation: "1 month warranty",
  shippingInformation: "Ships in 1 month",
  availabilityStatus: "Low Stock",
  reviews: [
    {
      rating: 2,
      comment: "Very unhappy with my purchase!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "John Doe",
      reviewerEmail: "john.doe@x.dummyjson.com",
    },
    {
      rating: 2,
      comment: "Not as described!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "Nolan Gonzalez",
      reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Very satisfied!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "Scarlett Wright",
      reviewerEmail: "scarlett.wright@x.dummyjson.com",
    },
  ],
  returnPolicy: "30 days return policy",
  minimumOrderQuantity: 24,
  meta: {
    createdAt: "2024-05-23T08:56:21.618Z",
    updatedAt: "2024-05-23T08:56:21.618Z",
    barcode: "9164035109868",
    qrCode: "https://assets.dummyjson.com/public/qr-code.png",
  },
  images: [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
};
const Card = ({ product = defaultProduct }) => {
  return (
    <div className="w-full h-full max-w-xs p-2 flex flex-col justify-between gap-5 bg-slate-50">
      <div className="flex flex-col" >
        <div>
          <img
            className="img-product w-full"
            src={product?.thumbnail}
            alt={product?.title}
          />
        </div>
        <section className="flex justify-between gap-3 ">
          <h3 className="titleCard">
            <strong className="text-base" >{product?.title}</strong>
          </h3>
          <p className="font-extralight text-xl " >${product?.price} </p>
        </section>
      </div>
      <footer>
        <button className="w-full p-2 bg-slate-900 rounded-2xl flex justify-center hover:bg-slate-700 active:bg-slate-900 ">
          {" "}
          <IconCartPlus />{" "}
        </button>
      </footer>
    </div>
  );
};

export default Card;
