 class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
     toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
     }
     render() {
         return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Content' : 'Show Content'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
         );
     }
 }

 ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle'
// }

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderApp();