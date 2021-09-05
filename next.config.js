const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("Development");
    return {
      env: {
        MOITECH_API_URL: "http://localhost:8080",
      },
      /* development only config options here */
    };
  }

  return {
    env: {
      MOITECH_API_URL: "http://localhost:8080",
    },
    /* config options for all phases except development here */
  };
};
