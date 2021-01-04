module.exports= {
    devServer: {
        proxy: {
            '/ajax':{
                target: "http://m.maoyan.com",
                changeOrigin: true
            },
            '/ipJson.jsp':{
                target:"http://whois.pconline.com.cn",
                changeOrigin: true
            }
        }
    }
}