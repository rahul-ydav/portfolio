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
            <div class="skillsMain">
                {/* <h1>Skills</h1> */}
                <div className="skillsList skillsChild">

                    {skills.map((skillGroup) => {
                        const skillMap = skillGroup.split(': ');
                        const heading = skillMap[0];
                        const similarSkills = skillMap[1].split(', ');
                        return (
                            <div class="skillSet">
                                <h4>{heading}</h4>
                                {similarSkills.map(oneSkill =>{
                                    return (<span class="skillItems">{oneSkill}</span>)
                                })}
                            </div>
                        );
                    })}
                    {/* <div class="skillSet">
                        <h4>Languages</h4>
                        <span class="skillItems">JavaScript</span>
                        <span class="skillItems">Java</span>
                        <span class="skillItems">C/C++</span>
                    </div> */}
                </div>
                <div class="skillsStyle skillsChild">
                    <p class="styleText">Technology with Expreience</p>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;