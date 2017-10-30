# cleanchar
Clean special chars

#### Options:
If you need can use options: cleanchar(text, options)
```
social = Enable # and @
spanish = Enable ñ and ç
```

#### Demo:
```js
const cleanchar = require('cleanchar') 
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`
const cleantext = cleanchar(text, { social: true })
```

#### Return:
```
lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-aliquam-varius-porttitor-est-a-ornare-quisque-pulvinar-nec-libero-ut-posuere-praesent-lobortis-eleifend-magna-eu-egestas-lorem-proin-vitae-diam-leo-nunc-placerat-nibh-a-tellus-volutpat-molestie-texto-espanol-troc-de-text-en-catala-play-with-#hashtags-and-@social-nullam-sodales-diam-sit-amet-volutpat-feugiat-lectus-neque-lacinia-mauris-scelerisque-vulputate-diam-nunc-at-mi-vestibulum-semper-quam-faucibus-dolor-fermentum-suscipit
```