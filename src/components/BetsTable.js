/* eslint-disable react/prop-types */
import React from 'react';
import BetRow from './BetRow';

function BetsTable({ bets }) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="ln">Events: {bets.length}</th>
                    <th>Yorumlar</th>
                    <th>MBS</th>
                    <th>1</th>
                    <th>x</th>
                    <th>2</th>
                    <th>Alt</th>
                    <th>Üst</th>
                    <th>H1</th>
                    <th>1</th>
                    <th>x</th>
                    <th>2</th>
                    <th>H2</th>
                    <th>1-x</th>
                    <th>1-2</th>
                    <th>x-2</th>
                    <th>Var</th>
                    <th>Yok</th>
                    <th>+99</th>
                </tr>
            </thead>
            <tbody>
                {bets.map((bet) => (
                    <BetRow key={bet.NID} bet={bet} />
                ))}
            </tbody>
        </table>
    );
}

export default BetsTable;
