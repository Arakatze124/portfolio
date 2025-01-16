import { useState, useEffect } from 'react';
import React from 'react';

export default function PinBoard(entry) {
 
    return <>
       <div className="pin">
                <h2>{entry.name}</h2>
                <p>{entry.text}</p>
                <p>{entry.date}</p>
            </div>

    </>
}