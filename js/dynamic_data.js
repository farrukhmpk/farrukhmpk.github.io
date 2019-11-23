$(function() {
    // Handler for .ready() called.
    $('#mgmtExp').text(managementExperience());
    $('#overallExp').text(overallExperience());
});

function managementExperience(){
    return moment().year() - 2014 + 1;
}

function overallExperience(){
    return moment().year() - 2005;
}