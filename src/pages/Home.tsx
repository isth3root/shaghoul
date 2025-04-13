import React from "react";
import { Carousel, Divider, Collapse } from "antd";

import slide1 from "../assets/images/1.jpeg";
import slide2 from "../assets/images/2.jpeg";
import slide3 from "../assets/images/3.jpeg";
import slide4 from "../assets/images/4.jpeg";
import slide5 from "../assets/images/5.jpeg";
import slide6 from "../assets/images/6.jpeg";
import slide7 from "../assets/images/7.jpeg";
import slide8 from "../assets/images/8.jpeg";
import slide9 from "../assets/images/9.jpeg";
import slide10 from "../assets/images/10.jpeg";

const { Panel } = Collapse;

const Home: React.FC = () => {
  const carouselImages = [slide1, slide2, slide3];

  const products = [
    { id: 1, name: "Product 1", image: slide1, price: 35 },
    { id: 2, name: "Product 2", image: slide2, price: 55 },
    { id: 3, name: "Product 3", image: slide3, price: 15 },
    { id: 4, name: "Product 4", image: slide4, price: 23 },
    { id: 5, name: "Product 5", image: slide5, price: 14 },
    { id: 6, name: "Product 6", image: slide6, price: 67 },
    { id: 7, name: "Product 7", image: slide7, price: 34 },
    { id: 8, name: "Product 8", image: slide8, price: 56 },
    { id: 9, name: "Product 9", image: slide9, price: 36 },
    { id: 10, name: "Product 10", image: slide10, price: 19 },
  ];

  const reviews = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    text: `Great product! Really satisfied with my purchase of Product ${
      i + 1
    }.`,
    author: `Customer ${i + 1}`,
  }));

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    key: `${i + 1}`,
    question: `Question ${i + 1}?`,
    answer: `This is the answer to question ${
      i + 1
    }. Lorem ipsum dolor sit amet.`,
  }));

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 mb-8">
        <Carousel
          arrows
          autoplay
          dots={false}
          className="w-full md:w-3/4 mx-auto"
        >
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-48 md:h-96 object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-2">Welcome to Shaghoul</h2>
          <p className="text-gray-700">
            Discover our amazing products and services. We bring quality and
            innovation to your doorstep.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <img src={slide4} alt="Feature" className="w-full h-auto" />
        </div>
      </div>

      <Divider className="text-lg font-bold">What We Create</Divider>
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border flex flex-col border-gray-200 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full hover:scale-105 transition h-32 object-cover mb-2"
              />
              <p className="text-center">{product.name}</p>
              <p className="text-center font-bold">{product.price} $</p>
            </div>
          ))}
        </div>
      </div>

      <Divider className="text-lg font-bold">Customer Reviews</Divider>
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-md p-4">
              <p className="text-gray-700 mb-2">"{review.text}"</p>
              <p className="text-sm text-gray-500">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider className="text-lg font-bold">Frequently Asked</Divider>
      <div className="container mx-auto px-4">
        <Collapse accordion>
          {faqs.map((faq) => (
            <Panel header={faq.question} key={faq.key}>
              <p>{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Home;
