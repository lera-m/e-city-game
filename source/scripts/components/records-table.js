define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'RecordsTable', 
        
        getDefaultProps: function(){
            return {
                header: ['№', 'Игрок', 'Победы', 'Поражения', 'Коэффициент'],
                players: [
                    {
                        player: 'the_best',
                        win: 75,
                        lose: 45
                    },
                    {
                        player: 'totosha',
                        win: 65,
                        lose: 56
                    },
                    {
                        player: 'oleg45',
                        win: 51,
                        lose: 45
                    },
                    {
                        player: 'rosa',
                        win: 35,
                        lose: 44
                    },
                    {
                        player: 'marinka',
                        win: 20,
                        lose: 46
                    },
                    {
                        player: 'bon-bon',
                        win: 15,
                        lose: 47
                    },  
                    {
                        player: 'fromUkraine',
                        win: 20,
                        lose: 65
                    },
                    {
                        player: 'param-pam-pam',
                        win: 31,
                        lose: 99
                    },
                    {
                        player: 'partyBoy',
                        win: 13,
                        lose: 43
                    },
                    {
                        player: 'sky',
                        win: 20,
                        lose: 76
                    }
                ]
            };  
        },
                
        render: function () {
            return (
                <div className='records'>
                    <div className='col-1of1 header'>
                        {this.props.header.map((elem, i) => {
                            return (
                                <div key={'header' + i} className={elem === '№' ? 'col-1of8' : 'col-1of5'}>
                                    {elem}
                                </div> 
                            ); 
                        })}
                    </div>
                    {this.props.players.map((player, i) => {
                        return (
                            <div key={'player' + i} className={i < 3 ? 'col-1of1 place1-3' : 'col-1of1 place4-10'}>
                                <div key={'number' + i} className='col-1of8'>
                                    {i + 1}
                                </div>
                                <div key={'name' + i} className='col-1of5'>
                                    {player.player}
                                </div>
                                <div key={'win' + i} className='col-1of5'>
                                    {player.win}
                                </div>
                                <div key={'lose' + i} className='col-1of5'>
                                    {player.lose}
                                </div>
                                <div key={'rate' + i} className='col-1of5'>
                                    {(player.win / player.lose).toFixed(2)}
                                </div>
                            </div>
                        )
                    })}
                </div>            
            );
        }
        
    });
    
});