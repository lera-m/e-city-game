define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'Div',
        
        render: function () {
            return (
                <div className={'yellow'} style={{height: '100px', backgroundColor: "yellow"}}>{this.props.text}</div>
            );
        }
        
    });
    
});