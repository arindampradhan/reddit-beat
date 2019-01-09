import posed from 'react-pose';

export const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
        zIndex: '100px'
    },
    press: {
        scale: 1.025,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
        zIndex: '100px'
    },
    
    exit: { 
        afterChildren: true,
        transition: { duration: 200, ease: "linear" },
        x: ({ delta }) => - delta * 100 + 'vw' 
    }
});


