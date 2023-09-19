import React from 'react'

export default function InternalStyling() {
    
    const styleTitle = {
        fontSize: '2rem',
        color: 'darkgrey',
        fontStyle: 'italic',
        textAlign: 'center'
    }

    const styleParagraph = {
        ...styleTitle,
        fontSize: '1rem',
        color: 'darkred'
    }

  return (
    <div>
        {/* INTERNAL STYLING */}
    <h1 style={styleTitle}>React Internal Styling</h1>
    <p style={styleParagraph}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium necessitatibus nihil earum corporis eaque maxime repellat consectetur asperiores ipsa nulla? Quidem placeat, nihil deleniti aspernatur ratione a numquam aliquid excepturi!
            </p>
            {/* INTERNAL VE INLINE STYLING */}
            <p style={{...styleTitle, color: "violet", fontSize: '1rem',}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis ipsum. Assumenda labore officiis animi facere sed earum voluptates voluptas ex libero eum. Quod nesciunt nam aspernatur excepturi necessitatibus laborum?
           </p>
    </div>
  )
}

