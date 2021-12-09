import { mount } from 'dashboard/dashboardApp';
import React, {useRef, useEffect} from "react";
import {useHistory} from "react-router-dom";


export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        mount(ref.current, {
            onNavigate: ({pathname: nextPathName}) => {
                const {pathname} = history.location;
                if (pathname !== nextPathName)
                    history.push(nextPathName);
            }
        });
    }, [])
    return <div ref={ref} />;
}
