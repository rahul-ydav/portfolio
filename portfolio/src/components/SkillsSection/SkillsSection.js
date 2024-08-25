import './SkillsSection.css';

function SkillsSection(){

    const skills = [
        'Languages: JavaScript, Java, C/C++',
        'Backend: Node.js, Java, Express.js',
        'Database: PostgreSQL, MySQL, MongoDB',
        'Frontend: HTML, CSS, React.js',
        'Tools: Git, GitHub, Redis, Kafka, Jenkins, BitBucket',
        'Concepts: OOPs, LLD, HLD, Caching, DSA, Design Patterns, SDLC'
    ];

    return (
        <section className='skills'>
            <div className="skillsMain">
                {/* <h1>Skills</h1> */}
                <div className="skillsList skillsChild">

                    {skills.map((skillGroup, idx) => {
                        const skillMap = skillGroup.split(': ');
                        const heading = skillMap[0];
                        const similarSkills = skillMap[1].split(', ');
                        return (
                            <div key={`skillsDiv${idx}`} className="skillSet">
                                <h4>{heading}</h4>
                                {similarSkills.map((oneSkill, idx2) =>{
                                    return (<span key={`skillsDiv${idx2}`} className="skillItems">{oneSkill}</span>)
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className="skillsStyle skillsChild">
                    <p className="styleText">Technology with Expreience</p>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;