module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')(
            {
                stage: 1,
                features: {
                    'logical-properties-and-values': false
                }
            }),
        // require('cssnano'),
        // require('css-declaration-sorter')
    ]
}