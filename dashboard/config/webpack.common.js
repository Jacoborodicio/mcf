module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // Everytime when we add a .mjs || .js file we want it to be processed by babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                },
            }
        ]
    }
}
