const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianyuanchengkaoshixitong/",
            name: "zaixianyuanchengkaoshixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianyuanchengkaoshixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线远程考试系统"
        } 
    }
}
export default base
