import './ProjectSection.css';

function ProjectSection(){
    const data = [
        {
            title: 'Portfolio',
            text: 'This website is a showcase of my part-time projects. It primarily features my latest work.',
            link: 'https://github.com/rahul-ydav/portfolio',
        },
        {
            title: 'BookMyShow',
            text: 'Design and stimulate the backend of Book My Show App with basic features like creating accounts, adding movies, shows, halls, booking tickets. With the help of Java SpringBoot.',
            link: 'https://github.com/rahul-ydav/BookMyShow',
        },
        {
            title: 'SplitWise ',
            text: 'Design and stimulate the backend of SplitWise App with basic features like creating accounts, groups, adding expenses and settle-up expenses. With the help of Java SpringBoot.',
            link: 'https://github.com/rahul-ydav/splitwise',
        }
    ];
    return (<section className='projects'>
        <h1>Projects</h1>
        <div className='cardContainer'>
            {data.map((project, idx) =>{
                return (
                    <div key={`projectDiv${idx}`} className='card'>
                        <div className='cardContent'>
                            <h2>{project.title}</h2>
                            <p>{project.text}</p>
                            <a href={`${project.link}`} target='_blank' className='readMore'>Read More</a>
                        </div>
                    </div>
                )
            })}
        </div>
      </section>
    );
}

export default ProjectSection;