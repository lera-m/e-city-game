
define(['react', './title', './div', './add-text'], function (React, Title, Div, AddText) {

    return React.createClass({
        
        
        displayName: 'Test',

        getInitialState: function () {
          return {
            color: 'green',
            title: 'Hello World!',
            div2color: 'black'
          };
        },

		onClick: function onClick() {
    		if (this.state.color === 'green') {
    			this.setState({
    				color: 'red',
    				title: this.state.title + '!'
    			});
			} else {
    			this.setState({
    				color: 'green',
    				title: this.state.title.substr(0, this.state.title.length - 1)
    			});
			}
		},

        render: function () {
            var style = {
                  backgroundColor: this.state.color,
                  height: '300px'
                };
            var style2 = {
                backgroundColor: this.state.div2color,
                height: '100px',
                border: '2px solid white'
            };
            var styleText = {
                color: "white"    
            };
            
            
            
            return (
                <div className={'color-' + this.state.color} style={style} onClick={this.onClick}>
                    <Title text={this.state.title}/>
                    <Title text={this.state.title}/>
                    <Title text={this.state.title}/>
                    
                    
                    <Div /* className={'yellow'} */ text={this.state.title}/>
                    <div style={style2}>
                        <AddText name={this.props.name}/>
                    </div>

                </div>
                
            );
        }
    });

});
