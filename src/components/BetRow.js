/* eslint-disable react/prop-types */
import React, { useState, memo } from 'react';
import { useBet } from '../contexts/BetContext';

const BetRow = memo(({ bet }) => {
    const { addOrUpdateBet, checkBetOdd } = useBet();
    const [selectedOdd, setSelectedOdd] = useState(null);

    const handleClick = (oddKey, oddValue) => {
        const isSelected = checkBetOdd(bet.NID, oddKey);

        if (isSelected) {
            setSelectedOdd(null);
            addOrUpdateBet(bet, '', oddKey);
        } else {
            setSelectedOdd(oddKey);
            addOrUpdateBet(bet, oddValue, oddKey);
        }
    };

    return (
        <>
            <tr className="first-line">
                <td className="ln">{bet.D} {bet.DAY} {bet.LN}</td>
                <td>Yorumlar</td>
                <td>MBS</td>
                <td>1</td>
                <td>x</td>
                <td>2</td>
                <td>Alt</td>
                <td>Üst</td>
                <td>H1</td>
                <td>1</td>
                <td>x</td>
                <td>2</td>
                <td>H2</td>
                <td>1-x</td>
                <td>1-2</td>
                <td>x-2</td>
                <td>Var</td>
                <td>Yok</td>
                <td>+99</td>
            </tr>
            <tr>
                <td className="ln"><b>{bet.C}</b> {bet.T} {bet.N}</td>
                <td></td>
                <td>{bet.OCG[1]?.MBS}</td>
                <td
                    className={`pointer ${selectedOdd === '1' ? 'yellow' : ''}`}
                    onClick={() => handleClick('1', bet.OCG[1]?.OC[0]?.O || '')}
                >
                    {bet.OCG[1]?.OC[0]?.O || ''}
                </td>
                <td
                    className={`pointer ${selectedOdd === 'x' ? 'yellow' : ''}`}
                    onClick={() => handleClick('x', bet.OCG[1]?.OC[1]?.O || '')}
                >
                    {bet.OCG[1]?.OC[1]?.O || ''}
                </td>
                <td></td>
                <td className={`pointer ${selectedOdd === 'alt' ? 'yellow' : ''}`}
                    onClick={() => handleClick('alt', bet.OCG[5]?.OC[25]?.O || '')}>{bet.OCG[5]?.OC[25]?.O || ''}</td>
                <td className={`pointer ${selectedOdd === 'ust' ? 'yellow' : ''}`}
                    onClick={() => handleClick('ust', bet.OCG[5]?.OC[26]?.O || '')}>{bet.OCG[5]?.OC[26]?.O || ''}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className={`pointer ${selectedOdd === '1-x' ? 'yellow' : ''}`}
                    onClick={() => handleClick('1-x', bet.OCG[2]?.OC[3]?.O || '')}>{bet.OCG[2]?.OC[3]?.O || ''}</td>
                <td className={`pointer ${selectedOdd === '1-2' ? 'yellow' : ''}`}
                    onClick={() => handleClick('1-2', bet.OCG[2]?.OC[4]?.O || '')}>{bet.OCG[2]?.OC[4]?.O || ''}</td>
                <td className={`pointer ${selectedOdd === 'x-2' ? 'yellow' : ''}`}
                    onClick={() => handleClick('x-2', bet.OCG[2]?.OC[5]?.O || '')}>{bet.OCG[2]?.OC[5]?.O || ''}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </>
    );
});

BetRow.displayName = 'BetRow';

export default BetRow;