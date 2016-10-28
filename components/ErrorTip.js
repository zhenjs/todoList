
import React from 'react';

const ErrorTip = ({message, onRetry}) => (
    <div>
        <p>some error happen: {message}</p>
        <button onClick = {onRetry}>Click retry</button>
    </div>
)