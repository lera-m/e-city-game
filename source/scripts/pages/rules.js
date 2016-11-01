define(['react', '../components/side-bar', '../components/game-rules', '../components/town-list',], function (React, SideBar, GameRules, TownList) {

    return React.createClass({

        displayName: 'Rules',

        render: function () {
            return (
                <div>
                    <SideBar/>
                    <GameRules/>
                    <TownList/>
                </div>
            );
        }
    });

});
