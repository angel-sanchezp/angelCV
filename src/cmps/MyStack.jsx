import { useState } from 'react'

export const MyStack = (props) => {

    const [stacks, setStacks] = useState([
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972611/resume/react-icon_cixoo3.png', title: 'React' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972668/resume/vue-icon_jccj47.png', title: 'Vue' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972654/resume/css-icon_xi49zk.png', title: 'Css 3' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972641/resume/js-icon_p9k4h8.png', title: 'NodeJS & ExpressJS' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972633/resume/html-icon_cjwvw0.png', title: 'Html' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972629/resume/git-icon_fb7qbf.png', title: 'Git' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972649/resume/db-icon_t1a1jw.png', title: 'Mongodb' },
        { img: 'https://res.cloudinary.com/angelsa/image/upload/v1645972616/resume/sass-icon_fjrruy.png', title: 'Sass' },
    ]);
    return (
        <section className="my-stacks" >
            <h2>My stack</h2>
            <div className="stack-conteiner">{stacks.map(stack => <div  className="card-stack" key={stack.title}> 
             <img src={stack.img} alt="" className="stack-img" />
             {stack.title} </div>)}</div>

        </section>
    )
}