define(['react', './title'], function (React, Title) {

    return React.createClass({

        displayName: 'Test',

        getInitialState: function () {
          return {
            color: 'green',
            title: 'Hello World!'
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

            return (
                <div className={'color-' + this.state.color} style={style} onClick={this.onClick}>
                    <Title text={this.state.title}/>
                    <Title text={this.state.title}/>
                    <Title text={this.state.title}/>
                    <Title text={this.state.title}/>
                    <Title text={this.state.title}/>
                </div>
            );
        }
    });

});
