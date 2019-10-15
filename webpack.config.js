const path = require('path');

module.exports = {
	entry: "./src/index.ts",
	mode: "development",
	module: {
		rules: [
			{ 
				test: /\.tsx?$/,				
				exclude: path.join(__dirname + "src/other-module.ts"),
				use: {
					loader: "ts-loader",
					options: {
						logLevel: 'info',
						logInfoToStdOut: true
					}
				},
            },
        ]
    }
}