import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// export default defineConfig(({ command, mode, ssrBuild }) => {
//   if (command === 'serve') {
//     return {
//       // dev specific config
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//     }
//   }
// })