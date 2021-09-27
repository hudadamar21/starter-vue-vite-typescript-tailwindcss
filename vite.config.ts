const path = require('path');
import vue from '@vitejs/plugin-vue'

export default {
    resolve: {
        alias: [
            {find: "@", replacement: path.resolve(__dirname, 'src')}
        ],
        optimizeDeps: {
            include: [
                "javascript-time-ago/locale/de"
            ],
        },
    },
    plugins: [vue()]
};