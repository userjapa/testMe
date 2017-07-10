module.exports = {
    context : __dirname,
    entry : './www/assets/js/run.js',
    output : {
        path : __dirname,
        filename : 'final.js'
    },
    module : {
        loaders : [
            {
                test: /\.css$/, 
                loader : 'style-loader!css-loader'
            }
        ]
    }
}