import React from "react";

function Pills(props) {
  // console.log("name", props);

  // const backgroundColor = (() => {
  //   switch (props.name) {
  //     case "html":
  //       return "#e34c26";
  //     case "css":
  //       return "#264de4";
  //     case "css":
  //       return "#e42ca4";
  //     default:
  //       return "#333";
  //   }
  // })();

  function getLogoColor(name) {
    const logoColors = {
      html: "#e34c26",
      css: "#264de4",
      javascript: "#f0db4f",
      react: "#61dafb",
      vue: "#42b883",
      angular: "#dd0031",
      node: "#8cc84b",
      sass: "#c69",
      less: "#1d365d",
      typescript: "#007acc",
      php: "#8892be",
      python: "#3572A5",
      java: "#007396",
      ruby: "#CC342D",
      csharp: "#239120",
      swift: "#F05138",
      flutter: "#02569B",
      wordpress: "#21759b",
      joomla: "#f44321",
      drupal: "#0077c0",
      bootstrap: "#7952b3",
      materialize: "#f44336",
      foundation: "#00b8d4",
      bulma: "#00d1b2",
      tailwind: "#38b2ac",
      laravel: "#ff2d20",
      ruby: "#cc0000",

      // Add more entries for other tools and CMS
    };

    return logoColors[name] || "#333";
  }

  // Usage example
  const toolName = props.name; // Change this to the desired tool name
  const logoColor = getLogoColor(toolName);

  return (
    <div
      style={{ backgroundColor: logoColor }}
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-0 text-white`}
    >
      {props.name}
    </div>
  );
}

export default Pills;
