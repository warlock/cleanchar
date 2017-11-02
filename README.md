# cleanchar
Clean special chars

#### Options:
If you need can use options: cleanchar(text, options)
```
social = Enable # and @
spanish = Enable ñ and ç
```

#### Example with options:
```js
const cleanchar = require('cleanchar') 
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`
const cleantext = cleanchar(text, { social: true })
```

#### Return:
```
lorem ipsum dolor sit amet consectetur adipiscing elit aliquam varius porttitor est a ornare quisque pulvinar nec libero ut posuere praesent lobortis eleifend magna eu egestas lorem proin vitae diam leo nunc placerat nibh a tellus volutpat molestie texto espanol troc de text en catala play with #hashtags and @social nullam sodales diam sit amet volutpat feugiat lectus neque lacinia mauris scelerisque vulputate diam nunc at mi vestibulum semper quam faucibus dolor fermentum suscipit
```

## License
The MIT License (MIT)
Copyright (c) 2017 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 