import TypeAnimation from 'react-type-animation';

export function TypingAnimation (){
    return (
        <TypeAnimation
            cursor={false}
            sequence={[
                'Frontend Developer ๐ฉโ๐ป',
                2000,
                'Creative partner ๐ก',
                2000,
                'Strong team player  ๐ช',
                2000,
                'lover Mom ๐ฉโ๐งโ๐ฆ',
                2000,
            ]}
            wrapper="p"
            repeat={Infinity}
        />
    );
};

