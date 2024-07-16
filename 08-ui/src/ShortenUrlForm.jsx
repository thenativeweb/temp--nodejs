import { useState } from 'react';

const ShortenUrlForm = ({ headline, onShortenUrl }) => {
    const [alias, setAlias] = useState('');
    const [url, setUrl] = useState('');

    const handleChangeAlias = (evt) => {
        setAlias(evt.target.value);
    };

    const handleChangeUrl = (evt) => {
        setUrl(evt.target.value);
    };

    const handleSubmit = () => {
        onShortenUrl({ alias, url });
        setAlias('');
        setUrl('');
    };

    return (
        <>
            <h2>{headline}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="alias">Alias:</label>
                <input type="text" id="alias" name="alias" value={alias} onChange={handleChangeAlias} />

                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" value={url} onChange={handleChangeUrl} />

                <button type="submit">Add</button>
            </form>
        </>
    );
};

export { ShortenUrlForm };
