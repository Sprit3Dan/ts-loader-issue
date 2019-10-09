module.exports = {
	entry: "./src/index.ts",
	mode: "development",
	module: {
		rules: [
			{ 
				test: /\.tsx?$/,
				exclude: (modulePath) => {
					const excluded = /other-module/.test(modulePath)
					console.log(modulePath, "Module excluded:", excluded);

					return excluded
				},
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