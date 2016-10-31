define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'AddText',
        
        render: function () {
            return (
                <h1 style={{color: "white"}}>Hello, {this.props.name}</h1>
            );
        }
        
    });
    
});
            