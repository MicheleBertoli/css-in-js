import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const absoluteUrl = path => `https://michelebertoli.github.io/css-in-js${path}`;
const seoImageURL = path => `https://michelebertoli.github.io${path}`;

const getMetaTags = ({ title, description, url, twitter, image }) => {
  const metaTags = [
    { itemprop: "name", content: title },
    { itemprop: "description", content: description },
    { name: "description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: twitter },
    { name: "og:title", content: title },
    { name: "og:type", content: "website" },
    { name: "og:url", content: url },
    { name: "og:description", content: description },
    { name: "og:site_name", content: "CSS-in-JS" },
    { name: "og:locale", content: "en_EN" }
  ];

  if (image) {
    metaTags.push({ itemprop: "image", content: seoImageURL(image) });
    metaTags.push({ name: "twitter:image:src", content: seoImageURL(image) });
    metaTags.push({ name: "og:image", content: seoImageURL(image) });
    metaTags.push({ name: "twitter:card", content: "summary_large_image" });
  } else {
    metaTags.push({ name: "twitter:card", content: "summary" });
  }

  return metaTags;
};

const getHtmlAttributes = () => {
  let result = {
    lang: "en"
  };
  return result;
};

const Seo = ({ title, description, path, twitter, image }) => (
  <Helmet
    htmlAttributes={getHtmlAttributes()}
    title={title}
    link={[{ rel: "canonical", href: absoluteUrl(path) }]}
    meta={getMetaTags({
      title,
      description,
      url: absoluteUrl(path),
      twitter,
      image
    })}
  />
);

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  twitter: PropTypes.string,
  image: PropTypes.string
};

export default Seo;
