const UrlTable = ({ headline, urls }) => {
    return (
        <>
            <h2>{headline}</h2>
            <table>
                <tr>
                    <th>Alias</th>
                    <th>URL</th>
                </tr>
                {
                    urls.map(({ alias, url }) => (
                        <tr>
                            <td>{alias}</td>
                            <td><a href={url}>{url}</a></td>
                        </tr>
                    ))
                }
            </table>
        </>
    );
};

export { UrlTable };
