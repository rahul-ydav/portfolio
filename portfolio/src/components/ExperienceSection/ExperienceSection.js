import './ExperienceSection.css';

function ExperienceSection(){

    const data = [
        {
            'header': 'Naviga',
            'timeperiod': 'July, 2022 - Present',
            'text': 'I am Senior Software Engineer. I am responsible for adding new feature and maintaining the codebase as per clients requirement to the company. Also I have to review the code of fellow developers and resolve the timely required bugs.'
        },
        {
            'header': 'SaralWeb',
            'timeperiod': 'April, 2021 - June, 2022',
            'text': 'I am Senior Software Engineer. I am responsible for adding new feature and maintaining the codebase as per clients requirement to the company. Also I have to review the code of fellow developers and resolve the timely required bugs.'
        },
        {
            'header': 'College',
            'timeperiod': 'July, 2017 - June, 2021',
            'text': 'I have completed my college from IIEST, Shibpur in Information Technology descipline.'
        }
    ]
    return(
        <section className='experience'>
          <div class="timeline">
            {data.map((exp, idx) =>{
                let side = (idx%2) ? 'right' : 'left';
                return (
                    <div className={`expContainer ${side}Container`}>
                        <div class="expTextbox">
                            <h2>{exp.header}</h2>
                            <small>{exp.timeperiod}</small>
                            <p>{exp.text}</p>
                            <span class={`exp${side}Arrow`}></span>
                        </div>
                    </div>
                )
            })}
          </div>
        </section>
    );
}

export default ExperienceSection;