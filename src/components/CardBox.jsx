import React from 'react';

const CardBox  = props => {
        const cardStyle = {
                width: props.width || "280px",
                height: props.height || "auto",
                backgroundColor: props.bgColor || "#fff",
                color: props.color || "#272D3B",
                marginRight: props.mr || "0",
                padding: props.padding || "40px"
        }

        return(
                <div className={props.className} style={cardStyle}>
                        {props.children}
                </div>
        )
}

export default CardBox;