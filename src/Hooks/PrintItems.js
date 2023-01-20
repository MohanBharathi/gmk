import React, { useState,useEffect } from 'react'

function PrintItems({calculateTable}) {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        console.log("Print Items Run");
        setRows(calculateTable());
    },[calculateTable])
  return rows.map((row,index)=>{
    return<p key={index}>{row}</p>
  })
}

export default PrintItems