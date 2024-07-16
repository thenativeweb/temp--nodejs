import { ShortenUrlForm } from './ShortenUrlForm.jsx';
import { UrlTable } from './UrlTable.jsx';
import { useEffect, useState } from 'react';

const App = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/api/get-urls');
            const data = await res.json()

            setUrls(data);
        })();
    }, []);

    const handleShortenUrl = ({ alias, url }) => {
        (async () => {
            const res = await fetch('http://localhost:3000/api/shorten-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ alias, url }),
            });

            if (res.status !== 200) {
                alert('Something went wrong!');
                throw new Error('Something went wrong!');
            }

            const res2 = await fetch('http://localhost:3000/api/get-urls');
            const data = await res2.json()

            setUrls(data);
        })();
    };

    return (
        <>
            <h1>URL Shortener</h1>
            <UrlTable headline="Existing URLs" urls={urls} />
            <ShortenUrlForm headline="Shorten a new URL" onShortenUrl={handleShortenUrl} />
        </>
    );
};

export { App };
