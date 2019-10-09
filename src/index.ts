/**
 * This module is resolved & processed by ts-loader
 */
const moduleA = (): ResolvedType => {
    console.trace("module executed");

    return null;
}

moduleA()