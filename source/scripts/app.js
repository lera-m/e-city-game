define(['react', 'react-dom', 'react-router', './pages/login', './pages/e-city'], function (React, ReactDom, ReactRouter, Login, Ecity) {

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
                    <Route path="/e-city" component={Ecity}/>
                    <Route path="/e-city/:name" component={Ecity}/>
                </Router>
            );
        }
    });

    Page = React.createFactory(Page);

    ReactDom.render(new Page(), document.getElementById('page'));
});
