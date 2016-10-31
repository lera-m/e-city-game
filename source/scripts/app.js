define(['react', 'react-dom', 'react-router', './pages/login'], function (React, ReactDom, ReactRouter, Login) {

    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var hashHistory = ReactRouter.hashHistory;

    var Page = React.createClass({

        displayName: 'Page',

        render: function () {
            return (
                <Router history={hashHistory}>
                    <Route path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                </Router>
            );
        }
    });

    Page = React.createFactory(Page);

    ReactDom.render(new Page(), document.getElementById('page'));
});
