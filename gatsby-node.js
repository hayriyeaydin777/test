const fetch = require(`node-fetch`);

exports.sourceNodes = async ({actions: {createNode}, createContentDigest}) => {
    const home = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {method: `GET`},
        {headers: {header: `123`}}
    );
    const pageHome = await home.json();
    createNode({
        allData: pageHome,
        id: `page-home-graphql-data`,
        internal: {
            type: `JsonPlaceHolder`,
            contentDigest: createContentDigest(pageHome),
        },
    });
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (stage.startsWith("develop")) {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }

    if (stage === 'build-javascript') {
      const config = getConfig()
      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      )
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true
      }
      actions.replaceWebpackConfig(config)
    }

    if (getConfig().mode === 'production') {
      actions.setWebpackConfig({
        devtool: false
      });
    }
  };
