define(['react', 'react-dom', 'react-router', './pages/login', './pages/e-city', './pages/rules', './pages/library', './pages/before-start'], function (React, ReactDom, ReactRouter, Login, Ecity, Rules, Library, BeforeStart) {

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
                    <Route path="/rules" component={Rules}/>
                    <Route path="/library" component={Library}/>
                    <Route path="/before-start" component={BeforeStart}/>

                </Router>
            );
        }
    });

    Page = React.createFactory(Page);

    ReactDom.render(new Page(), document.getElementById('page'));
});
