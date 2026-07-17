/*
避免 Vite 对 src/js/c-t.js 进行热重载（HMR）二重实例化，
从而导致单例变量 bind 与 PENDING 队列在不同模块副本间产生作用域隔离（状态锁死挂起）。
decline 在检测到文件变动时会直接触发页面强制整体刷新（Full Reload），维持运行期单例的绝对一致性。
*/
export default () => ({
  name: "decline-hmr",
  transform: (code, id) => {
    if (id.endsWith("src/js/c-t.js")) {
      return code + "\nif(import.meta.hot)import.meta.hot.decline()";
    }
  }
});
