const app = {
    title: 'Visibility Toggle'
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();