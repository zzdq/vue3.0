import { createStore } from 'vuex'
import getters from './getters'

// vite版自动导入vuex
// 这次我将需要导入的文件放到store/modules文件夹下面了
//  import.meta.globEager的参数必须是绝对路径或者相对路径，不能是路径别名。也就是以点和斜杠开头的字符串。
let modules = {}
const modulesFiles = import.meta.globEager('./modules/*.js')
// 
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules = {...modules, [moduleName]:modulesFiles[path].default}
}

const store = createStore({
  modules,
  getters,
  // plugins: [new VuexPersistence().plugin]
})

export default store