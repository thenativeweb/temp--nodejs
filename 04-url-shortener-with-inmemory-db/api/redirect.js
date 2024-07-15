const redirect = function ({ store }) {
    return async (req, res) => {
        const { alias } = req.params;
        const url = await store.findByAlias(alias);

        if (!url) {
            res.writeHead(404);
            res.end();
            return;
        }

        res.redirect(307, url);
    };
};

export { redirect };
