import React, { useState, useEffect } from "react";

const StatusHook = (props) => {

    let [isStatus, setIsStatus] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activedIsStatus = () =>  {
        setIsStatus(true);
    }

    let deActivedIsStatus = () =>  {
        setIsStatus(false);
        props.putUserStatusProfile(status)
    }

    let onStatusChenge = (e) =>  {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    return (
        <div>
            {(!isStatus)
                ? <div>
                    <span onDoubleClick={activedIsStatus}>{status || '----'}</span>
                </div>

                : <div>
                    <input onChange={onStatusChenge} autoFocus={true} onBlur={deActivedIsStatus} value={status} />
                </div>
            }
        </div>
    );
}

export default StatusHook;
