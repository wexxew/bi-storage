# bi-storage
Bi-tree fastest storage for node.js

#### Example ####

```javascript
const BiStorage = require('bi-storage')
let storage = new BiStorage

storage.set('testData', {test: 'Any type data'})

let data = storage.get('testData')

```
