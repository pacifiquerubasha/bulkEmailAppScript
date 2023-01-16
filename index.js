
/**
 * Function that allows sending bulk emails from Google sheets
 * 
 */

function sendBulkEmail() {

    var emails = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("B82:B86").getValues(); //Collects the email addresses in a sheet by specifying the cells
    var names = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A82:A86").getValues(); //Collects the names or any other information to include in the email. Done the same way as for the email
  
    /**
     * FUnction that receives as arguments the variables to be included in the email
     * @param {*} name 
     * @returns email in HTML format
     */

    const makeMessage = (name)=>{
        return `
        <p>Greetings to ${name}!</p>
    
        <p>Thank you for your attention</p>
        
        <p>Regards, </p>
        
        <p>John Doe<br/>
        Fullstack Javascript developer<br/>
        </p>
        
        `
    }
  
    var subject = 'Congratulations! You are there'; //Subject of the email

    /**
     * The file to be attached to the email. The ID is gotten from the Drive file URL.
     * After uploading the file to be sent, you right click on the file then Get Link. Share with anyone with the link then copy it.
     * 
     * The link will look something like this : "https://drive.google.com/file/d/1pg35fOsfsfsg324esRuWsgf3ySV-h2HJDWBuZr4l6jDOmB/view?usp=share_link"
     * 
     * The ID is the hashed string between d/ and /view
     */
    var file = DriveApp.getFileById('1pg35fOsfsfsg324esRuWsgf3ySV-h2HJDWBuZr4l6jDOmB') 
  
    /**
     * The emails from the sheet will be in an array. Loop through them and send an email to each one of the array items.
     */
    emails.forEach(([email], index)=>{
        Logger.log({name:names[index], email}); //Logs the current name and email of recipient in the console.
  
        MailApp.sendEmail(email, subject, "", {htmlBody: makeMessage(names[index]), attachments: [file.getAs(MimeType.PDF)]}, );

    })
  
}
  