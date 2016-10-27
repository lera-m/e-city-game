define(['react', 'react-dom', './components/test'], function (React, ReactDom, Test) {

    Test = React.createFactory(Test);

    ReactDom.render(new Test(), document.getElementById('page'));

});
