const urls = {
    gh: 'https://www.github.com/thenativeweb',
    tnw: 'https://www.thenativeweb.io',
    yt: 'https://www.youtube.com/@thenativeweb'
};

const redirect = (req, res) => {
    const { alias } = req.params;
    const url = urls[alias];

    if (!url) {
        res.writeHead(404);
        res.end();
        return;
    }

    res.redirect(307, url);
};

export { redirect };
