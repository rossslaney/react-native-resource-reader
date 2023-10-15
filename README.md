# react-native-resource-reader

Read values from info.plist and strings.xml in your javascript code.

## Installation

```sh
npm install react-native-resource-reader
```

## Usage

```js
import { getResourceValue } from 'react-native-resource-reader';

// ...

const value = await getResourceValue('YOUR_RESOURCE_KEY');
console.log(value); // This will print the value associated with 'YOUR_RESOURCE_KEY' in either `info.plist` or `strings.xml`
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
