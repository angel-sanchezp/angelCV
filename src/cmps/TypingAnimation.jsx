import TypeAnimation from 'react-type-animation';

export function TypingAnimation (){
    return (
        <TypeAnimation
            cursor={false}
            sequence={[
                'Frontend Developer 👩‍💻',
                2000,
                'Creative partner 💡',
                2000,
                'Strong team player  💪',
                2000,
                'lover Mom 👩‍👧‍👦',
                2000,
            ]}
            wrapper="p"
            repeat={Infinity}
        />
    );
};

