const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, itemFunc) => itemFunc(prevResult), comp);
};

export default compose;