/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

 // 后台接口服务器地址
export const baseUrl = 'http://localhost:9000'
// export const baseUrl = 'http://localhost:9000/vuebg-auto-generator'

// 文件保存文件夹
export const outPutFolderPath = 'C:/vuebg'

// 包名
export const basePackage = 'com.vuebg'

// 文件保存位置
export const savePath = 'C:/vuebg/output'


export default {
    baseUrl,
    outPutFolderPath,
    basePackage,
    savePath
}