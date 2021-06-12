import React, {Component} from 'react';
import logo from '../images/cover.png';


class Tips extends Component{
    render(){
        return (
            <div className="App pt-5 mt-5">
                <img src={logo} height="80" width="280" style={{'top':'0px','left':'0px', 'position':'fixed'}} />
                
                <div className="tips">
                    <h1>5 Resume Writing Tips To Help You Land a Job</h1>
                    <h3>1. Look for keywords in the job postings</h3>
                    <p>The best place to start when preparing to write a resume is to carefully read the job postings that interest you. As you apply for different jobs, you should study each job description for keywords that show what the employer is looking for in an ideal candidate. Include those keywords in your resume where relevant.
                    <br/><br/>
                    For example, if you’re applying for a job as a Medical Billing Coder, an employer might list keywords such as “coding,” “claims submission,” “compliance” or “AR management” in the job description. Pay particular attention to anything listed in the sections labelled “Requirements” or “Qualifications”. If you have the skills that employers are looking for, you can add these same terms to your resume in the experience or skills sections.</p>

                    <h3>2. Review resume examples for your industry</h3>
                    <p>When creating your resume, you could study examples of resumes from your industry for inspiration and best practices. While there are many ways you can use resume samples, there are three main takeaways you should look for:
                    <br/><br/>
                    <strong>Make it simple and easy to read.</strong> Resume samples are simple and straightforward. This is because employers have a minimal amount of time to review your resume, so readability is key. This also means selecting a professional, clean font.<br/>
                    <strong>Make it brief.</strong> You’ll notice that each section of the resume sample is short and to-the-point, including the summary and experience descriptions. Including only the most key and relevant information means employers are able to consume more information about you and quickly understand your fitness for the role.<br/>
                    <strong>Include numbers.</strong> You might also notice that there are often metrics included in the experience section of resume samples. This is because employers are highly responsive to measurable proven value. Numbers allow them to better understand the value you may bring to the position. For example, one bullet point under the experience description for an administrative assistant reads, “Executed processing of vendor contracts and implemented a standardised process, reducing contract discrepancies by 90%.”<br/><br/>
                    When using resume samples, you should keep in mind that these are not meant to be copied exactly. While you should avoid using them as a template, samples are useful as examples of high quality resumes in your industry and job title.</p>

                    
                    <h3>3. Use a professional font</h3>
                    <p>Because employers have only a short time to review your resume, it should be as clear and as easy to read as possible. You should use a basic, clean font like Arial or Times New Roman. Keep your font size between 10 and 12 points. Selecting a clear, readable font will help make your resume appear more professional.
                    <br/><br/>
                    You should also make sure that you reduce or eliminate any unnecessary white space. Too much blank space might make your resume seem sparse, distracting the audience and possibly raising a red flag. By reducing extra white space, you make it easier for the resume reader to focus only on the content of your resume instead of the white spaces. You can reduce white space by increasing your font size to 12 points and possibly adding an additional, optional section like “ Skills” or “Awards and Achievements”.</p>
                    
                    
                    <h3>4. Include only the most relevant information and put the most important information first</h3>
                    <p>While you might have extensive work or educational experience, it’s important to keep your resume as brief as possible without leaving out key information. Hiring managers don’t spend a lot of time reading each resume. Research has shown that hiring managers tend to spend only 6 seconds per resume. If your resume includes old or irrelevant information, such as jobs held over 10 years ago or minor degrees and achievements, it may distract from important information.
                    <br/><br/>
                    Try to include only work experience, achievements, education and skills most relevant to the employer. You can find the most relevant attributes by closely reading the job posting. You should prioritise important information higher on your resume to draw attention to key skills and achievements.</p>
                    
                    
                    <h3>5. Use active language</h3>
                    <p>Your resume should be written using active language without irrelevant words. This means using power words such as “achieved,” “earned,” “completed” or “accomplished”. If your resume is too long or seems hard to read, you should consider making sentences shorter or ideas more concise.
                    <br/><br/>
                    For example, you may have a job description that reads:
                    <br/><br/>
                    “During my time at Freedom Private Limited, I ran multiple team-based projects and helped each team member with various tasks associated with each project.”
                    <br/><br/>
                    This example could be shortened and strengthened in the following way:
                    <br/><br/>
                    “Led multiple team-based projects and effectively coordinated group tasks.”
                    <br/><br/>
                    The revised version communicates the same ideas about your accomplishments while reducing the number of words and including more active language.</p>
                    
                    
                </div>
            </div>
        );
    }
}
export default Tips;