const add = function (left, right) {
    return left + right;
};

const subtract = function (left, right) {
    return left - right;
};

// Klassischer Export (CommonJS)
// module.exports = { add, subtract };

// Moderner Export (ESM)
// export default add;
// export { add };
// export { subtract };
export { add, subtract };
