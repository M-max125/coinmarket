/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains:['s3.coinmarketcap.com','picsum.photos'],
  },
  // webpack: (config, options)=> {
  //   config.module.rules.push({
  //     noParse: /gun\.js$/
  //   })
  //   return  config
  // },
  
    webpack: function (config, options) {
      config.module.noParse = /gun\.js$/;
      return config;
  },
  node: {
		fs: "empty"
	}
  
}
