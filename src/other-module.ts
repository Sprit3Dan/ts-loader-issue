/**
 * This module is *not* resolved & processed by ts-loader.
 * 
 * NotResolvedType is left unresolvable intentionally
 * to show how ts-loader treats errors in non-included modules
 */
const moduleB = (): NotResolvedType => {
    return null;
};

moduleB();
