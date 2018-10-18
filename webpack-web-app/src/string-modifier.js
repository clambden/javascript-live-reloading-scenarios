import stringAppender from "./string-appender.js"
import stringPrepender from "./string-prepender.js"

export default function StringModifier(inStr) {
    return stringAppender(stringPrepender(inStr));
}

if (module.hot) {
    module.hot.accept('./string-appender.js', function () {
        console.log('Accepting the updated String appender module from string-modifier.js!');
    });
    module.hot.accept('./string-prepender.js', function () {
        console.log('Accepting the updated String prepender module from string-modifier.js!');
    });
}
