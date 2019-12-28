'use strict';

console.log('App.js is running!');

var appObj = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderSubmitApp();
    }
};

var removeAllBtn = function removeAllBtn() {
    appObj.options = [];
    renderSubmitApp();
};

// JSX - JavaScript XML
// const template = (
//     <div>
//         <h1>{appObj.title}</h1>
//         <p>{appObj.subtitle ? appObj.subtitle : undefined}</p>
//         {appObj.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
//         <p>{appObj.options.length}</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
// );


var appRoot = document.getElementById('app');

var renderSubmitApp = function renderSubmitApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appObj.title
        ),
        React.createElement(
            'p',
            null,
            appObj.subtitle ? appObj.subtitle : undefined
        ),
        appObj.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options'
        ) : React.createElement(
            'p',
            null,
            'No Options'
        ),
        React.createElement(
            'p',
            null,
            appObj.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'button',
            { onClick: removeAllBtn },
            'Remove All'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderSubmitApp();
