# Example of creating a download link from a PLC string 

## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## Overview 
In this demo we can provide a relative path to TcHmi via the PLC in order to change a clickable link on the HMI.  This can be used to provide end users with a way to retrieve files created by TwinCAT.  

Files can only be served from inside the following directory. 
C:\ProgramData\Beckhoff\TF2000 TwinCAT 3 HMI Server\service\<<YourProjectName>>\www

## Getting Started
Activate and run the PLC project, then open Desktop.view in live view using a browser.  The built-in live view will not support downloads. 

## Code Snippet
```javascript
function CreateDownloadLink(TargetHtmlHost, FileRelativePath) {

    var html = '<a href=\"' + FileRelativePath + '\" download=\"\">My Download Link </a>';
    TargetHtmlHost.setContent(html);

}
```

## Versions
* TcXaeShell 3.1.4024.17
* TE2000 1.12.748.0

## Need more help?
Please visit http://beckhoff.com/ for further guides
