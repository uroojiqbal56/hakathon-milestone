//Listing elements
var _a;
// document.getElementById('resumeForm')?.addEventListener('submit', function(event){
//     event.preventDefault();
//     //Type Assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement
//     const emailElement = document.getElementById('email') as HTMLInputElement
//     const phoneElement = document.getElementById('phone') as HTMLInputElement
//     const educationElement = document.getElementById('education') as HTMLInputElement
//     const experienceElement = document.getElementById('experience') as HTMLInputElement
//     const skillsElement = document.getElementById('skills') as HTMLInputElement
// if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const education = educationElement.value;
//     const experience = experienceElement.value;
//     const skills = skillsElement.value;
//     //Create Resume Output
//     const resumeOutput =`
//     <h2>Resume</h2>
//     <p><strong> Name:</strong>${name}</p>
//     <p><strong> Email:</strong>${email}</p>
//     <p><strong> phone:</strong>${phone}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>skills</h3>
//     <p>${skills}</p>
//     `
//     const resumeOutputElement = document.getElementById(resumeOutput)
//     if (resumeOutputElement){
//         resumeOutputElement.innerHTML = resumeOutput
//     }else {
//         console.error('the resume output elements are missing')
//     } ;
//      }else{ console.error('one or more output elements are missing');
//     };
// }
// )
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong> ").concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
