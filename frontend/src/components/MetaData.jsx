import React from "react";
import Helmet from "react-helmet";
const MetaData = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="Keywords" content="Portfolio --Omar Ghazi" />
      <meta
        name="Description"
        content="I'm Omar Ghazi & this is my Portfolio contain my skills my works experience & my project i Hope you visit it and like it"
      />
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;
