import stringAppender from "./string-appender.js"
import stringPrepender from "./string-prepender.js"

export default function StringModifier(inStr) {
    return stringAppender(stringPrepender(inStr));
}