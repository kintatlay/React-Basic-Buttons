console.log('App.js is running!');

const appObj = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderSubmitApp();
    }
};

const removeAllBtn = () => {
    appObj.options = [];
    renderSubmitApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderSubmitApp = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            <p>{appObj.subtitle ? appObj.subtitle : undefined}</p>
            {appObj.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {appObj.options.map((lis) => {
                    return <li key={lis}>{lis}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={removeAllBtn}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderSubmitApp();