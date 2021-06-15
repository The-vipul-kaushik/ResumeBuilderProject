module.exports = ({
    name,
    careerObjective,
    email,
    phone,
    linkedin,
    designation,
    skills,
    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,
    exp2_org,
    exp2_pos,
    exp2_desc,
    exp2_dur,
    exp3_org,
    exp3_pos,
    exp3_desc,
    exp3_dur,
    proj1_title,
    proj1_link,
    proj1_desc,
    proj2_title,
    proj2_link,
    proj2_desc,
    edu1_school,
    edu1_year,
    edu1_qualification,
    edu1_desc,
    edu2_school,
    edu2_year,
    edu2_qualification,
    edu2_desc,
    achievement_1,
    achievement_2,
    achievement_3,
    achievement_4,
    award_1,
    award_2,
    award_3,
    award_4,
    ref1_name,
    ref1_job,
    ref1_rel,
    ref1_phn,
    ref1_address,
    ref2_name,
    ref2_job,
    ref2_rel,
    ref2_phn,
    ref2_address

}) => {
     return `
    <!doctype html>
    <html>  
        <head>
            <!-- Font Awesome -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
            <!-- Bootstrap core CSS -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
            <!-- Material Design Bootstrap -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
            <script src="https://kit.fontawesome.com/CE04E9AC-6E21-4765-A788-04633B0923C6.js" crossorigin="anonymous"></script>
            <style>
              html{
                  zoom: 1.07;
              }
              .mobile{
                margin-top:-10px;
              }
              .email{
                margin-bottom: 0;    
              }
              body{
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                padding-left: 10px
                margin-top: 100px;
              }
              .preview
                  {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  margin-top: 10px;
                  // border: 2px solid black;
                  height: 100%;
                  width: 90%;
                  z-index: 1;
                  // background-color: rgb(255, 251, 245)
                  }
            .previewbox
                  {
                  width: 100%;
                  // border: 2px solid red;
                  }           
                  .contact
                  {
                  // border: 2px solid green; 
                  }

            .horiLine{
                  border-bottom: 4px solid black;
                  width: 98%;
                  position: relative;
                  top: -10px;
                  margin: 0px;
                  margin-left: 15px;
                }
                .contact{
                      display: inline-block;
                }
                .contact:nth-child(2){
                  position: absolute;    
                  right: 50px;
                  margin-bottom: 30px;
                }
                .container{
                      margin-bottom: 50px
                }
            </style>
        
        </head>
        <body>

        <div class="preview">
        <div class="previewbox">
            <br/><br/>
            <div class="container">
                        <div class="text-left contact">
                              <h1><b>${name}</b></h1>
                              <p>${designation}</p>
                        </div>
                        <div class="text-right contact mt-0 mb-4">
                              <p class="lead email">${email} <i class="fas fa-envelope-square"></i></p>
                              <p class="lead email">(+91)${phone} <i class="fas fa-phone"></i></p>
                              <p class="lead email">${linkedin} <i class="fab fa-linkedin-in"></i></p>
                        </div>
            </div>
            <hr/>

                        <div class="col-lg-1">
                            <h3><b>Objective</b></h3>
                        </div>
                        <hr class="horiLine" />
                        <div class="col-lg-12 text-left">
                            <p class="lead"> ${careerObjective}</p>
                        </div>

            <div class="col-lg-1">
                <h3><b>Skills</b></h3>
            </div>
            <hr class="horiLine" />
            <div class="col-lg-3 text-left">
                <p class="lead"> ${skills}</p>
            </div>
            <br/>
        
            <div class="col-lg-1 ">
                <h3><b>Experience</b></h3>
            </div>
            <hr class="horiLine" />
            <div class="col-lg-4 col-sm-6 text-left">
                <p class="lead mb-0"><b>${exp1_org}, ${exp1_pos}</b> (${exp1_dur})</p>
                <p class="mt-0 ml-0">${exp1_desc}</p>
            </div>
            <div class="col-lg-4 col-sm-6 text-left">
                <p class="lead mb-0"><b>${exp2_org}, ${exp2_pos}</b> (${exp2_dur})</p>
                <p class="mt-0 ml-0">${exp2_desc}</p>
            </div>
            <div class="col-lg-4 col-sm-6 text-left">
                <p class="lead mb-0"><b>${exp3_org}, ${exp3_pos}</b> (${exp3_dur})</p>
                <p class="mt-0 ml-0">${exp3_desc}</p>
            </div>
            <br/>
        
            <div class="col-lg-1">
                <h3><b>Projects</b></h3>
            </div>
            <hr class="horiLine" />
            <div class="col-lg-6 text-left">
                <p class="lead mb-0"><b>${proj1_title}</b></p>
                <p class="mt-0 mb-0">${proj1_link}</p>
                <p class="mt-0">${proj1_desc}</p>
            </div>
            <div class="col-lg-5 text-left">
                <p class="lead mb-0"><b>${proj2_title}</b></p>
                <p class="mt-0 mb-0">${proj2_link}</p>
                <p class="mt-0">${proj2_desc}</p>
            </div>
            <br/>

            <div class="col-lg-1 mb-4">
                <h3><b>Education</b></h3>
            </div>
            <hr class="horiLine" />
            <div class="col-lg-6 text-left">
                <p class="lead mb-0"><b>${edu1_school}</b> (${edu1_qualification}, ${edu1_year})</p>
                <p class="mt-0 ">${edu1_desc}</p>
            </div>
            <div class="col-lg-6 text-left">
                <p class="lead mb-0"><b>${edu2_school}</b> (${edu2_qualification}, ${edu2_year})</p>
                <p class="mt-0">${edu2_desc}</p>
            </div>
            <br/>
        </div>
        </div>

        <div class="preview mt-5">
        <div class="previewbox mt-4">
            <div class="mt-5 col-lg-6 text-left">
                            <h3><b>Achievements</b></h3>
                        </div>
                        <hr class="horiLine" />
                        <div class="col-lg-8 text-left">
                                <p class="lead mb-0">${achievement_1} </p>
                                <p class="lead mb-0">${achievement_2} </p>
                                <p class="lead mb-0">${achievement_3} </p>
                                <p class="lead mb-3">${achievement_4} </p>
                        </div>

                        <div class="col-lg-6 text-left">
                            <h3><b>Awards</b></h3>
                        </div>
                        <hr class="horiLine" />
                        <div class="col-lg-8 text-left">
                                <p class="lead mb-0">${award_1} </p>
                                <p class="lead mb-0">${award_2} </p>
                                <p class="lead mb-0">${award_3} </p>
                                <p class="lead mb-3">${award_4} </p>
                        </div>

                        <div class="col-lg-1 ">
                            <h3><b>References</b></h3>
                        </div>
                        <hr class="horiLine" />
                        <div class="col-lg-4 col-sm-6 text-left">
                            <p class="lead mb-0"><b>${ref1_name}, ${ref1_job}</b> (${ref1_rel})</p>
                            <p class="mb-0"><b>Ph: </b>${ref1_phn}</p>
                            <p class="mb-3"><b>Address: </b>${ref1_address}</p>
                        </div>
                        <div class="col-lg-4 col-sm-6 text-left">
                            <p class="lead mb-0"><b>${ref2_name}, ${ref2_job}</b> (${ref2_rel})</p>
                            <p class="mb-0"><b>Ph: </b>${ref2_phn}</p>
                            <p class="mb-3"><b>Address: </b>${ref2_address}</p>
                        </div>
            
    </div>
</div>
        
            <!-- JQuery -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <!-- Bootstrap tooltips -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
            <!-- Bootstrap core JavaScript -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <!-- MDB core JavaScript -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
        </body>
    </html>    
      `;
}