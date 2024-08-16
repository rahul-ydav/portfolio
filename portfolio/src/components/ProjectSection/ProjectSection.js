import './ProjectSection.css';

function ProjectSection(){
    const data = [
        {
            title: 'Portfolio',
            text: 'This website is an interface of my projects, that I create in my part time. Usually it contains the things, which I am making recently',
            link: 'https://github.com/rahul-ydav/portfolio',
        },
        {
            title: 'Portfolio',
            text: 'This website is an interface of my projects, that I create in my part time. Usually it contains the things, which I am making recently',
            link: 'https://github.com/rahul-ydav/portfolio',
        },
        {
            title: 'Portfolio',
            text: 'This website is an interface of my projects, that I create in my part time. Usually it contains the things, which I am making recently',
            link: 'https://github.com/rahul-ydav/portfolio',
        }
    ];
    return (<section className='projects'>
        <h1>Projects</h1>
        <div className='cardContainer'>
            {data.map((project, idx) =>{
                return (
                    <div className='card'>
                        <div className='cardContent'>
                            <h2>{project.title}</h2>
                            <p>{project.text}</p>
                            <a href={`${project.link}`} target='_blank' class='readMore'>Read More</a>
                        </div>
                    </div>
                )
            })}
        </div>
      </section>
    );
}

export default ProjectSection;