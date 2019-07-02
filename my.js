"use strict";
function load ()
{ 
    
var payload= {};
var personalInfo = {};

personalInfo.FirstName =$("#FirstName").val();
personalInfo.MiddleName=$("#MiddleName").val();
personalInfo.LastName=$("#LastName").val();
var preview = document.querySelector('img');
personalInfo.uploadphoto= preview.src;
personalInfo.FatherName=$("#Father").val();
personalInfo.MotherName=$("#Mother").val();
personalInfo.DOB=$("#DOB").val();
personalInfo.Gender0=$("#Gender-0").val();
personalInfo.Gender1=$("#Gender-1").val();
personalInfo.Gender2=$("#Gender-2").val();
personalInfo.MaritalStatus0=$("#radios-0").val();
personalInfo.MaritalStatus1=$("#radios-1").val();
personalInfo.District=$("#District").val();
personalInfo.Area=$("#Area").val();
personalInfo.street=$("#Street").val();
personalInfo.District1=$("#District1").val();
personalInfo.Area1=$("#Area1").val();
personalInfo.Street1=$("#Street1").val();
payload.PersonalInfo = personalInfo;
//payload.uploadphoto=$("#Uploadphoto").val();

var TechnicalInformation = {};
TechnicalInformation.skills1=$("#usr1").val();
TechnicalInformation.Experience1=$("#usr2").val();
TechnicalInformation.certified1=$("#usr3").val();
TechnicalInformation.skills2=$("#usr4").val();
TechnicalInformation.Experience2=$("#usr5").val();
TechnicalInformation.certified2=$("#usr6").val();
TechnicalInformation.skills3=$("#usr7").val();
TechnicalInformation.Experience3=$("#usr8").val();
TechnicalInformation.certified3=$("#usr9").val(); 
payload.technicalInformation = TechnicalInformation;
var EducationalQualificationInformation={};

EducationalQualificationInformation.HighestQualification=$("#PrimaryOccupation").val();
EducationalQualificationInformation.UniversityInstitute=$("#UniversityInstitute").val();
EducationalQualificationInformation.CurrentCompany=$("#CurrentCompany").val();
EducationalQualificationInformation.ResignedFlag=$("#ResignedFlag").val();
EducationalQualificationInformation.LastWorkingDays=$("#LastWorkingDays").val();
EducationalQualificationInformation.FunctionalDomin=$("#FunctionalDomin").val();
EducationalQualificationInformation.CurrentCTC=$("#CurrentCTC").val();
EducationalQualificationInformation.ExpectedCTC=$("#ExpectedCTC").val();
EducationalQualificationInformation.Tex=$("#Tex").val();
EducationalQualificationInformation.Rex=$("#Rex").val();
EducationalQualificationInformation.Phonenumber1=$("#Phonenumber1").val();
EducationalQualificationInformation.Phonenumber2=$("#Phonenumber2").val();
EducationalQualificationInformation.EmailAddress=$("#EmailAddress").val();
EducationalQualificationInformation.Availabilitytime=$("#Availabilitytime").val();
EducationalQualificationInformation.AvailableServiceArea=$("#AvailableServiceArea").val();
EducationalQualificationInformation.LanguagesKnown0=$("#LanguagesKnown-0").val();
EducationalQualificationInformation.LanguagesKnown1=$("#LanguagesKnown-1").val();
EducationalQualificationInformation.LanguagesKnown2=$("#LanguagesKnown-3").val();
EducationalQualificationInformation.WorkingExperience=$("#WorkingExperiencetimeperiod").val();
EducationalQualificationInformation.Overviewmax200words=$("#Overviewmax200words").val();
payload.educationalQualificationInformation = EducationalQualificationInformation;
console.log(payload);
$.ajax({
    url: 'http://localhost:3000/myPage',
    type: 'post',
    data: {
        payload : payload
    },
    headers: {
        "Content-Type": "application/json"
        //for object property name, use quoted notation shown in second
    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
    }
});

}


