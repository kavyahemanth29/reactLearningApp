import React from 'react';

const NoRoute = () => {
    return (
        <main style={{ padding: "1rem" }}> <p>There's nothing here! because the url <b>{window.location.pathname}</b> is not defined in router file</p> </main>
    )
}
export default NoRoute