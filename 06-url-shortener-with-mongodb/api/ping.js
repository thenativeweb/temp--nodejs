const ping = function () {
    return (req, res) => {
        res.json({ ping: 'pong' });
    };
};

export { ping };
