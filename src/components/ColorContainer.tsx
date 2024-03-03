import React from 'react'; // Import React if you're using JSX

// Define the type for props
interface ColorContainerProps {
    props: string; // Assuming props is a string representing the color
}

// Define the ColorContainer component with type annotation for props
const ColorContainer: React.FC<ColorContainerProps> = ({ props }) => {
    console.log(props, "from container");

    return (
        <div
            style={{
                border: '1px solid red',
                width: '30%',
                height: '30%',
                textOverflow: 'ellipsis',
                wordWrap: 'break-word',
                color: 'White',
                backgroundColor: props,
            }}
        >
            i am ColorContainer
        </div>
    );
};

export default ColorContainer;
