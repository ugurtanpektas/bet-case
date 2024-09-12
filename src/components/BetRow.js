/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { useBet } from '../contexts/BetContext';

const BetRow = memo(({ bet }) => {
    const { addOrUpdateBet, checkBetOdd } = useBet();

    const handleClick = (oddKey, oddValue) => {
        const isSelected = checkBetOdd(bet.NID, oddKey);

        if (isSelected) {
            addOrUpdateBet(bet, '', oddKey);
        } else {
            addOrUpdateBet(bet, oddValue, oddKey);
        }
    };

    return (
        <>
            <div className="first-line grid-row">
                <div className="ln">{bet.D} {bet.DAY} {bet.LN}</div>
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
            <div className='grid-row'>
                <div className="ln"><b>{bet.C}</b> {bet.T} {bet.N}</div>
                <div></div>
                <div>{bet.OCG[1]?.MBS}</div>
                <div
                    className={`pointer ${checkBetOdd(bet.NID, '1') ? 'yellow' : ''}`}
                    onClick={() => handleClick('1', bet.OCG[1]?.OC[0]?.O || '')}
                >
                    {bet.OCG[1]?.OC[0]?.O || ''}
                </div>
                <div
                    className={`pointer ${checkBetOdd(bet.NID, 'x') ? 'yellow' : ''}`}
                    onClick={() => handleClick('x', bet.OCG[1]?.OC[1]?.O || '')}
                >
                    {bet.OCG[1]?.OC[1]?.O || ''}
                </div>
                <div></div>
                <div className={`pointer ${checkBetOdd(bet.NID, 'alt') ? 'yellow' : ''}`}
                    onClick={() => handleClick('alt', bet.OCG[5]?.OC[25]?.O || '')}>{bet.OCG[5]?.OC[25]?.O || ''}</div>
                <div className={`pointer ${checkBetOdd(bet.NID, 'ust') ? 'yellow' : ''}`}
                    onClick={() => handleClick('ust', bet.OCG[5]?.OC[26]?.O || '')}>{bet.OCG[5]?.OC[26]?.O || ''}</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`pointer ${checkBetOdd(bet.NID, '1-x') ? 'yellow' : ''}`}
                    onClick={() => handleClick('1-x', bet.OCG[2]?.OC[3]?.O || '')}>{bet.OCG[2]?.OC[3]?.O || ''}</div>
                <div className={`pointer ${checkBetOdd(bet.NID, '1-2') ? 'yellow' : ''}`}
                    onClick={() => handleClick('1-2', bet.OCG[2]?.OC[4]?.O || '')}>{bet.OCG[2]?.OC[4]?.O || ''}</div>
                <div className={`pointer ${checkBetOdd(bet.NID, 'x-2') ? 'yellow' : ''}`}
                    onClick={() => handleClick('x-2', bet.OCG[2]?.OC[5]?.O || '')}>{bet.OCG[2]?.OC[5]?.O || ''}</div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
});

BetRow.displayName = 'BetRow';

export default BetRow;