import React from 'react';
import MarketingApp from "./components/MarketingApp";
export default () => {
    return (
        <div>
            <div>
                <h2>This is part of container (main)</h2>
            </div>
            <hr/>
            <div>
                <MarketingApp />
            </div>
        </div>
    )
};
