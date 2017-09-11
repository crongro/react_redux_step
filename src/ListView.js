import React from 'react';

const ListView = ({data, onClick}) => {
    let listHTML = "";
    if(typeof data !== "undefined") {
      listHTML = data.todos.map((v,i) => {
        return (<li onClick={onClick} key={i}>{v}</li>)
      });
    }
    return (<ul>{listHTML}</ul>)
}

export default ListView;