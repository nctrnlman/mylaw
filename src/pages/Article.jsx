// import React from 'react';
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Image1 from "../assets/articles-img/article-1.jpeg";
import Image2 from "../assets/articles-img/article-2.jpeg";
import Image3 from "../assets/articles-img/article-3.jpeg";

const newsArticles = [
  {
    id: 1,
    image: Image1,
    title: "New Indonesian Law Affects Tax Regulations",
    date: "September 18, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 2,
    image: Image2,
    title: "Changes in Environmental Regulations in Indonesia",
    date: "September 17, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 3,
    image: Image3,
    title: "New Data Privacy Regulations in Indonesia",
    date: "September 16, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 4,
    image: Image2,
    title: "Indonesian Government Announces Trade Policy Changes",
    date: "September 15, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 5,
    image: Image1,
    title: "Legal Implications of Technology Advancements in Indonesia",
    date: "September 14, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 6,
    image: Image2,
    title: "New Intellectual Property Laws in Indonesia",
    date: "September 13, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 7,
    image: Image1,
    title: "Recent Environmental Lawsuits in Indonesia",
    date: "September 12, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 8,
    image: Image2,
    title: "Challenges in Contract Law for Indonesian Businesses",
    date: "September 11, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 9,
    image: Image1,
    title: "Impact of Labor Law Reforms in Indonesia",
    date: "September 10, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 10,
    image: Image2,
    title: "New Regulations for Foreign Investments in Indonesia",
    date: "September 9, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
];
function Article() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6">
        {newsArticles.map((article) => (
          <div key={article.id} className="mb-8">
            <div className="flex flex-wrap justify-center items-center">
              {/* Left Column - Image */}
              <div className="w-full md:w-1/5 p-2 ">
                <img
                  src={article.image}
                  alt="Article Image"
                  className="border border-lightBlue-200 max-w-full h-auto mx-auto transition-transform hover:scale-105"
                  style={{ maxWidth: "100%" }}
                />
              </div>

              {/* Right Column - Article Content */}
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold text-blue mb-2">
                  {article.title}
                </h1>
                <p className="text-blue mb-2">{article.date}</p>
                <div className="mt-2 text-justify">
                  <p>{article.content}</p>
                </div>
                <a
                  href={`/news-article/${article.id}`} // Use the appropriate route
                  className="btn btn-primary mt-3"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Article;
