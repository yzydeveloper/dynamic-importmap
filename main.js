import { createApp, version } from 'vue'
import { VERSION } from 'lodash'

createApp({
    setup() {
        return {
            version,
            VERSION
        }
    }
}).mount('#app')
