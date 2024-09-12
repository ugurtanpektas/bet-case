/* eslint-disable react/prop-types */
import React from 'react';
import { FixedSizeList as List } from 'react-window';
import BetRow from './BetRow';

function BetsTable({ bets }) {
    const Row = ({ index, style }) => (
        <div style={style}>
            <BetRow bet={bets[index]} />
        </div>
    );

    return (
        <div>
            <div className="header grid-row">
                <div className="ln">Events: {bets.length}</div>
                <div>Yorumlar</div>
                <div>MBS</div>
                <div>1</div>
                <div>x</div>
                <div>2</div>
                <div>Alt</div>
                <div>Üst</div>
                <div>H1</div>
                <div>1</div>
                <div>x</div>
                <div>2</div>
                <div>H2</div>
                <div>1-x</div>
                <div>1-2</div>
                <div>x-2</div>
                <div>Var</div>
                <div>Yok</div>
                <div>+99</div>
            </div>
            <List
                height={window.innerHeight - 60} // Set height according to your design
                itemCount={bets.length}
                itemSize={71}
                width="100%"
            >
                {Row}
            </List>
        </div>
    );
}

export default BetsTable;

